import BigNumber from 'bignumber.js';
import P from 'bluebird';

import { Entity, Identity, Instruction } from '~/api/entities';
import { addInstruction, AddInstructionParams } from '~/api/procedures';
import { Context, TransactionQueue } from '~/base';
import { InstructionStatus } from '~/types';
import {
  identityIdToString,
  meshVenueTypeToVenueType,
  numberToU64,
  u64ToBigNumber,
  venueDetailsToString,
} from '~/utils/conversion';

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

    const { creator, details, venue_type: type } = await settlement.venueInfo(
      numberToU64(id, context)
    );

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

    const { instructions: rawInstructions } = await settlement.venueInfo(numberToU64(id, context));

    const instructions = rawInstructions.map(
      instructionId => new Instruction({ id: u64ToBigNumber(instructionId) }, context)
    );

    return P.filter(instructions, async instruction => {
      const { status } = await instruction.details();

      return status === InstructionStatus.Pending;
    });
  }

  /**
   * Creates a settlement instruction in this Venue
   *
   * @param args.legs - array of token movements (amount, from, to, token)
   * @param args.validFrom - date from which the instruction is valid and can be authorized by the participants (optional, instruction will be valid from the start if not supplied)
   * @param args.endBlock - block at which the instruction will be executed automatically (optional, the instruction will be executed when all participants have authorized it if not supplied)
   */
  public async addInstruction(args: AddInstructionParams): Promise<TransactionQueue<Instruction>> {
    const { id, context } = this;

    return addInstruction.prepare({ ...args, venueId: id }, context);
  }
}