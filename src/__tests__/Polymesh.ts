import { Keyring } from '@polkadot/api';
import BigNumber from 'bignumber.js';
import sinon from 'sinon';

import { Identity, TickerReservation } from '~/api/entities';
import { addClaims, reserveTicker, revokeClaims, transferPolyX } from '~/api/procedures';
import { TransactionQueue } from '~/base';
import { didsWithClaims } from '~/harvester/queries';
import { IdentityWithClaims } from '~/harvester/types';
import { Polymesh } from '~/Polymesh';
import { apolloMockUtils, polkadotMockUtils } from '~/testUtils/mocks';
import { ClaimTargets, ClaimType, SubCallback } from '~/types';
import * as utilsModule from '~/utils';

jest.mock(
  '@polkadot/api',
  require('~/testUtils/mocks/dataSources').mockPolkadotModule('@polkadot/api')
);
jest.mock('~/context', require('~/testUtils/mocks/dataSources').mockContextModule('~/context'));
jest.mock('apollo-client', require('~/testUtils/mocks/apollo').mockApolloModule('apollo-client'));

describe('Polymesh Class', () => {
  beforeAll(() => {
    polkadotMockUtils.initMocks();
    apolloMockUtils.initMocks();
  });

  afterEach(() => {
    polkadotMockUtils.reset();
  });

  afterAll(() => {
    polkadotMockUtils.cleanup();
  });

  describe('method: create', () => {
    test('should instantiate Context and return a Polymesh instance', async () => {
      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
      });

      expect(polymesh instanceof Polymesh).toBe(true);
    });

    test('should instantiate Context with a seed and return a Polymesh instance', async () => {
      const accountSeed = 'Alice'.padEnd(32, ' ');
      const createStub = polkadotMockUtils.getContextCreateStub();

      await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountSeed,
      });

      sinon.assert.calledOnce(createStub);
      sinon.assert.calledWith(createStub, {
        polymeshApi: polkadotMockUtils.getApiInstance(),
        harvesterClient: apolloMockUtils.getHarvesterClient(),
        seed: accountSeed,
      });
    });

    test('should instantiate Context with a keyring and return a Polymesh instance', async () => {
      const keyring = {} as Keyring;
      const createStub = polkadotMockUtils.getContextCreateStub();

      await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        keyring,
      });

      sinon.assert.calledOnce(createStub);
      sinon.assert.calledWith(createStub, {
        polymeshApi: polkadotMockUtils.getApiInstance(),
        harvesterClient: apolloMockUtils.getHarvesterClient(),
        keyring,
      });
    });

    test('should instantiate Context with a uri and return a Polymesh instance', async () => {
      const accountUri = '//uri';
      const createStub = polkadotMockUtils.getContextCreateStub();

      await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri,
      });

      sinon.assert.calledOnce(createStub);
      sinon.assert.calledWith(createStub, {
        polymeshApi: polkadotMockUtils.getApiInstance(),
        harvesterClient: apolloMockUtils.getHarvesterClient(),
        uri: accountUri,
      });
    });

    test('should throw if Context fails in the connection process', async () => {
      polkadotMockUtils.throwOnApiCreation();
      const nodeUrl = 'wss://some.url';
      const polymeshApiPromise = Polymesh.connect({
        nodeUrl,
      });

      return expect(polymeshApiPromise).rejects.toThrow(
        `Error while connecting to "${nodeUrl}": "Error"`
      );
    });

    test('should throw if Context create method fails', () => {
      polkadotMockUtils.throwOnContextCreation();
      const nodeUrl = 'wss://some.url';
      const polymeshApiPromise = Polymesh.connect({
        nodeUrl,
      });

      return expect(polymeshApiPromise).rejects.toThrow(
        `Error while connecting to "${nodeUrl}": "Error"`
      );
    });
  });

  // TODO: uncomment the method after v1
  /*
  describe('method: getIdentityBalance', () => {
    test("should return the identity's POLYX balance", async () => {
      const fakeBalance = new BigNumber(20);
      polkadotMockUtils.configureMocks({
        contextOptions: { withSeed: true, balance: fakeBalance },
      });

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountSeed: 'seed',
      });

      const result = await polymesh.getIdentityBalance();
      expect(result).toEqual(fakeBalance);
    });
  });
  */

  describe('method: getAccountBalance', () => {
    test('should return the free POLYX balance of the current account', async () => {
      const fakeBalance = new BigNumber(100);
      polkadotMockUtils.configureMocks({ contextOptions: { balance: fakeBalance } });

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
      });

      const result = await polymesh.getAccountBalance();
      expect(result).toEqual(fakeBalance);
    });

    test('should return the free POLYX balance of the supplied account', async () => {
      const fakeBalance = new BigNumber(100);
      polkadotMockUtils.configureMocks({ contextOptions: { balance: fakeBalance } });

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
      });

      const result = await polymesh.getAccountBalance({ accountId: 'someId' });
      expect(result).toEqual(fakeBalance);
    });

    test('should allow subscription (with and without a supplied account id)', async () => {
      const fakeBalance = new BigNumber(100);
      const unsubCallback = 'unsubCallback';
      polkadotMockUtils.configureMocks({ contextOptions: { balance: fakeBalance } });

      const accountBalanceStub = polkadotMockUtils
        .getContextInstance()
        .accountBalance.resolves(unsubCallback);

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
      });

      const callback = (() => 1 as unknown) as SubCallback<BigNumber>;
      let result = await polymesh.getAccountBalance(callback);
      expect(result).toEqual(unsubCallback);
      sinon.assert.calledWithExactly(accountBalanceStub, undefined, callback);

      const accountId = 'someId';
      result = await polymesh.getAccountBalance({ accountId }, callback);
      expect(result).toEqual(unsubCallback);
      sinon.assert.calledWithExactly(accountBalanceStub, accountId, callback);
    });
  });

  describe('method: reserveTicker', () => {
    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const context = polkadotMockUtils.getContextInstance();

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
      });

      const args = {
        ticker: 'someTicker',
      };

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<TickerReservation>;

      sinon
        .stub(reserveTicker, 'prepare')
        .withArgs(args, context)
        .resolves(expectedQueue);

      const queue = await polymesh.reserveTicker(args);

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: getTickerReservations', () => {
    beforeAll(() => {
      sinon.stub(utilsModule, 'signerToSignatory');
    });

    afterAll(() => {
      sinon.restore();
    });

    test('should return a list of ticker reservations if did parameter is set', async () => {
      const fakeTicker = 'TEST';

      polkadotMockUtils.configureMocks({ contextOptions: { withSeed: true } });

      polkadotMockUtils.createQueryStub('identity', 'links', {
        entries: [
          [
            ['someKey'],
            polkadotMockUtils.createMockLink({
              // eslint-disable-next-line @typescript-eslint/camelcase
              link_data: polkadotMockUtils.createMockLinkData({
                TickerOwned: polkadotMockUtils.createMockTicker(fakeTicker),
              }),
              expiry: polkadotMockUtils.createMockOption(),
              // eslint-disable-next-line @typescript-eslint/camelcase
              link_id: polkadotMockUtils.createMockU64(),
            }),
          ],
        ],
      });

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      const tickerReservations = await polymesh.getTickerReservations({ did: 'someDid' });

      expect(tickerReservations).toHaveLength(1);
      expect(tickerReservations[0].ticker).toBe(fakeTicker);
    });

    test('should return a list of ticker reservations owned by the identity', async () => {
      const fakeTicker = 'TEST';

      polkadotMockUtils.configureMocks({ contextOptions: { withSeed: true } });

      polkadotMockUtils.createQueryStub('identity', 'links', {
        entries: [
          [
            ['someKey'],
            polkadotMockUtils.createMockLink({
              // eslint-disable-next-line @typescript-eslint/camelcase
              link_data: polkadotMockUtils.createMockLinkData({
                TickerOwned: polkadotMockUtils.createMockTicker(fakeTicker),
              }),
              expiry: polkadotMockUtils.createMockOption(),
              // eslint-disable-next-line @typescript-eslint/camelcase
              link_id: polkadotMockUtils.createMockU64(),
            }),
          ],
        ],
      });

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      const tickerReservations = await polymesh.getTickerReservations();

      expect(tickerReservations).toHaveLength(1);
      expect(tickerReservations[0].ticker).toBe(fakeTicker);
    });
  });

  describe('method: getTickerReservation', () => {
    test('should return a specific ticker reservation owned by the identity', async () => {
      const ticker = 'TEST';

      polkadotMockUtils.createQueryStub('asset', 'tickers', {
        returnValue: polkadotMockUtils.createMockTickerRegistration({
          owner: polkadotMockUtils.createMockIdentityId('someDid'),
          expiry: polkadotMockUtils.createMockOption(),
        }),
      });

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      const tickerReservation = await polymesh.getTickerReservation({ ticker });
      expect(tickerReservation.ticker).toBe(ticker);
    });

    test('should throw if ticker reservation does not exist', async () => {
      const ticker = 'TEST';

      polkadotMockUtils.createQueryStub('asset', 'tickers', {
        returnValue: polkadotMockUtils.createMockTickerRegistration({
          owner: polkadotMockUtils.createMockIdentityId(),
          expiry: polkadotMockUtils.createMockOption(),
        }),
      });

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      return expect(polymesh.getTickerReservation({ ticker })).rejects.toThrow(
        `There is no reservation for ${ticker} ticker`
      );
    });
  });

  describe('method: getIdentity', () => {
    test('should return the current identity if no parameters are passed', async () => {
      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      const context = polkadotMockUtils.getContextInstance();

      expect(polymesh.getIdentity()).toEqual(context.getCurrentIdentity());
    });

    test('should return an identity object with the passed did', async () => {
      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      const params = { did: 'testDid' };

      const result = polymesh.getIdentity(params);
      const context = polkadotMockUtils.getContextInstance();

      expect(result instanceof Identity).toBe(true);
      expect(result).toMatchObject(new Identity(params, context));
    });
  });

  describe('method: getSecurityTokens', () => {
    beforeAll(() => {
      sinon.stub(utilsModule, 'signerToSignatory');
    });

    afterAll(() => {
      sinon.restore();
    });

    test('should return a list of security tokens owned by the supplied did', async () => {
      const fakeTicker = 'TEST';

      polkadotMockUtils.configureMocks({ contextOptions: { withSeed: true } });

      polkadotMockUtils.createQueryStub('identity', 'links', {
        entries: [
          [
            ['someKey'],
            polkadotMockUtils.createMockLink({
              // eslint-disable-next-line @typescript-eslint/camelcase
              link_data: polkadotMockUtils.createMockLinkData({
                AssetOwned: polkadotMockUtils.createMockTicker(fakeTicker),
              }),
              expiry: polkadotMockUtils.createMockOption(),
              // eslint-disable-next-line @typescript-eslint/camelcase
              link_id: polkadotMockUtils.createMockU64(),
            }),
          ],
        ],
      });

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      const securityTokens = await polymesh.getSecurityTokens({ did: 'someDid' });

      expect(securityTokens).toHaveLength(1);
      expect(securityTokens[0].ticker).toBe(fakeTicker);
    });

    test('should return a list of security tokens owned by the current identity if no did is supplied', async () => {
      const fakeTicker = 'TEST';

      polkadotMockUtils.configureMocks({ contextOptions: { withSeed: true } });

      polkadotMockUtils.createQueryStub('identity', 'links', {
        entries: [
          [
            ['someKey'],
            polkadotMockUtils.createMockLink({
              // eslint-disable-next-line @typescript-eslint/camelcase
              link_data: polkadotMockUtils.createMockLinkData({
                AssetOwned: polkadotMockUtils.createMockTicker(fakeTicker),
              }),
              expiry: polkadotMockUtils.createMockOption(),
              // eslint-disable-next-line @typescript-eslint/camelcase
              link_id: polkadotMockUtils.createMockU64(),
            }),
          ],
        ],
      });

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      const securityTokens = await polymesh.getSecurityTokens();

      expect(securityTokens).toHaveLength(1);
      expect(securityTokens[0].ticker).toBe(fakeTicker);
    });
  });

  describe('method: getIssuedClaims', () => {
    test('should return a list of issued claims', async () => {
      const context = polkadotMockUtils.getContextInstance();
      const targetDid = 'someTargetDid';
      const issuerDid = 'someIssuerDid';
      const date = 1589816265000;
      const customerDueDiligenceType = 'CustomerDueDiligence';
      const jurisdictionType = 'Jurisdiction';
      const whitelistedType = 'Whitelisted';
      const claim = {
        target: new Identity({ did: targetDid }, context),
        issuer: new Identity({ did: issuerDid }, context),
        issuedAt: new Date(date),
      };
      const fakeClaims = [
        {
          ...claim,
          expiry: null,
          claim: {
            type: customerDueDiligenceType,
          },
        },
        {
          ...claim,
          expiry: new Date(date),
          claim: {
            type: jurisdictionType,
            name: 'someJurisdiction',
            scope: 'someScope',
          },
        },
        {
          ...claim,
          expiry: null,
          claim: {
            type: whitelistedType,
            scope: 'someScope',
          },
        },
      ];
      /* eslint-disable @typescript-eslint/camelcase */
      const commonClaimData = {
        targetDID: targetDid,
        issuer: issuerDid,
        issuance_date: date,
        last_update_date: date,
      };
      const didsWithClaimsQueryResponse: IdentityWithClaims[] = [
        {
          did: targetDid,
          claims: [
            {
              ...commonClaimData,
              expiry: null,
              type: customerDueDiligenceType,
            },
            {
              ...commonClaimData,
              expiry: date,
              type: jurisdictionType,
              jurisdiction: 'someJurisdiction',
              scope: 'someScope',
            },
            {
              ...commonClaimData,
              expiry: null,
              type: whitelistedType,
              jurisdiction: null,
              scope: 'someScope',
            },
          ],
        },
      ];
      /* eslint-enabled @typescript-eslint/camelcase */

      polkadotMockUtils.configureMocks({ contextOptions: { withSeed: true } });

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      polkadotMockUtils.createApolloQueryStub(didsWithClaims({}).query, {
        didsWithClaims: didsWithClaimsQueryResponse,
      });

      const result = await polymesh.getIssuedClaims();

      expect(result).toEqual(fakeClaims);
    });

    test('should throw if the harvester query fails', async () => {
      polkadotMockUtils.configureMocks({ contextOptions: { withSeed: true } });

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      polkadotMockUtils.throwOnHarvesterQuery();

      return expect(polymesh.getIssuedClaims()).rejects.toThrow('Error in harvester query: Error');
    });
  });

  describe('method: transferPolyX', () => {
    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const context = polkadotMockUtils.getContextInstance();

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      const args = {
        to: 'someAccount',
        amount: new BigNumber(50),
      };

      const expectedQueue = ('' as unknown) as TransactionQueue<void>;

      sinon
        .stub(transferPolyX, 'prepare')
        .withArgs(args, context)
        .resolves(expectedQueue);

      const queue = await polymesh.transferPolyX(args);

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: getSecurityToken', () => {
    test('should return a specific security token', async () => {
      const ticker = 'TEST';

      polkadotMockUtils.createQueryStub('asset', 'tokens', {
        returnValue: polkadotMockUtils.createMockSecurityToken({
          /* eslint-disable @typescript-eslint/camelcase */
          owner_did: polkadotMockUtils.createMockIdentityId(),
          name: polkadotMockUtils.createMockTokenName(ticker),
          asset_type: polkadotMockUtils.createMockAssetType(),
          divisible: polkadotMockUtils.createMockBool(),
          link_id: polkadotMockUtils.createMockU64(),
          total_supply: polkadotMockUtils.createMockBalance(),
          /* eslint-enable @typescript-eslint/camelcase */
        }),
      });

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      const securityToken = await polymesh.getSecurityToken({ ticker });
      expect(securityToken.ticker).toBe(ticker);
    });

    test('should throw if security token does not exist', async () => {
      const ticker = 'TEST';

      polkadotMockUtils.createQueryStub('asset', 'tokens', {
        returnValue: polkadotMockUtils.createMockSecurityToken({
          /* eslint-disable @typescript-eslint/camelcase */
          owner_did: polkadotMockUtils.createMockIdentityId(),
          name: polkadotMockUtils.createMockTokenName(),
          asset_type: polkadotMockUtils.createMockAssetType(),
          divisible: polkadotMockUtils.createMockBool(),
          link_id: polkadotMockUtils.createMockU64(),
          total_supply: polkadotMockUtils.createMockBalance(),
          /* eslint-enable @typescript-eslint/camelcase */
        }),
      });

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      return expect(polymesh.getSecurityToken({ ticker })).rejects.toThrow(
        `There is no Security Token with ticker "${ticker}"`
      );
    });
  });

  describe('method: addClaims', () => {
    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const context = polkadotMockUtils.getContextInstance();

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      const claims: ClaimTargets[] = [
        {
          targets: ['someDid'],
          claim: {
            type: ClaimType.Accredited,
            scope: 'someIdentityId',
          },
        },
      ];

      const args = { claims };

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<void>;

      sinon
        .stub(addClaims, 'prepare')
        .withArgs(args, context)
        .resolves(expectedQueue);

      const queue = await polymesh.addClaims(args);

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: revokeClaims', () => {
    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const context = polkadotMockUtils.getContextInstance();

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      const claims: ClaimTargets[] = [
        {
          targets: ['someDid'],
          claim: {
            type: ClaimType.Accredited,
            scope: 'someIdentityId',
          },
        },
      ];

      const args = { claims };

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<void>;

      sinon
        .stub(revokeClaims, 'prepare')
        .withArgs(args, context)
        .resolves(expectedQueue);

      const queue = await polymesh.revokeClaims(args);

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: onConnectionError', () => {
    test('should call the supplied listener when the event is emitted and return an unsubscribe callback', async () => {
      const polkadot = polkadotMockUtils.getApiInstance();

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      const callback = sinon.stub();

      const unsub = polymesh.onConnectionError(callback);

      polkadot.emit('error');
      polkadot.emit('disconnected');

      unsub();

      polkadot.emit('error');

      sinon.assert.calledOnce(callback);
    });
  });

  describe('method: onDisconnect', () => {
    test('should call the supplied listener when the event is emitted and return an unsubscribe callback', async () => {
      const polkadot = polkadotMockUtils.getApiInstance();

      const polymesh = await Polymesh.connect({
        nodeUrl: 'wss://some.url',
        accountUri: '//uri',
      });

      const callback = sinon.stub();

      const unsub = polymesh.onDisconnect(callback);

      polkadot.emit('disconnected');
      polkadot.emit('error');

      unsub();

      polkadot.emit('disconnected');

      sinon.assert.calledOnce(callback);
    });
  });
});
