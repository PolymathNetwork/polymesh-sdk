import { Moment } from '@polkadot/types/interfaces';
import BigNumber from 'bignumber.js';
import { AuthorizationData, Signatory } from 'polymesh-types/types';
import sinon from 'sinon';

import { Account, AuthorizationRequest, DefaultPortfolio, Identity } from '~/api/entities';
import { getRequiredRoles, Params, prepareSetCustodian } from '~/api/procedures/setCustodian';
import { Context } from '~/base';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { Authorization, AuthorizationType, RoleType } from '~/types';
import { SignerType, SignerValue } from '~/types/internal';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/api/entities/Identity',
  require('~/testUtils/mocks/entities').mockIdentityModule('~/api/entities/Identity')
);

describe('setCustodian procedure', () => {
  let mockContext: Mocked<Context>;
  let addTransactionStub: sinon.SinonStub;
  let authorizationToAuthorizationDataStub: sinon.SinonStub<
    [Authorization, Context],
    AuthorizationData
  >;
  let dateToMomentStub: sinon.SinonStub<[Date, Context], Moment>;
  let signerToStringStub: sinon.SinonStub<[string | Identity | Account], string>;
  let signerValueToSignatoryStub: sinon.SinonStub<[SignerValue, Context], Signatory>;

  beforeAll(() => {
    dsMockUtils.initMocks();
    procedureMockUtils.initMocks();
    entityMockUtils.initMocks();

    authorizationToAuthorizationDataStub = sinon.stub(
      utilsConversionModule,
      'authorizationToAuthorizationData'
    );
    dateToMomentStub = sinon.stub(utilsConversionModule, 'dateToMoment');
    signerToStringStub = sinon.stub(utilsConversionModule, 'signerToString');
    signerValueToSignatoryStub = sinon.stub(utilsConversionModule, 'signerValueToSignatory');
  });

  beforeEach(() => {
    addTransactionStub = procedureMockUtils.getAddTransactionStub();
    mockContext = dsMockUtils.getContextInstance();
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

  test('should throw an error if the passed account has a pending authorization to accept', async () => {
    const did = 'someDid';
    const args = { targetIdentity: 'targetIdentity', did };

    const target = new Identity({ did: args.targetIdentity }, mockContext);
    const signer = entityMockUtils.getAccountInstance({ address: 'someFakeAccount' });
    const fakePortfolio = new DefaultPortfolio({ did }, mockContext);
    const receivedAuthorizations: AuthorizationRequest[] = [
      new AuthorizationRequest(
        {
          target,
          issuer: entityMockUtils.getIdentityInstance({ did }),
          authId: new BigNumber(1),
          expiry: null,
          data: { type: AuthorizationType.PortfolioCustody, value: fakePortfolio },
        },
        mockContext
      ),
    ];

    entityMockUtils.configureMocks({
      identityOptions: {
        authorizations: {
          getReceived: receivedAuthorizations,
        },
      },
    });

    mockContext.getSecondaryKeys.resolves([
      {
        signer,
        permissions: [],
      },
    ]);

    signerToStringStub.withArgs(signer).returns(signer.address);
    signerToStringStub.withArgs(args.targetIdentity).returns(args.targetIdentity);
    signerToStringStub.withArgs(target).returns(args.targetIdentity);

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    await expect(prepareSetCustodian.call(proc, args)).rejects.toThrow(
      "The target Identity already has a pending invitation to be the Portfolio's custodian"
    );
  });

  test('should add an add authorization transaction to the queue', async () => {
    const did = 'someDid';
    const id = new BigNumber(1);
    const expiry = new Date('1/1/2040');
    const args = { targetIdentity: 'targetIdentity', did };
    const target = new Identity({ did: args.targetIdentity }, mockContext);
    const signer = entityMockUtils.getAccountInstance({ address: 'someFakeAccount' });
    const rawSignatory = dsMockUtils.createMockSignatory({
      Account: dsMockUtils.createMockAccountId('someAccountId'),
    });
    const rawDid = dsMockUtils.createMockIdentityId(did);
    const rawPortfolioKind = dsMockUtils.createMockPortfolioKind({
      User: dsMockUtils.createMockU64(id.toNumber()),
    });
    const rawAuthorizationData = dsMockUtils.createMockAuthorizationData({
      PortfolioCustody: dsMockUtils.createMockPortfolioId({ did: rawDid, kind: rawPortfolioKind }),
    });
    const rawExpiry = dsMockUtils.createMockMoment(expiry.getTime());
    const fakePortfolio = entityMockUtils.getNumberedPortfolioInstance({ uuid: 'otherUuid' });
    const receivedAuthorizations: AuthorizationRequest[] = [
      new AuthorizationRequest(
        {
          target,
          issuer: entityMockUtils.getIdentityInstance(),
          authId: new BigNumber(1),
          expiry: null,
          data: { type: AuthorizationType.PortfolioCustody, value: fakePortfolio },
        },
        mockContext
      ),
    ];

    entityMockUtils.configureMocks({
      identityOptions: {
        authorizations: {
          getReceived: receivedAuthorizations,
        },
      },
    });

    mockContext.getSecondaryKeys.resolves([
      {
        signer,
        permissions: [],
      },
    ]);

    signerToStringStub.withArgs(signer).returns(signer.address);
    signerToStringStub.withArgs(args.targetIdentity).returns(args.targetIdentity);
    signerToStringStub.withArgs(target).returns('someValue');
    signerValueToSignatoryStub
      .withArgs({ type: SignerType.Identity, value: args.targetIdentity }, mockContext)
      .returns(rawSignatory);
    authorizationToAuthorizationDataStub.returns(rawAuthorizationData);
    dateToMomentStub.withArgs(expiry, mockContext).returns(rawExpiry);

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    const transaction = dsMockUtils.createTxStub('identity', 'addAuthorization');

    await prepareSetCustodian.call(proc, args);

    sinon.assert.calledWith(
      addTransactionStub,
      transaction,
      {},
      rawSignatory,
      rawAuthorizationData,
      null
    );

    await prepareSetCustodian.call(proc, { ...args, id, expiry });

    sinon.assert.calledWith(
      addTransactionStub,
      transaction,
      {},
      rawSignatory,
      rawAuthorizationData,
      rawExpiry
    );
  });
});

describe('getRequiredRoles', () => {
  test('should return a portfolio custodian role', () => {
    const args = {
      id: new BigNumber(1),
      did: 'someDid',
    } as Params;

    const portfolioId = { did: args.did, id: args.id };

    expect(getRequiredRoles(args)).toEqual([{ type: RoleType.PortfolioCustodian, portfolioId }]);
  });
});