import { Balance } from '@polkadot/types/interfaces';
import BigNumber from 'bignumber.js';
import sinon from 'sinon';

import { Identity, Proposal } from '~/api/entities';
import { ProposalState } from '~/api/entities/Proposal/types';
import { createProposal } from '~/api/procedures';
import { TransactionQueue } from '~/base';
import { Context } from '~/context';
import { Governance } from '~/Governance';
import { proposals } from '~/middleware/queries';
import { Proposal as MiddlewareProposal } from '~/middleware/types';
import { dsMockUtils } from '~/testUtils/mocks';
import { TxTags } from '~/types';
import * as utilsModule from '~/utils';

describe('Governance class', () => {
  let context: Context;
  let governance: Governance;
  let balanceToBigNumberStub: sinon.SinonStub<[Balance], BigNumber>;
  let fakeBalance: Balance;
  const amount = new BigNumber(5000);

  beforeAll(() => {
    dsMockUtils.initMocks();
    balanceToBigNumberStub = sinon.stub(utilsModule, 'balanceToBigNumber');
  });

  beforeEach(() => {
    context = dsMockUtils.getContextInstance();
    governance = new Governance(context);
    fakeBalance = dsMockUtils.createMockBalance(amount.toNumber());
    balanceToBigNumberStub.withArgs(fakeBalance).returns(amount);
  });

  afterAll(() => {
    dsMockUtils.cleanup();
  });

  afterEach(() => {
    dsMockUtils.reset();
  });

  describe('method: getGovernanceCommitteeMembers', () => {
    test('should retrieve a list of the identities of all active members', async () => {
      const did = 'someDid';
      const expectedMembers = [new Identity({ did }, context)];

      dsMockUtils.createQueryStub('committeeMembership', 'activeMembers', {
        returnValue: [dsMockUtils.createMockIdentityId('someDid')],
      });

      const result = await governance.getGovernanceCommitteeMembers();

      expect(result).toEqual(expectedMembers);
    });
  });

  describe('method: getProposals', () => {
    test('should return a list of proposal entities', async () => {
      const pipId = 10;
      const proposerDid = 'someProposerDid';
      const createdAt = 50800;
      const coolOffPeriod = 100;
      const proposalPeriodTimeFrame = 600;
      const fakeResult = [new Proposal({ pipId }, context)];
      const proposalsQueryResponse: MiddlewareProposal[] = [
        {
          pipId,
          proposer: proposerDid,
          createdAt,
          url: 'http://someUrl',
          description: 'some description',
          coolOffEndBlock: createdAt + coolOffPeriod,
          endBlock: createdAt + proposalPeriodTimeFrame,
          proposal: '0x180500cc829c190000000000000000000000e8030000',
          lastState: ProposalState.Referendum,
          lastStateUpdatedAt: createdAt + proposalPeriodTimeFrame,
          totalVotes: 0,
          totalAyesWeight: 0,
          totalNaysWeight: 0,
        },
      ];

      dsMockUtils.createApolloQueryStub(
        proposals({
          proposers: [proposerDid],
          states: undefined,
          orderBy: undefined,
          count: undefined,
          skip: undefined,
        }),
        {
          proposals: proposalsQueryResponse,
        }
      );

      const result = await governance.getProposals({
        proposers: [proposerDid],
      });

      expect(result).toEqual(fakeResult);
    });

    test('should throw if the middleware query fails', async () => {
      dsMockUtils.throwOnMiddlewareQuery();

      return expect(governance.getProposals()).rejects.toThrow('Error in middleware query: Error');
    });
  });

  describe('method: createProposal', () => {
    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const args = {
        discussionUrl: 'www.my-proposal.com',
        description: 'A proposal',
        bondAmount: new BigNumber(1000),
        tag: TxTags.asset.RegisterTicker,
        args: ['someTicker'],
      };
      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<Proposal>;

      sinon
        .stub(createProposal, 'prepare')
        .withArgs(args, context)
        .resolves(expectedQueue);

      const queue = await governance.createProposal(args);

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: minimumProposalDeposit', () => {
    test('should return the minimum proposal deposit', async () => {
      dsMockUtils.createQueryStub('pips', 'minimumProposalDeposit').resolves(fakeBalance);

      const result = await governance.minimumProposalDeposit();

      expect(result).toBe(amount);
    });

    test('should allow subscription', async () => {
      const unsubCallback = 'unsubCallback';
      const callback = sinon.stub();

      dsMockUtils.createQueryStub('pips', 'minimumProposalDeposit').callsFake(async cbFunc => {
        cbFunc(fakeBalance);
        return unsubCallback;
      });

      const result = await governance.minimumProposalDeposit(callback);

      expect(result).toEqual(unsubCallback);
      sinon.assert.calledWithExactly(callback, amount);
    });
  });
});
