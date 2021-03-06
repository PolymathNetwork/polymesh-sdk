import { u64 } from '@polkadot/types';
import BigNumber from 'bignumber.js';
import sinon from 'sinon';

import { addInstruction, Context, Entity, Instruction, TransactionQueue, Venue } from '~/internal';
import { dsMockUtils, entityMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { VenueType } from '~/types';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/api/entities/Identity',
  require('~/testUtils/mocks/entities').mockIdentityModule('~/api/entities/Identity')
);
jest.mock(
  '~/api/entities/Instruction',
  require('~/testUtils/mocks/entities').mockInstructionModule('~/api/entities/Instruction')
);

describe('Venue class', () => {
  let context: Mocked<Context>;
  let venue: Venue;

  let id: BigNumber;

  let rawId: u64;

  beforeAll(() => {
    dsMockUtils.initMocks();
    entityMockUtils.initMocks();

    id = new BigNumber(1);
    rawId = dsMockUtils.createMockU64(id.toNumber());
  });

  beforeEach(() => {
    context = dsMockUtils.getContextInstance();
    venue = new Venue({ id }, context);
  });

  afterEach(() => {
    dsMockUtils.reset();
    entityMockUtils.reset();
  });

  afterAll(() => {
    dsMockUtils.cleanup();
    entityMockUtils.cleanup();
  });

  test('should extend Entity', () => {
    expect(Venue.prototype instanceof Entity).toBe(true);
  });

  describe('method: isUniqueIdentifiers', () => {
    test('should return true if the object conforms to the interface', () => {
      expect(Venue.isUniqueIdentifiers({ id: new BigNumber(1) })).toBe(true);
      expect(Venue.isUniqueIdentifiers({})).toBe(false);
      expect(Venue.isUniqueIdentifiers({ id: 3 })).toBe(false);
    });
  });

  describe('method: exists', () => {
    afterAll(() => {
      sinon.restore();
    });

    test('should return whether if the venue exists or not', async () => {
      const owner = 'someDid';

      entityMockUtils.configureMocks({ identityOptions: { did: owner } });
      sinon.stub(utilsConversionModule, 'numberToU64').withArgs(id, context).returns(rawId);

      dsMockUtils
        .createQueryStub('settlement', 'venueInfo')
        .withArgs(rawId)
        .resolves(dsMockUtils.createMockOption());

      const result = await venue.exists();

      expect(result).toEqual(false);
    });
  });

  describe('method: details', () => {
    afterAll(() => {
      sinon.restore();
    });

    test("should throw an error if the venue doesn't exist", async () => {
      dsMockUtils
        .createQueryStub('settlement', 'venueInfo')
        .resolves(dsMockUtils.createMockOption());

      entityMockUtils.configureMocks({
        numberedPortfolioOptions: {
          exists: false,
        },
      });

      return expect(venue.details()).rejects.toThrow("The Venue doesn't exist");
    });

    test('should return the Venue details', async () => {
      const description = 'someDescription';
      const type = VenueType.Other;
      const owner = 'someDid';

      entityMockUtils.configureMocks({ identityOptions: { did: owner } });
      sinon.stub(utilsConversionModule, 'numberToU64').withArgs(id, context).returns(rawId);

      dsMockUtils
        .createQueryStub('settlement', 'venueInfo')
        .withArgs(rawId)
        .resolves(
          dsMockUtils.createMockOption(
            dsMockUtils.createMockVenue({
              creator: dsMockUtils.createMockIdentityId(owner),
              instructions: [],
              details: dsMockUtils.createMockVenueDetails(description),
              // eslint-disable-next-line @typescript-eslint/camelcase
              venue_type: dsMockUtils.createMockVenueType(type),
            })
          )
        );

      const result = await venue.details();

      expect(result).toEqual({
        owner: entityMockUtils.getIdentityInstance(),
        description,
        type,
      });
    });
  });

  describe('method: getPendingInstructions', () => {
    afterAll(() => {
      sinon.restore();
    });

    test("should throw an error if the venue doesn't exist", async () => {
      dsMockUtils
        .createQueryStub('settlement', 'venueInfo')
        .resolves(dsMockUtils.createMockOption());

      entityMockUtils.configureMocks({
        numberedPortfolioOptions: {
          exists: false,
        },
      });

      return expect(venue.getPendingInstructions()).rejects.toThrow("The Venue doesn't exist");
    });

    test("should return the Venue's pending instructions", async () => {
      const description = 'someDescription';
      const type = VenueType.Other;
      const owner = 'someDid';
      const instructionId = new BigNumber(1);

      entityMockUtils.configureMocks({ instructionOptions: { id: instructionId } });
      sinon.stub(utilsConversionModule, 'numberToU64').withArgs(id, context).returns(rawId);

      dsMockUtils
        .createQueryStub('settlement', 'venueInfo')
        .withArgs(rawId)
        .resolves(
          dsMockUtils.createMockOption(
            dsMockUtils.createMockVenue({
              creator: dsMockUtils.createMockIdentityId(owner),
              instructions: [dsMockUtils.createMockU64(instructionId.toNumber())],
              details: dsMockUtils.createMockVenueDetails(description),
              // eslint-disable-next-line @typescript-eslint/camelcase
              venue_type: dsMockUtils.createMockVenueType(type),
            })
          )
        );

      const result = await venue.getPendingInstructions();

      expect(result[0].id).toEqual(instructionId);
    });
  });

  describe('method: addInstruction', () => {
    let prepareAddInstructionStub: sinon.SinonStub;

    beforeAll(() => {
      prepareAddInstructionStub = sinon.stub(addInstruction, 'prepare');
    });

    afterAll(() => {
      sinon.restore();
    });

    test('should prepare the procedure and return the resulting transaction queue', async () => {
      const legs = [
        {
          from: 'someDid',
          to: 'anotherDid',
          amount: new BigNumber(1000),
          token: 'SOME_TOKEN',
        },
        {
          from: 'anotherDid',
          to: 'aThirdDid',
          amount: new BigNumber(100),
          token: 'ANOTHER_TOKEN',
        },
      ];

      const tradeDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      const endBlock = new BigNumber(10000);

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<Instruction>;

      prepareAddInstructionStub
        .withArgs({ venueId: id, legs, tradeDate, endBlock }, context)
        .resolves(expectedQueue);

      const queue = await venue.addInstruction({ legs, tradeDate, endBlock });

      expect(queue).toBe(expectedQueue);
    });
  });
});
