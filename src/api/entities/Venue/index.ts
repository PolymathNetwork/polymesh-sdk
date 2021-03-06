import BigNumber from 'bignumber.js';
import P from 'bluebird';

import {
  addInstruction,
  AddInstructionParams,
  Context,
  Entity,
  Identity,
  Instruction,
  PolymeshError,
} from '~/internal';
import { ErrorCode, InstructionStatus } from '~/types';
import { ProcedureMethod } from '~/types/internal';
import {
  identityIdToString,
  meshVenueTypeToVenueType,
  numberToU64,
  u64ToBigNumber,
  venueDetailsToString,
} from '~/utils/conversion';
import { createProcedureMethod } from '~/utils/internal';

import { VenueDetails } from './types';

export interface UniqueIdentifiers {
  id: BigNumber;
}

/**
 * Represents a Venue through which settlements are handled
 */
export class Venue extends Entity<UniqueIdentifiers> {
  /**
   * @hidden
   * Check if a value is of type [[UniqueIdentifiers]]
   */
  public static isUniqueIdentifiers(identifier: unknown): identifier is UniqueIdentifiers {
    const { id } = identifier as UniqueIdentifiers;

    return id instanceof BigNumber;
  }

  /**
   * Identifier number of the venue
   */
  public id: BigNumber;

  /**
   * @hidden
   */
  public constructor(identifiers: UniqueIdentifiers, context: Context) {
    super(identifiers, context);

    const { id } = identifiers;

    this.id = id;

    this.addInstruction = createProcedureMethod(
      args => [addInstruction, { ...args, venueId: id }],
      context
    );
  }

  /**
   * Retrieve whether the Venue exists
   */
  public async exists(): Promise<boolean> {
    const {
      context: {
        polymeshApi: {
          query: { settlement },
        },
      },
      id,
      context,
    } = this;

    const venueInfo = await settlement.venueInfo(numberToU64(id, context));

    return !venueInfo.isEmpty;
  }

  /**
   * Retrieve information specific to this venue
   */
  public async details(): Promise<VenueDetails> {
    const {
      context: {
        polymeshApi: {
          query: { settlement },
        },
      },
      id,
      context,
    } = this;

    const exists = await this.exists();

    if (!exists) {
      throw new PolymeshError({
        code: ErrorCode.ValidationError,
        message: "The Venue doesn't exist",
      });
    }

    const venueInfo = await settlement.venueInfo(numberToU64(id, context));

    const { creator, details, venue_type: type } = venueInfo.unwrap();

    return {
      owner: new Identity({ did: identityIdToString(creator) }, context),
      description: venueDetailsToString(details),
      type: meshVenueTypeToVenueType(type),
    };
  }

  /**
   * Retrieve all pending Instructions in this Venue
   */
  public async getPendingInstructions(): Promise<Instruction[]> {
    const {
      context: {
        polymeshApi: {
          query: { settlement },
        },
      },
      id,
      context,
    } = this;

    const exists = await this.exists();

    if (!exists) {
      throw new PolymeshError({
        code: ErrorCode.ValidationError,
        message: "The Venue doesn't exist",
      });
    }

    const venueInfo = await settlement.venueInfo(numberToU64(id, context));

    const { instructions: rawInstructions } = venueInfo.unwrap();

    const instructions = rawInstructions.map(
      instructionId => new Instruction({ id: u64ToBigNumber(instructionId) }, context)
    );

    return P.filter(instructions, async instruction => {
      const { status } = await instruction.details();

      return status === InstructionStatus.Pending;
    });
  }

  /**
   * Creates a settlement Instruction in this Venue
   *
   * @param args.legs - array of token movements (amount, from, to, token)
   * @param args.tradeDate - date at which the trade was agreed upon (optional, for offchain trades)
   * @param args.valueDate - date at which the trade was executed (optional, for offchain trades)
   * @param args.endBlock - block at which the Instruction will be executed automatically (optional, the Instruction will be executed when all participants have authorized it if not supplied)
   *
   * @note required role:
   *   - Venue Owner
   */
  public addInstruction: ProcedureMethod<AddInstructionParams, Instruction>;
}
