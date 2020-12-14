import { Moment } from '@polkadot/types/interfaces';
import { cloneDeep, isEqual, uniq } from 'lodash';
import { Claim as MeshClaim, IdentityId } from 'polymesh-types/types';

import { PolymeshError, Procedure } from '~/internal';
import { didsWithClaims } from '~/middleware/queries';
import { Claim as MiddlewareClaim, Query } from '~/middleware/types';
import {
  Claim,
  ClaimTarget,
  ClaimType,
  Ensured,
  ErrorCode,
  isScopedClaim,
  Role,
  RoleType,
} from '~/types';
import { ClaimOperation, Extrinsics, MapMaybePostTransactionValue } from '~/types/internal';
import { tuple } from '~/types/utils';
import {
  claimToMeshClaim,
  dateToMoment,
  identityIdToString,
  middlewareScopeToScope,
  signerToString,
  stringToIdentityId,
} from '~/utils/conversion';

interface AddClaimsParams {
  claims: ClaimTarget[];
  operation: ClaimOperation.Add;
}

interface EditClaimsParams {
  claims: ClaimTarget[];
  operation: ClaimOperation.Edit;
}

interface RevokeClaimsParams {
  claims: Omit<ClaimTarget, 'expiry'>[];
  operation: ClaimOperation.Revoke;
}

export type ModifyClaimsParams = AddClaimsParams | EditClaimsParams | RevokeClaimsParams;

/**
 * @hidden
 */
export function groupByDid([target]: MapMaybePostTransactionValue<
  Parameters<Extrinsics['identity']['addClaim']>
>): string {
  return identityIdToString(target as IdentityId);
}

/**
 * @hidden
 */
export async function prepareModifyClaims(
  this: Procedure<ModifyClaimsParams, void>,
  args: ModifyClaimsParams
): Promise<void> {
  const { claims, operation } = args;

  const {
    context: {
      polymeshApi: {
        tx: { identity },
      },
    },
    context,
  } = this;

  const modifyClaimArgs: [IdentityId, MeshClaim, Moment | null][] = [];
  let allTargets: string[] = [];

  claims.forEach(({ target, expiry, claim }: ClaimTarget) => {
    allTargets.push(signerToString(target));
    modifyClaimArgs.push(
      tuple(
        stringToIdentityId(signerToString(target), context),
        claimToMeshClaim(claim, context),
        expiry ? dateToMoment(expiry, context) : null
      )
    );
  });

  allTargets = uniq(allTargets);

  const [nonExistentDids, middlewareAvailable] = await Promise.all([
    context.getInvalidDids(allTargets),
    context.isMiddlewareAvailable(),
  ]);

  if (nonExistentDids.length) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'Some of the supplied Identity IDs do not exist',
      data: {
        nonExistentDids,
      },
    });
  }

  // skip validation if the middleware is unavailable
  if (operation !== ClaimOperation.Add && middlewareAvailable) {
    const { did: currentDid } = await context.getCurrentIdentity();
    const {
      data: {
        didsWithClaims: { items: currentClaims },
      },
    } = await context.queryMiddleware<Ensured<Query, 'didsWithClaims'>>(
      didsWithClaims({
        dids: allTargets,
        trustedClaimIssuers: [currentDid],
        includeExpired: true,
        count: allTargets.length,
      })
    );
    const claimsByDid = currentClaims.reduce<Record<string, MiddlewareClaim[]>>(
      (prev, { did, claims: didClaims }) => {
        const copy = cloneDeep(prev);
        copy[did] = didClaims;

        return copy;
      },
      {}
    );

    const nonExistentClaims: Claim[] = [];
    claims.forEach(({ target, claim }) => {
      const targetClaims = claimsByDid[signerToString(target)] ?? [];

      const claimExists = !!targetClaims.find(({ scope, type }) => {
        let isSameScope = true;

        if (isScopedClaim(claim)) {
          isSameScope = scope ? isEqual(middlewareScopeToScope(scope), claim.scope) : false;
        }

        return isSameScope && ClaimType[type] === claim.type;
      });

      if (!claimExists) {
        nonExistentClaims.push(claim);
      }
    });

    if (nonExistentClaims.length) {
      throw new PolymeshError({
        code: ErrorCode.ValidationError,
        message: `Attempt to ${
          operation === ClaimOperation.Edit ? 'edit' : 'revoke'
        } claims that weren't issued by the current Identity`,
        data: {
          nonExistentClaims,
        },
      });
    }
  }

  let transaction: typeof identity.addClaim | typeof identity.revokeClaim;

  if (operation === ClaimOperation.Revoke) {
    transaction = identity.revokeClaim;
  } else {
    transaction = identity.addClaim;
  }

  this.addBatchTransaction(transaction, { groupByFn: groupByDid }, modifyClaimArgs);
}

/**
 * @hidden
 */
export function getRequiredRoles({ claims }: ModifyClaimsParams): Role[] {
  if (claims.some(({ claim: { type } }) => type === ClaimType.CustomerDueDiligence)) {
    return [{ type: RoleType.CddProvider }];
  }
  return [];
}

/**
 * @hidden
 */
export const modifyClaims = new Procedure(prepareModifyClaims, getRequiredRoles);
