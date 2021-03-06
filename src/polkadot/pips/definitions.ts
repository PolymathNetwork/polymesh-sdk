/* eslint-disable @typescript-eslint/camelcase */
export default {
  rpc: {
    getVotes: {
      description: 'Summary of votes of a proposal given by index',
      params: [
        {
          name: 'index',
          type: 'u32',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'VoteCount',
    },
    proposedBy: {
      description: 'Retrieves proposal indices started by address',
      params: [
        {
          name: 'address',
          type: 'AccountId',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Vec<u32>',
    },
    votedOn: {
      description: 'Retrieves proposal address indices voted on',
      params: [
        {
          name: 'address',
          type: 'AccountId',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Vec<u32>',
    },
    votingHistoryByAddress: {
      description: 'Retrieves proposal `address` indices voted on',
      params: [
        {
          name: 'address',
          type: 'AccountId',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'HistoricalVotingByAddress',
    },
    votingHistoryById: {
      description: 'Retrieve historical voting of `id` identity',
      params: [
        {
          name: 'id',
          type: 'IdentityId',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'HistoricalVotingById',
    },
  },
  types: {},
};
