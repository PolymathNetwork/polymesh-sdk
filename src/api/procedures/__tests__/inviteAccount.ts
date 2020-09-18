import { Moment } from '@polkadot/types/interfaces';
import BigNumber from 'bignumber.js';
import { AuthorizationData, Signatory } from 'polymesh-types/types';
import sinon from 'sinon';

import { Account, AuthorizationRequest } from '~/api/entities';
import { InviteAccountParams } from '~/api/procedures';
import { prepareInviteAccount } from '~/api/procedures/inviteAccount';
import { Context } from '~/base';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { Authorization, AuthorizationType, Identity, ResultSet, Signer } from '~/types';
import { SignerType, SignerValue } from '~/types/internal';
import * as utilsModule from '~/utils';

describe('inviteAccount procedure', () => {
  let mockContext: Mocked<Context>;
  let addTransactionStub: sinon.SinonStub;
  let authorizationToAuthorizationDataStub: sinon.SinonStub<
    [Authorization, Context],
    AuthorizationData
  >;
  let dateToMomentStub: sinon.SinonStub<[Date, Context], Moment>;
  let signerToSignerValueStub: sinon.SinonStub<[Signer], SignerValue>;
  let signerToStringStub: sinon.SinonStub<[string | Identity | Account], string>;
  let signerValueToSignatoryStub: sinon.SinonStub<[SignerValue, Context], Signatory>;

  const args = { targetAccount: 'targetAccount' };
  const authId = new BigNumber(1);

  beforeAll(() => {
    dsMockUtils.initMocks();
    procedureMockUtils.initMocks();
    entityMockUtils.initMocks();

    authorizationToAuthorizationDataStub = sinon.stub(
      utilsModule,
      'authorizationToAuthorizationData'
    );
    dateToMomentStub = sinon.stub(utilsModule, 'dateToMoment');
    signerToSignerValueStub = sinon.stub(utilsModule, 'signerToSignerValue');
    signerToStringStub = sinon.stub(utilsModule, 'signerToString');
    signerValueToSignatoryStub = sinon.stub(utilsModule, 'signerValueToSignatory');
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

  test('should add an add authorization transaction to the queue', async () => {
    const expiry = new Date('1/1/2040');
    const target = new Account({ address: args.targetAccount }, mockContext);
    const signer = entityMockUtils.getAccountInstance({ address: 'someFakeAccount' });
    const signerValue = { type: SignerType.Account, value: signer.address };
    const rawSignatory = dsMockUtils.createMockSignatory({
      Account: dsMockUtils.createMockAccountId('someAccountId'),
    });
    const rawAuthorizationData = dsMockUtils.createMockAuthorizationData({
      JoinIdentity: [],
    });
    const rawExpiry = dsMockUtils.createMockMoment(expiry.getTime());
    const sentAuthorizations: ResultSet<AuthorizationRequest> = {
      data: [
        new AuthorizationRequest(
          {
            target,
            issuer: entityMockUtils.getIdentityInstance(),
            authId,
            expiry: null,
            data: { type: AuthorizationType.JoinIdentity, value: [] },
          },
          mockContext
        ),
      ],
      next: 1,
      count: 1,
    };

    dsMockUtils.configureMocks({
      contextOptions: {
        sentAuthorizations,
      },
    });

    mockContext.getSigningKeys.resolves([
      {
        signer,
        permissions: [],
      },
    ]);

    signerToSignerValueStub.withArgs(signer).returns(signerValue);
    signerToStringStub.withArgs(args.targetAccount).returns(args.targetAccount);
    signerToSignerValueStub
      .withArgs(target)
      .returns({ type: SignerType.Account, value: 'someValue' });
    signerValueToSignatoryStub
      .withArgs({ type: SignerType.Account, value: args.targetAccount }, mockContext)
      .returns(rawSignatory);
    authorizationToAuthorizationDataStub.returns(rawAuthorizationData);
    dateToMomentStub.withArgs(expiry, mockContext).returns(rawExpiry);

    const proc = procedureMockUtils.getInstance<InviteAccountParams, void>(mockContext);

    const transaction = dsMockUtils.createTxStub('identity', 'addAuthorization');

    await prepareInviteAccount.call(proc, args);

    sinon.assert.calledWith(
      addTransactionStub,
      transaction,
      {},
      rawSignatory,
      rawAuthorizationData,
      null
    );

    await prepareInviteAccount.call(proc, { ...args, expiry });

    sinon.assert.calledWith(
      addTransactionStub,
      transaction,
      {},
      rawSignatory,
      rawAuthorizationData,
      rawExpiry
    );
  });

  test('should throw an error if the passed account is already present in the signing keys list', async () => {
    const signer = entityMockUtils.getAccountInstance({ address: 'someFakeAccount' });
    const signerValue = { type: SignerType.Account, value: args.targetAccount };

    mockContext.getSigningKeys.resolves([
      {
        signer,
        permissions: [],
      },
    ]);

    signerToSignerValueStub.withArgs(signer).returns(signerValue);
    signerToStringStub.withArgs(args.targetAccount).returns(args.targetAccount);

    const proc = procedureMockUtils.getInstance<InviteAccountParams, void>(mockContext);

    await expect(prepareInviteAccount.call(proc, args)).rejects.toThrow(
      'You cannot add an account that is already present in your signing keys list'
    );
  });

  test('should throw an error if the passed account has a pending authorization to accept', async () => {
    const target = new Account({ address: args.targetAccount }, mockContext);
    const signer = entityMockUtils.getAccountInstance({ address: 'someFakeAccount' });
    const signerValue = { type: SignerType.Account, value: signer.address };
    const sentAuthorizations: ResultSet<AuthorizationRequest> = {
      data: [
        new AuthorizationRequest(
          {
            target,
            issuer: entityMockUtils.getIdentityInstance(),
            authId,
            expiry: null,
            data: { type: AuthorizationType.JoinIdentity, value: [] },
          },
          mockContext
        ),
      ],
      next: 1,
      count: 1,
    };

    dsMockUtils.configureMocks({
      contextOptions: {
        sentAuthorizations,
      },
    });

    mockContext.getSigningKeys.resolves([
      {
        signer,
        permissions: [],
      },
    ]);

    signerToSignerValueStub.withArgs(signer).returns(signerValue);
    signerToStringStub.withArgs(args.targetAccount).returns(args.targetAccount);
    signerToSignerValueStub
      .withArgs(target)
      .returns({ type: SignerType.Account, value: args.targetAccount });

    const proc = procedureMockUtils.getInstance<InviteAccountParams, void>(mockContext);

    await expect(prepareInviteAccount.call(proc, args)).rejects.toThrow(
      'The account invited already has a pending authorization to accept'
    );
  });
});