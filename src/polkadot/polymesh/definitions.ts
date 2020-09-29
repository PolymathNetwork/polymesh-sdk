/* eslint-disable @typescript-eslint/camelcase */
export default {
  types: {
    IdentityId: '[u8; 32]',
    Ticker: '[u8; 12]',
    PosRatio: '(u32, u32)',
    DocumentName: 'Text',
    DocumentUri: 'Text',
    DocumentHash: 'Text',
    Document: {
      uri: 'DocumentUri',
      content_hash: 'DocumentHash',
    },
    AssetType: {
      _enum: {
        EquityCommon: '',
        EquityPreferred: '',
        Commodity: '',
        FixedIncome: '',
        REIT: '',
        Fund: '',
        RevenueShareAgreement: '',
        StructuredProduct: '',
        Derivative: '',
        Custom: 'Vec<u8>',
      },
    },
    IdentifierType: {
      _enum: {
        Cins: '',
        Cusip: '',
        Isin: '',
      },
    },
    AssetOwnershipRelation: {
      _enum: {
        NotOwned: '',
        TickerOwned: '',
        AssetOwned: '',
      },
    },
    AssetName: 'Text',
    AssetIdentifier: 'Text',
    FundingRoundName: 'Text',
    VenueDetails: 'Text',
    SecurityToken: {
      name: 'AssetName',
      total_supply: 'Balance',
      owner_did: 'IdentityId',
      divisible: 'bool',
      asset_type: 'AssetType',
      treasury_did: 'Option<IdentityId>',
    },
    LinkedKeyInfo: {
      _enum: {
        Unique: 'IdentityId',
        Group: 'Vec<IdentityId>',
      },
    },
    Permission: {
      _enum: ['Full', 'Admin', 'Operator', 'SpendFunds'],
    },
    Signatory: {
      _enum: {
        Identity: 'IdentityId',
        Account: 'AccountId',
      },
    },
    SigningKey: {
      signer: 'Signatory',
      permissions: 'Vec<Permission>',
    },
    SigningKeyWithAuth: {
      signing_key: 'SigningKey',
      auth_signature: 'Signature',
    },
    IdentityRole: {
      _enum: [
        'Issuer',
        'SimpleTokenIssuer',
        'Validator',
        'ClaimIssuer',
        'Investor',
        'NodeRunner',
        'PM',
        'CDDAMLClaimIssuer',
        'AccreditedInvestorClaimIssuer',
        'VerifiedIdentityClaimIssuer',
      ],
    },
    PreAuthorizedKeyInfo: {
      target_id: 'IdentityId',
      signing_key: 'SigningKey',
    },
    DidRecord: {
      roles: 'Vec<IdentityRole>',
      master_key: 'AccountId',
      signing_keys: 'Vec<SigningKey>',
    },
    JurisdictionName: 'Text',
    Scope: 'IdentityId',
    Claim: {
      _enum: {
        Accredited: 'Scope',
        Affiliate: 'Scope',
        BuyLockup: 'Scope',
        SellLockup: 'Scope',
        CustomerDueDiligence: '',
        KnowYourCustomer: 'Scope',
        Jurisdiction: '(JurisdictionName, Scope)',
        Exempted: 'Scope',
        Blocked: 'Scope',
        NoData: '',
      },
    },
    ClaimType: {
      _enum: {
        Accredited: '',
        Affiliate: '',
        BuyLockup: '',
        SellLockup: '',
        CustomerDueDiligence: '',
        KnowYourCustomer: '',
        Jurisdiction: '',
        Exempted: '',
        Blocked: '',
        NoType: '',
      },
    },
    IdentityClaim: {
      claim_issuer: 'IdentityId',
      issuance_date: 'Moment',
      last_update_date: 'Moment',
      expiry: 'Option<Moment>',
      claim: 'Claim',
    },
    IdentityClaimKey: {
      id: 'IdentityId',
      claim_type: 'ClaimType',
    },
    AssetTransferRule: {
      sender_rules: 'Vec<Rule>',
      receiver_rules: 'Vec<Rule>',
      rule_id: 'u32',
    },
    AssetTransferRuleResult: {
      sender_rules: 'Vec<Rule>',
      receiver_rules: 'Vec<Rule>',
      rule_id: 'u32',
      transfer_rule_result: 'bool',
    },
    RuleType: {
      _enum: {
        IsPresent: 'Claim',
        IsAbsent: 'Claim',
        IsAnyOf: 'Vec<Claim>',
        IsNoneOf: 'Vec<Claim>',
      },
    },
    Rule: {
      rule_type: 'RuleType',
      issuers: 'Vec<IdentityId>',
    },
    RuleResult: {
      rule: 'Rule',
      result: 'bool',
    },
    STO: {
      beneficiary_did: 'IdentityId',
      cap: 'Balance',
      sold: 'Balance',
      rate: 'u64',
      start_date: 'Moment',
      end_date: 'Moment',
      active: 'bool',
    },
    Investment: {
      investor_did: 'IdentityId',
      amount_paid: 'Balance',
      assets_purchased: 'Balance',
      last_purchase_date: 'Moment',
    },
    SimpleTokenRecord: {
      ticker: 'Ticker',
      total_supply: 'Balance',
      owner_did: 'IdentityId',
    },
    FeeOf: 'Balance',
    Dividend: {
      amount: 'Balance',
      active: 'bool',
      matures_at: 'Option<Moment>',
      expires_at: 'Option<Moment>',
      payout_currency: 'Option<Ticker>',
      checkpoint_id: 'u64',
    },
    TargetIdAuthorization: {
      target_id: 'IdentityId',
      nonce: 'u64',
      expires_at: 'Moment',
    },
    TickerRegistration: {
      owner: 'IdentityId',
      expiry: 'Option<Moment>',
    },
    TickerRegistrationConfig: {
      max_ticker_length: 'u8',
      registration_length: 'Option<Moment>',
    },
    SignData: {
      custodian_did: 'IdentityId',
      holder_did: 'IdentityId',
      ticker: 'Ticker',
      value: 'Balance',
      nonce: 'u16',
    },
    MotionTitle: 'Text',
    MotionInfoLink: 'Text',
    Motion: {
      title: 'MotionTitle',
      info_link: 'MotionInfoLink',
      choices: 'Vec<MotionTitle>',
    },
    Ballot: {
      checkpoint_id: 'u64',
      voting_start: 'Moment',
      voting_end: 'Moment',
      motions: 'Vec<Motion>',
    },
    Url: 'Text',
    PipDescription: 'Text',
    PipsMetadata: {
      proposer: 'AccountId',
      id: 'PipId',
      end: 'u32',
      url: 'Option<Url>',
      description: 'Option<PipDescription>',
      cool_off_until: 'u32',
      beneficiaries: 'Vec<Beneficiary>',
    },
    Beneficiary: {
      id: 'IdentityId',
      amount: 'Balance',
    },
    DepositInfo: {
      owner: 'AccountId',
      amount: 'Balance',
    },
    PolymeshVotes: {
      index: 'u32',
      ayes: 'Vec<(IdentityId, Balance)>',
      nays: 'Vec<(IdentityId, Balance)>',
    },
    PipId: 'u32',
    ProposalState: {
      _enum: ['Pending', 'Cancelled', 'Killed', 'Rejected', 'Referendum'],
    },
    ReferendumState: {
      _enum: ['Pending', 'Scheduled', 'Rejected', 'Failed', 'Executed'],
    },
    ReferendumType: {
      _enum: ['FastTracked', 'Emergency', 'Community'],
    },
    Pip: {
      id: 'PipId',
      proposal: 'Call',
      state: 'ProposalState',
    },
    ProposalData: {
      _enum: {
        Hash: 'Hash',
        Proposal: 'Vec<u8>',
      },
    },
    Referendum: {
      id: 'PipId',
      state: 'ReferendumState',
      referendum_type: 'ReferendumType',
      enactment_period: 'u32',
    },
    TickerTransferApproval: {
      authorized_by: 'IdentityId',
      next_ticker: 'Option<Ticker>',
      previous_ticker: 'Option<Ticker>',
    },
    OffChainSignature: {
      _enum: {
        Ed25519: 'H512',
        Sr25519: 'H512',
        Ecdsa: 'H512',
      },
    },
    Authorization: {
      authorization_data: 'AuthorizationData',
      authorized_by: 'IdentityId',
      expiry: 'Option<Moment>',
      auth_id: 'u64',
    },
    AuthorizationData: {
      _enum: {
        AttestMasterKeyRotation: 'IdentityId',
        RotateMasterKey: 'IdentityId',
        TransferTicker: 'Ticker',
        AddMultiSigSigner: 'AccountId',
        TransferAssetOwnership: 'Ticker',
        JoinIdentity: 'Vec<Permission>',
        Custom: 'Ticker',
        NoData: '',
      },
    },
    AuthIdentifier: {
      signatory: 'Signatory',
      auth_id: 'u64',
    },
    SmartExtensionType: {
      _enum: {
        TransferManager: '',
        Offerings: '',
        Custom: 'Vec<u8>',
      },
    },
    SmartExtensionName: 'Text',
    SmartExtension: {
      extension_type: 'SmartExtensionType',
      extension_name: 'SmartExtensionName',
      extension_id: 'AccountId',
      is_archive: 'bool',
    },
    ProportionMatch: {
      _enum: ['AtLeast', 'MoreThan'],
    },
    AuthorizationNonce: 'u64',
    Counter: 'u64',
    Commission: {
      _enum: {
        Individual: '',
        Global: 'u32',
      },
    },
    RestrictionResult: {
      _enum: ['Valid', 'Invalid', 'ForceValid'],
    },
    Memo: '[u8;32]',
    IssueRecipient: {
      _enum: {
        Account: 'AccountId',
        Identity: 'IdentityId',
      },
    },
    BridgeTx: {
      nonce: 'u32',
      recipient: 'AccountId',
      value: 'Balance',
      tx_hash: 'H256',
    },
    PendingTx: {
      did: 'IdentityId',
      bridge_tx: 'BridgeTx',
    },
    OfflineSlashingParams: {
      max_offline_percent: 'u32',
      constant: 'u32',
      max_slash_percent: 'u32',
    },
    AssetTransferRules: {
      is_paused: 'bool',
      rules: 'Vec<AssetTransferRule>',
    },
    AssetTransferRulesResult: {
      is_paused: 'bool',
      rules: 'Vec<AssetTransferRuleResult>',
      final_result: 'bool',
    },
    Claim1stKey: {
      target: 'IdentityId',
      claim_type: 'ClaimType',
    },
    Claim2ndKey: {
      issuer: 'IdentityId',
      scope: 'Option<Scope>',
    },
    BatchAddClaimItem: {
      target: 'IdentityId',
      claim: 'Claim',
      expiry: 'Option<Moment>',
    },
    BatchRevokeClaimItem: {
      target: 'IdentityId',
      claim: 'Claim',
    },
    InactiveMember: {
      id: 'IdentityId',
      deactivated_at: 'Moment',
      expiry: 'Option<Moment>',
    },
    VotingResult: {
      ayes_count: 'u32',
      ayes_stake: 'Balance',
      nays_count: 'u32',
      nays_stake: 'Balance',
    },
    ProtocolOp: {
      _enum: [
        'AssetRegisterTicker',
        'AssetIssue',
        'AssetAddDocument',
        'AssetCreateAsset',
        'DividendNew',
        'ComplianceManagerAddActiveRule',
        'IdentityRegisterDid',
        'IdentityCddRegisterDid',
        'IdentityAddClaim',
        'IdentitySetMasterKey',
        'IdentityAddSigningKeysWithAuthorization',
        'PipsPropose',
        'VotingAddBallot',
      ],
    },
    CddStatus: {
      _enum: {
        Ok: 'IdentityId',
        Err: 'Vec<u8>',
      },
    },
    AssetDidResult: {
      _enum: {
        Ok: 'IdentityId',
        Err: 'Vec<u8>',
      },
    },
    DidRecordsSuccess: {
      master_key: 'AccountId',
      signing_key: 'Vec<SigningKey>',
    },
    DidRecords: {
      _enum: {
        Success: 'DidRecordsSuccess',
        IdNotFound: 'Vec<u8>',
      },
    },
    VoteCountProposalFound: {
      ayes: 'u64',
      nays: 'u64',
    },
    VoteCount: {
      _enum: {
        ProposalFound: 'VoteCountProposalFound',
        ProposalNotFound: 'Vec<u8>',
      },
    },
    Vote: {
      _enum: {
        None: '',
        Yes: 'Balance',
        No: 'Balance',
      },
    },
    VoteByPip: {
      pip: 'PipId',
      vote: 'Vote',
    },
    HistoricalVotingByAddress: 'Vec<VoteByPip>',
    HistoricalVotingById: 'Vec<(AccountId, HistoricalVotingByAddress)>',
    BridgeTxDetail: {
      amount: 'Balance',
      status: 'BridgeTxStatus',
      execution_block: 'BlockNumber',
      tx_hash: 'H256',
    },
    BridgeTxStatus: {
      _enum: {
        Absent: '',
        Pending: 'u8',
        Frozen: '',
        Timelocked: '',
        Handled: '',
      },
    },
    HandledTxStatus: {
      _enum: {
        Success: '',
        Error: 'Text',
      },
    },
    CappedFee: 'u64',
    CanTransferResult: {
      _enum: {
        Ok: 'u8',
        Err: 'Vec<u8>',
      },
    },
    AuthorizationType: {
      _enum: {
        AttestMasterKeyRotation: '',
        RotateMasterKey: '',
        TransferTicker: '',
        AddMultiSigSigner: '',
        TransferAssetOwnership: '',
        JoinIdentity: '',
        Custom: '',
        NoData: '',
      },
    },
    ProposalDetails: {
      approvals: 'u64',
      rejections: 'u64',
      status: 'ProposalStatus',
      expiry: 'Option<Moment>',
      auto_close: 'bool',
    },
    ProposalStatus: {
      _enum: {
        Invalid: '',
        ActiveOrExpired: '',
        ExecutionSuccessful: '',
        ExecutionFailed: '',
        Rejected: '',
      },
    },
    DidStatus: {
      _enum: {
        Unknown: '',
        Exists: '',
        CddVerified: '',
      },
    },
    IssueAssetItem: {
      identity_did: 'IdentityId',
      value: 'Balance',
    },
    PortfolioName: 'Vec<u8>',
    PortfolioNumber: 'u64',
    PortfolioKind: {
      _enum: {
        Default: '',
        User: 'PortfolioNumber',
      },
    },
    PortfolioId: {
      did: 'IdentityId',
      kind: 'PortfolioKind',
    },
    ProverTickerKey: {
      prover: 'IdentityId',
      ticker: 'Ticker',
    },
    TickerRangeProof: {
      initial_message: '[u8; 32]',
      final_response: 'Vec<u8>',
      max_two_exp: 'u32',
    },
    InstructionStatus: {
      _enum: {
        Unknown: '',
        Pending: '',
      },
    },
    LegStatus: {
      _enum: {
        PendingTokenLock: '',
        ExecutionPending: '',
        ExecutionToBeSkipped: '(AccountId, u64)',
      },
    },
    AuthorizationStatus: {
      _enum: {
        Unknown: '',
        Pending: '',
        Authorized: '',
        Rejected: '',
      },
    },
    SettlementType: {
      _enum: {
        SettleOnAuthorization: '',
        SettleOnBlock: 'BlockNumber',
      },
    },
    Instruction: {
      instruction_id: 'u64',
      venue_id: 'u64',
      status: 'InstructionStatus',
      settlement_type: 'SettlementType',
      created_at: 'Option<Moment>',
      valid_from: 'Option<Moment>',
    },
    Leg: {
      from: 'IdentityId',
      to: 'IdentityId',
      asset: 'Ticker',
      amount: 'Balance',
    },
    Venue: {
      creator: 'IdentityId',
      instructions: 'Vec<u64>',
      details: 'Vec<u8>',
    },
    Receipt: {
      receipt_uid: 'u64',
      from: 'IdentityId',
      to: 'IdentityId',
      asset: 'Ticker',
      amount: 'Balance',
    },
    ReceiptDetails: {
      receipt_uid: 'u64',
      leg_id: 'u64',
      signer: 'AccountId',
      signature: 'OffChainSignature',
    },
    UniqueCall: {
      nonce: 'u64',
      call: 'Call',
    },
    MovePortfolioItem: {
      ticker: 'Ticker',
      amount: 'Balance',
    },
    WeightToFeeCoefficient: {
      coeffInteger: 'Balance',
      coeffFrac: 'Perbill',
      negative: 'bool',
      degree: 'u8',
    },
  },
  rpc: {
    compliance: {
      canTransfer: {
        description:
          'Checks whether a transaction with given parameters is compliant to the compliance manager rules',
        params: [
          {
            name: 'ticker',
            type: 'Ticker',
            isOptional: false,
          },
          {
            name: 'from_did',
            type: 'Option<IdentityId>',
            isOptional: false,
          },
          {
            name: 'to_did',
            type: 'Option<IdentityId>',
            isOptional: false,
          },
          {
            name: 'treasury_did',
            type: 'Option<IdentityId>',
            isOptional: false,
          },
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'AssetTransferRulesResult',
      },
    },
    identity: {
      isIdentityHasValidCdd: {
        description: 'use to tell whether the given did has valid cdd claim or not',
        params: [
          {
            name: 'did',
            type: 'IdentityId',
            isOptional: false,
          },
          {
            name: 'buffer_time',
            type: 'u64',
            isOptional: true,
          },
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'CddStatus',
      },
      getAssetDid: {
        description: 'function is used to query the given ticker DID',
        params: [
          {
            name: 'ticker',
            type: 'Ticker',
            isOptional: false,
          },
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'AssetDidResult',
      },
      getDidRecords: {
        description: 'Used to get the did record values for a given DID',
        params: [
          {
            name: 'did',
            type: 'IdentityId',
            isOptional: false,
          },
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'DidRecords',
      },
      getDidStatus: {
        description: 'Retrieve status of the DID',
        params: [
          {
            name: 'did',
            type: 'Vec<IdentityId>',
            isOptional: false,
          },
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'Vec<DidStatus>',
      },
      getFilteredAuthorizations: {
        description:
          'Retrieve authorizations data for a given signatory and filtered using the given authorization type',
        params: [
          {
            name: 'signatory',
            type: 'Signatory',
            isOptional: false,
          },
          {
            name: 'allow_expired',
            type: 'bool',
            isOptional: false,
          },
          {
            name: 'auth_type',
            type: 'AuthorizationType',
            isOptional: true,
          },
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'Vec<Authorization>',
      },
    },
    pips: {
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
        type: 'HistoricalVoting',
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
        type: 'HistoricalVotingByAddress',
      },
    },
    protocolFee: {
      computeFee: {
        description: 'Gets the fee of a chargeable extrinsic operation',
        params: [
          {
            name: 'op',
            type: 'ProtocolOp',
            isOptional: false,
          },
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'CappedFee',
      },
    },
    staking: {
      getCurve: {
        description: 'Retrieves curves parameters',
        params: [
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'Vec<(Perbill, Perbill)>',
      },
    },
    asset: {
      canTransfer: {
        description: 'Checks whether a transaction with given parameters can take place or not',
        params: [
          {
            name: 'sender',
            type: 'AccountId',
            isOptional: false,
          },
          {
            name: 'ticker',
            type: 'Ticker',
            isOptional: false,
          },
          {
            name: 'from_did',
            type: 'Option<IdentityId>',
            isOptional: false,
          },
          {
            name: 'to_did',
            type: 'Option<IdentityId>',
            isOptional: false,
          },
          {
            name: 'value',
            type: 'Balance',
            isOptional: false,
          },
          {
            name: 'blockHash',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'CanTransferResult',
      },
    },
    portfolio: {
      getPortfolios: {
        description: 'Gets all user-defined portfolio names of an identity',
        params: [
          {
            name: 'did',
            type: 'IdentityId',
            isOptional: false,
          },
        ],
        type: 'GetPortfoliosResult',
      },
      getPortfolioAssets: {
        description: 'Gets the balances of all assets in a given portfolio',
        params: [
          {
            name: 'portfolio_id',
            type: 'PortfolioId',
            isOptional: false,
          },
        ],
        type: 'GetPortfolioAssetsResult',
      },
    },
  },
};
