import BigNumber from 'bignumber.js';
import { TxTags } from 'polymesh-types/types';

import { PolymeshError, Procedure, SecurityToken, TickerReservation } from '~/internal';
import {
  ErrorCode,
  RoleType,
  TickerReservationStatus,
  TokenDocument,
  TokenIdentifier,
  TokenType,
} from '~/types';
import { ProcedureAuthorization } from '~/types/internal';
import {
  booleanToBool,
  numberToBalance,
  stringToAssetName,
  stringToFundingRoundName,
  stringToTicker,
  tokenDocumentToDocument,
  tokenIdentifierToAssetIdentifier,
  tokenTypeToAssetType,
} from '~/utils/conversion';
import { batchArguments } from '~/utils/internal';

export interface CreateSecurityTokenParams {
  name: string;
  totalSupply: BigNumber;
  isDivisible: boolean;
  tokenType: TokenType;
  tokenIdentifiers?: TokenIdentifier[];
  fundingRound?: string;
  documents?: TokenDocument[];
}

/**
 * @hidden
 */
export type Params = CreateSecurityTokenParams & {
  ticker: string;
};

/**
 * @hidden
 */
export async function prepareCreateSecurityToken(
  this: Procedure<Params, SecurityToken>,
  args: Params
): Promise<SecurityToken> {
  const {
    context: {
      polymeshApi: { tx },
    },
    context,
  } = this;
  const {
    ticker,
    name,
    totalSupply,
    isDivisible,
    tokenType,
    tokenIdentifiers = [],
    fundingRound,
    documents,
  } = args;

  const reservation = new TickerReservation({ ticker }, context);

  const { status } = await reservation.details();

  if (status === TickerReservationStatus.TokenCreated) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: `A Security Token with ticker "${ticker}" already exists`,
    });
  }

  if (status === TickerReservationStatus.Free) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: `You must first reserve ticker "${ticker}" in order to create a Security Token with it`,
    });
  }

  const rawTicker = stringToTicker(ticker, context);
  const rawTotalSupply = numberToBalance(totalSupply, context, isDivisible);
  const rawName = stringToAssetName(name, context);
  const rawIsDivisible = booleanToBool(isDivisible, context);
  const rawType = tokenTypeToAssetType(tokenType, context);
  const rawIdentifiers = tokenIdentifiers.map(identifier =>
    tokenIdentifierToAssetIdentifier(identifier, context)
  );
  const rawFundingRound = fundingRound ? stringToFundingRoundName(fundingRound, context) : null;

  this.addTransaction(
    tx.asset.createAsset,
    {},
    rawName,
    rawTicker,
    rawTotalSupply,
    rawIsDivisible,
    rawType,
    rawIdentifiers,
    rawFundingRound
  );

  if (documents) {
    const rawDocuments = documents.map(doc => tokenDocumentToDocument(doc, context));
    batchArguments(rawDocuments, TxTags.asset.AddDocuments).forEach(rawDocumentBatch => {
      this.addTransaction(
        tx.asset.addDocuments,
        { isCritical: false, batchSize: rawDocumentBatch.length },
        rawDocumentBatch,
        rawTicker
      );
    });
  }

  return new SecurityToken({ ticker }, context);
}

/**
 * @hidden
 */
export function getAuthorization({ ticker, documents }: Params): ProcedureAuthorization {
  const transactions = [TxTags.asset.CreateAsset];

  if (documents) {
    transactions.push(TxTags.asset.AddDocuments);
  }

  return {
    identityRoles: [{ type: RoleType.TickerOwner, ticker }],
    signerPermissions: {
      transactions,
      tokens: [],
      portfolios: [],
    },
  };
}

/**
 * @hidden
 */
export const createSecurityToken = new Procedure(prepareCreateSecurityToken, getAuthorization);
