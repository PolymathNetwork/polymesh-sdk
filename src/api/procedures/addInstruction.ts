import { u64 } from '@polkadot/types';
import { Balance } from '@polkadot/types/interfaces';
import { ISubmittableResult } from '@polkadot/types/types';
import BigNumber from 'bignumber.js';
import P from 'bluebird';
import { PortfolioId, Ticker, TxTag, TxTags } from 'polymesh-types/types';

import { assertPortfolioExists } from '~/api/procedures/utils';
import {
  Context,
  DefaultPortfolio,
  Instruction,
  NumberedPortfolio,
  PolymeshError,
  PostTransactionValue,
  Procedure,
  SecurityToken,
} from '~/internal';
import { ErrorCode, InstructionType, PortfolioLike, RoleType } from '~/types';
import { ProcedureAuthorization } from '~/types/internal';
import {
  dateToMoment,
  endConditionToSettlementType,
  numberToBalance,
  numberToU64,
  portfolioIdToMeshPortfolioId,
  portfolioLikeToPortfolio,
  portfolioLikeToPortfolioId,
  stringToTicker,
  u64ToBigNumber,
} from '~/utils/conversion';
import { findEventRecord } from '~/utils/internal';

export interface AddInstructionParams {
  legs: {
    amount: BigNumber;
    from: PortfolioLike;
    to: PortfolioLike;
    token: string | SecurityToken;
  }[];
  validFrom?: Date;
  endBlock?: BigNumber;
}

export type Params = AddInstructionParams & {
  venueId: BigNumber;
};

/**
 * @hidden
 */
export const createAddInstructionResolver = (context: Context) => (
  receipt: ISubmittableResult
): Instruction => {
  const eventRecord = findEventRecord(receipt, 'settlement', 'InstructionCreated');
  const data = eventRecord.event.data;
  const id = u64ToBigNumber(data[2] as u64);

  return new Instruction({ id }, context);
};

/**
 * @hidden
 */
export async function prepareAddInstruction(
  this: Procedure<Params, Instruction>,
  args: Params
): Promise<PostTransactionValue<Instruction>> {
  const {
    context: {
      polymeshApi: {
        tx: { settlement },
      },
    },
    context,
  } = this;
  const { legs, venueId, endBlock, validFrom } = args;

  if (!legs.length) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: "The legs array can't be empty",
    });
  }

  let endCondition;
  let did: string;

  if (endBlock) {
    let latestBlock;
    [{ did }, latestBlock] = await Promise.all([
      context.getCurrentIdentity(),
      context.getLatestBlock(),
    ]);

    if (endBlock.lte(latestBlock)) {
      throw new PolymeshError({
        code: ErrorCode.ValidationError,
        message: 'End block must be a future block',
      });
    }

    endCondition = { type: InstructionType.SettleOnBlock, value: endBlock } as const;
  } else {
    ({ did } = await context.getCurrentIdentity());

    endCondition = { type: InstructionType.SettleOnAffirmation } as const;
  }

  const rawVenueId = numberToU64(venueId, context);
  const rawSettlementType = endConditionToSettlementType(endCondition, context);
  const rawValidFrom = validFrom ? dateToMoment(validFrom, context) : null;
  const rawLegs: {
    from: PortfolioId;
    to: PortfolioId;
    asset: Ticker;
    amount: Balance;
  }[] = [];
  const rawPortfolios: PortfolioId[] = [];

  await Promise.all(
    legs.map(async ({ from, to, amount, token }) => {
      const fromId = portfolioLikeToPortfolioId(from);
      const toId = portfolioLikeToPortfolioId(to);

      const fromPortfolio = portfolioLikeToPortfolio(from, context);
      const toPortfolio = portfolioLikeToPortfolio(to, context);

      const [{ did: fromCustodian }, { did: toCustodian }] = await Promise.all([
        fromPortfolio.getCustodian(),
        toPortfolio.getCustodian(),
        assertPortfolioExists(fromId, context),
        assertPortfolioExists(toId, context),
      ]);

      const rawFromPortfolio = portfolioIdToMeshPortfolioId(fromId, context);
      const rawToPortfolio = portfolioIdToMeshPortfolioId(toId, context);

      if (fromCustodian === did) {
        rawPortfolios.push(rawFromPortfolio);
      }

      if (toCustodian === did) {
        rawPortfolios.push(rawToPortfolio);
      }

      rawLegs.push({
        from: rawFromPortfolio,
        to: rawToPortfolio,
        asset: stringToTicker(typeof token === 'string' ? token : token.ticker, context),
        amount: numberToBalance(amount, context),
      });
    })
  );

  let newInstruction;

  if (rawPortfolios.length) {
    [newInstruction] = this.addTransaction(
      settlement.addAndAffirmInstruction,
      {
        resolvers: [createAddInstructionResolver(context)],
      },
      rawVenueId,
      rawSettlementType,
      rawValidFrom,
      rawLegs,
      rawPortfolios
    );
  } else {
    [newInstruction] = this.addTransaction(
      settlement.addInstruction,
      {
        resolvers: [createAddInstructionResolver(context)],
      },
      rawVenueId,
      rawSettlementType,
      rawValidFrom,
      rawLegs
    );
  }

  return newInstruction;
}

/**
 * @hidden
 */
export async function getAuthorization(
  this: Procedure<Params, Instruction>,
  { venueId, legs }: Params
): Promise<ProcedureAuthorization> {
  const { context } = this;
  const portfolios: (DefaultPortfolio | NumberedPortfolio)[] = [];
  let transactions: TxTag[];

  const identity = await context.getCurrentIdentity();

  await P.map(legs, async ({ from, to }) => {
    const fromPortfolio = portfolioLikeToPortfolio(from, context);
    const toPortfolio = portfolioLikeToPortfolio(to, context);

    const [fromCustodied, toCustodied] = await Promise.all([
      fromPortfolio.isCustodiedBy({ identity }),
      toPortfolio.isCustodiedBy({ identity }),
    ]);

    if (fromCustodied) {
      portfolios.push(fromPortfolio);
    }

    if (toCustodied) {
      portfolios.push(toPortfolio);
    }
  });

  if (portfolios.length) {
    transactions = [TxTags.settlement.AddAndAffirmInstruction];
  } else {
    transactions = [TxTags.settlement.AddInstruction];
  }

  return {
    identityRoles: [{ type: RoleType.VenueOwner, venueId }],
    signerPermissions: {
      tokens: [],
      portfolios,
      transactions,
    },
  };
}

/**
 * @hidden
 */
export const addInstruction = new Procedure(prepareAddInstruction, getAuthorization);
