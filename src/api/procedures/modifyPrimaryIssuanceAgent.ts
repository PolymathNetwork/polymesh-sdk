import { Identity, PolymeshError, Procedure, SecurityToken } from '~/internal';
import { AuthorizationType, ErrorCode, RoleType, TxTags } from '~/types';
import { ProcedureAuthorization, SignerType } from '~/types/internal';
import {
  authorizationToAuthorizationData,
  dateToMoment,
  signerToString,
  signerValueToSignatory,
} from '~/utils/conversion';

export interface ModifyPrimaryIssuanceAgentParams {
  target: string | Identity;
  requestExpiry?: Date;
}

/**
 * @hidden
 */
export type Params = ModifyPrimaryIssuanceAgentParams & {
  ticker: string;
};

/**
 * @hidden
 */
export async function prepareModifyPrimaryIssuanceAgent(
  this: Procedure<Params, void>,
  args: Params
): Promise<void> {
  const {
    context: {
      polymeshApi: {
        tx: { identity },
      },
    },
    context,
  } = this;

  const { target, ticker, requestExpiry } = args;

  const securityToken = new SecurityToken({ ticker }, context);

  const [invalidDids, { primaryIssuanceAgent }] = await Promise.all([
    context.getInvalidDids([target]),
    securityToken.details(),
  ]);

  if (invalidDids.length) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'The supplied Identity does not exist',
    });
  }

  if (primaryIssuanceAgent.did === signerToString(target)) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'The supplied Identity is currently the primary issuance agent',
    });
  }

  const rawSignatory = signerValueToSignatory(
    { type: SignerType.Identity, value: signerToString(target) },
    context
  );

  const rawAuthorizationData = authorizationToAuthorizationData(
    { type: AuthorizationType.TransferPrimaryIssuanceAgent, value: ticker },
    context
  );

  let rawExpiry;
  if (requestExpiry) {
    if (requestExpiry <= new Date()) {
      throw new PolymeshError({
        code: ErrorCode.ValidationError,
        message: 'The request expiry must be a future date',
      });
    } else {
      rawExpiry = dateToMoment(requestExpiry, context);
    }
  } else {
    rawExpiry = null;
  }

  this.addTransaction(identity.addAuthorization, {}, rawSignatory, rawAuthorizationData, rawExpiry);
}

/**
 * @hidden
 */
export function getAuthorization(
  this: Procedure<Params>,
  { ticker }: Params
): ProcedureAuthorization {
  return {
    identityRoles: [{ type: RoleType.TokenOwner, ticker }],
    signerPermissions: {
      transactions: [TxTags.identity.AddAuthorization],
      portfolios: [],
      tokens: [new SecurityToken({ ticker }, this.context)],
    },
  };
}

/**
 * @hidden
 */
export const modifyPrimaryIssuanceAgent = new Procedure(
  prepareModifyPrimaryIssuanceAgent,
  getAuthorization
);
