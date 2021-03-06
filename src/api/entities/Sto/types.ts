import BigNumber from 'bignumber.js';

import { DefaultPortfolio, Identity, NumberedPortfolio, Venue } from '~/internal';

export enum StoStatus {
  Live = 'Live',
  Frozen = 'Frozen',
  Closed = 'Closed',
}

export interface StoTier {
  amount: BigNumber;
  price: BigNumber;
}

export interface Tier extends StoTier {
  remaining: BigNumber;
}

export interface StoDetails {
  creator: Identity;
  offeringPortfolio: NumberedPortfolio | DefaultPortfolio;
  raisingPortfolio: NumberedPortfolio | DefaultPortfolio;
  raisingCurrency: string;
  tiers: Tier[];
  venue: Venue;
  start: Date;
  end: Date | null;
  status: StoStatus;
  minInvestment: BigNumber;
}

export interface Investment {
  investor: Identity;
  soldAmount: BigNumber;
  investedAmount: BigNumber;
}
