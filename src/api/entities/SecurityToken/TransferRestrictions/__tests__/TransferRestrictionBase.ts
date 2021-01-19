import BigNumber from 'bignumber.js';
import sinon from 'sinon';

import {
  AddCountTransferRestrictionParams,
  AddPercentageTransferRestrictionParams,
  addTransferRestriction,
  Context,
  Namespace,
  SecurityToken,
  TransactionQueue,
} from '~/internal';
import { TransferManager } from '~/polkadot';
import { dsMockUtils, entityMockUtils } from '~/testUtils/mocks';
import { CountTransferRestriction, PercentageTransferRestriction } from '~/types';
import { TransferRestrictionType } from '~/types/internal';

import { Count } from '../Count';
import { Percentage } from '../Percentage';
import { TransferRestrictionBase } from '../TransferRestrictionBase';

jest.mock(
  '~/api/entities/Identity',
  require('~/testUtils/mocks/entities').mockIdentityModule('~/api/entities/Identity')
);

describe('TransferRestrictionBase class', () => {
  beforeAll(() => {
    entityMockUtils.initMocks();
    dsMockUtils.initMocks();
  });

  afterEach(() => {
    dsMockUtils.reset();
  });

  afterAll(() => {
    dsMockUtils.cleanup();
  });

  test('should extend namespace', () => {
    expect(TransferRestrictionBase.prototype instanceof Namespace).toBe(true);
  });

  describe('method: addRestriction', () => {
    let context: Context;
    let token: SecurityToken;

    beforeAll(() => {
      context = dsMockUtils.getContextInstance();
      token = entityMockUtils.getSecurityTokenInstance();
    });

    afterEach(() => {
      sinon.restore();
    });

    test('should prepare the procedure (count) with the correct arguments and context, and return the resulting transaction queue', async () => {
      const count = new Count(token, context);

      const args: Omit<AddCountTransferRestrictionParams, 'type'> = {
        count: new BigNumber(3),
        exempted: ['someScopeId'],
      };

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<number>;

      sinon
        .stub(addTransferRestriction, 'prepare')
        .withArgs({ ticker: token.ticker, ...args, type: TransferRestrictionType.Count }, context)
        .resolves(expectedQueue);

      const queue = await count.addRestriction({
        ...args,
      });

      expect(queue).toBe(expectedQueue);
    });

    test('should prepare the procedure (percentage) with the correct arguments and context, and return the resulting transaction queue', async () => {
      const percentage = new Percentage(token, context);

      const args: Omit<AddPercentageTransferRestrictionParams, 'type'> = {
        percentage: new BigNumber(3),
        exempted: ['someScopeId'],
      };

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<number>;

      sinon
        .stub(addTransferRestriction, 'prepare')
        .withArgs(
          { ticker: token.ticker, ...args, type: TransferRestrictionType.Percentage },
          context
        )
        .resolves(expectedQueue);

      const queue = await percentage.addRestriction({
        ...args,
      });

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: get', () => {
    let context: Context;
    let token: SecurityToken;
    let scopeId: string;
    let countRestriction: CountTransferRestriction;
    let percentageRestriction: PercentageTransferRestriction;
    let rawCountRestriction: TransferManager;
    let rawPercentageRestriction: TransferManager;

    beforeAll(() => {
      context = dsMockUtils.getContextInstance();
      token = entityMockUtils.getSecurityTokenInstance();
      scopeId = 'someScopeId';
      countRestriction = {
        exempted: [scopeId],
        count: new BigNumber(10),
      };
      percentageRestriction = {
        exempted: [scopeId],
        percentage: new BigNumber(49),
      };
      rawCountRestriction = dsMockUtils.createMockTransferManager({
        CountTransferManager: dsMockUtils.createMockU64(countRestriction.count.toNumber()),
      });
      rawPercentageRestriction = dsMockUtils.createMockTransferManager({
        PercentageTransferManager: dsMockUtils.createMockPermill(
          percentageRestriction.percentage.toNumber() * 10000
        ),
      });
    });

    beforeEach(() => {
      dsMockUtils.createQueryStub('statistics', 'activeTransferManagers', {
        returnValue: [rawCountRestriction, rawPercentageRestriction],
      });
      dsMockUtils.createQueryStub('statistics', 'exemptEntities', {
        entries: [[[null, dsMockUtils.createMockScopeId(scopeId)], true]],
      });
    });

    afterEach(() => {
      sinon.restore();
    });

    test('should return all count transfer restrictions', async () => {
      const count = new Count(token, context);

      const result = await count.get();

      expect(result).toEqual({
        restrictions: [countRestriction],
        availableSlots: 1,
      });
    });

    test('should return all percentage transfer restrictions', async () => {
      const percentage = new Percentage(token, context);

      const result = await percentage.get();

      expect(result).toEqual({
        restrictions: [percentageRestriction],
        availableSlots: 1,
      });
    });
  });
});
