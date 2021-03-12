import { u64 } from '@polkadot/types';
import BigNumber from 'bignumber.js';
import { Ticker, TxTags } from 'polymesh-types/types';
import sinon from 'sinon';

import {
  getAuthorization,
  Params,
  prepareRemoveCheckpointSchedule,
} from '~/api/procedures/removeCheckpointSchedule';
import { Context } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { RoleType } from '~/types';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/api/entities/SecurityToken',
  require('~/testUtils/mocks/entities').mockSecurityTokenModule('~/api/entities/SecurityToken')
);

describe('removeCheckpointSchedule procedure', () => {
  let mockContext: Mocked<Context>;
  let stringToTickerStub: sinon.SinonStub;
  let numberToU64Stub: sinon.SinonStub;
  let u32ToBigNumberStub: sinon.SinonStub;
  let ticker: string;
  let rawTicker: Ticker;
  let addTransactionStub: sinon.SinonStub;
  let id: BigNumber;
  let rawId: u64;

  beforeAll(() => {
    dsMockUtils.initMocks();
    procedureMockUtils.initMocks();
    entityMockUtils.initMocks();
    stringToTickerStub = sinon.stub(utilsConversionModule, 'stringToTicker');
    numberToU64Stub = sinon.stub(utilsConversionModule, 'numberToU64');
    u32ToBigNumberStub = sinon.stub(utilsConversionModule, 'u32ToBigNumber');
    ticker = 'someTicker';
    rawTicker = dsMockUtils.createMockTicker(ticker);
    id = new BigNumber(1);
    rawId = dsMockUtils.createMockU64(id.toNumber());
  });

  beforeEach(() => {
    mockContext = dsMockUtils.getContextInstance();
    stringToTickerStub.returns(rawTicker);
    numberToU64Stub.returns(rawId);
    addTransactionStub = procedureMockUtils.getAddTransactionStub();

    dsMockUtils.createQueryStub('checkpoint', 'scheduleRefCount');
  });

  afterEach(() => {
    entityMockUtils.reset();
    procedureMockUtils.reset();
    dsMockUtils.reset();
  });

  afterAll(() => {
    entityMockUtils.cleanup();
    procedureMockUtils.cleanup();
    dsMockUtils.cleanup();
  });

  test('should throw an error if Schedule Ref Count is not zero', async () => {
    const args = {
      ticker,
      schedule: id,
    };

    u32ToBigNumberStub.returns(new BigNumber(1));

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    return expect(prepareRemoveCheckpointSchedule.call(proc, args)).rejects.toThrow(
      'You cannot remove this Schedule'
    );
  });

  test('should add a remove schedule transaction to the queue', async () => {
    const args = {
      ticker,
      schedule: id,
    };

    u32ToBigNumberStub.returns(new BigNumber(0));

    let transaction = dsMockUtils.createTxStub('checkpoint', 'removeSchedule');
    let proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    await prepareRemoveCheckpointSchedule.call(proc, args);

    sinon.assert.calledWith(addTransactionStub, transaction, {}, rawTicker);

    transaction = dsMockUtils.createTxStub('checkpoint', 'removeSchedule');
    proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    await prepareRemoveCheckpointSchedule.call(proc, {
      ticker,
      schedule: entityMockUtils.getCheckpointScheduleInstance({
        id: new BigNumber(1),
      }),
    });

    sinon.assert.calledWith(addTransactionStub, transaction, {}, rawTicker);
  });

  describe('getAuthorization', () => {
    test('should return the appropriate roles and permissions', () => {
      const proc = procedureMockUtils.getInstance<Params, void>(mockContext);
      const boundFunc = getAuthorization.bind(proc);
      const args = {
        ticker,
      } as Params;

      expect(boundFunc(args)).toEqual({
        identityRoles: [{ type: RoleType.TokenOwner, ticker }],
        signerPermissions: {
          transactions: [TxTags.checkpoint.RemoveSchedule],
          tokens: [entityMockUtils.getSecurityTokenInstance({ ticker })],
          portfolios: [],
        },
      });
    });
  });
});
