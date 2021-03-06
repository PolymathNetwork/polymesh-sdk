// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type {
  BitVec,
  Bool,
  Bytes,
  Compact,
  Data,
  DoNotConstruct,
  I128,
  I16,
  I256,
  I32,
  I64,
  I8,
  Json,
  Null,
  Option,
  Raw,
  StorageKey,
  Text,
  Type,
  U128,
  U16,
  U256,
  U32,
  U64,
  U8,
  USize,
  Vec,
  bool,
  i128,
  i16,
  i256,
  i32,
  i64,
  i8,
  u128,
  u16,
  u256,
  u32,
  u64,
  u8,
  usize,
} from '@polkadot/types';
import type {
  AssetBalance,
  AssetDetails,
  TAssetBalance,
  TAssetDepositBalance,
} from '@polkadot/types/interfaces/assets';
import type {
  BlockAttestations,
  IncludedBlocks,
  MoreAttestations,
} from '@polkadot/types/interfaces/attestations';
import type { RawAuraPreDigest } from '@polkadot/types/interfaces/aura';
import type { ExtrinsicOrHash, ExtrinsicStatus } from '@polkadot/types/interfaces/author';
import type { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import type {
  AllowedSlots,
  BabeAuthorityWeight,
  BabeBlockWeight,
  BabeEquivocationProof,
  BabeWeight,
  EpochAuthorship,
  MaybeRandomness,
  MaybeVrf,
  NextConfigDescriptor,
  NextConfigDescriptorV1,
  Randomness,
  RawBabePreDigest,
  RawBabePreDigestCompat,
  RawBabePreDigestPrimary,
  RawBabePreDigestPrimaryTo159,
  RawBabePreDigestSecondaryPlain,
  RawBabePreDigestSecondaryTo159,
  RawBabePreDigestSecondaryVRF,
  RawBabePreDigestTo159,
  SlotNumber,
  VrfData,
  VrfOutput,
  VrfProof,
} from '@polkadot/types/interfaces/babe';
import type {
  AccountData,
  BalanceLock,
  BalanceLockTo212,
  BalanceStatus,
  Reasons,
  VestingSchedule,
  WithdrawReasons,
} from '@polkadot/types/interfaces/balances';
import type { BlockHash } from '@polkadot/types/interfaces/chain';
import type { PrefixedStorageKey } from '@polkadot/types/interfaces/childstate';
import type { EthereumAddress, StatementKind } from '@polkadot/types/interfaces/claims';
import type {
  CollectiveOrigin,
  MemberCount,
  ProposalIndex,
  Votes,
  VotesTo230,
} from '@polkadot/types/interfaces/collective';
import type { AuthorityId, RawVRFOutput } from '@polkadot/types/interfaces/consensus';
import type {
  AliveContractInfo,
  CodeHash,
  ContractCallRequest,
  ContractExecResult,
  ContractExecResultErr,
  ContractExecResultErrModule,
  ContractExecResultOk,
  ContractExecResultResult,
  ContractExecResultSuccessTo255,
  ContractExecResultSuccessTo260,
  ContractExecResultTo255,
  ContractExecResultTo260,
  ContractInfo,
  ContractStorageKey,
  DeletedContract,
  Gas,
  HostFnWeights,
  InstructionWeights,
  Limits,
  PrefabWasmModule,
  PrefabWasmModuleReserved,
  Schedule,
  ScheduleTo212,
  ScheduleTo258,
  SeedOf,
  TombstoneContractInfo,
  TrieId,
} from '@polkadot/types/interfaces/contracts';
import type {
  ContractConstructorSpec,
  ContractContractSpec,
  ContractCryptoHasher,
  ContractDiscriminant,
  ContractDisplayName,
  ContractEventParamSpec,
  ContractEventSpec,
  ContractLayoutArray,
  ContractLayoutCell,
  ContractLayoutEnum,
  ContractLayoutHash,
  ContractLayoutHashingStrategy,
  ContractLayoutKey,
  ContractLayoutStruct,
  ContractLayoutStructField,
  ContractMessageParamSpec,
  ContractMessageSpec,
  ContractProject,
  ContractProjectContract,
  ContractProjectSource,
  ContractSelector,
  ContractStorageLayout,
  ContractTypeSpec,
} from '@polkadot/types/interfaces/contractsAbi';
import type {
  DeployData,
  FundIndex,
  FundInfo,
  LastContribution,
} from '@polkadot/types/interfaces/crowdloan';
import type {
  AccountVote,
  AccountVoteSplit,
  AccountVoteStandard,
  Conviction,
  Delegations,
  PreimageStatus,
  PreimageStatusAvailable,
  PriorLock,
  PropIndex,
  Proposal,
  ProxyState,
  ReferendumIndex,
  ReferendumInfo,
  ReferendumInfoFinished,
  ReferendumInfoTo239,
  ReferendumStatus,
  Tally,
  Voting,
  VotingDelegating,
  VotingDirect,
  VotingDirectVote,
} from '@polkadot/types/interfaces/democracy';
import type {
  ApprovalFlag,
  DefunctVoter,
  Renouncing,
  SetIndex,
  Vote,
  VoteIndex,
  VoteThreshold,
  VoterInfo,
} from '@polkadot/types/interfaces/elections';
import type { CreatedBlock, ImportedAux } from '@polkadot/types/interfaces/engine';
import type {
  EthAccount,
  EthBlock,
  EthBloom,
  EthCallRequest,
  EthFilter,
  EthFilterAddress,
  EthFilterTopic,
  EthFilterTopicEntry,
  EthFilterTopicInner,
  EthHeader,
  EthLog,
  EthReceipt,
  EthRichBlock,
  EthRichHeader,
  EthStorageProof,
  EthSubKind,
  EthSubParams,
  EthSubResult,
  EthSyncInfo,
  EthSyncStatus,
  EthTransaction,
  EthTransactionAction,
  EthTransactionCondition,
  EthTransactionRequest,
  EthTransactionStatus,
  EthWork,
  EthereumAccountId,
  EthereumLookupSource,
  EthereumSignature,
} from '@polkadot/types/interfaces/eth';
import type {
  EvmAccount,
  EvmLog,
  EvmVicinity,
  ExitError,
  ExitFatal,
  ExitReason,
  ExitRevert,
  ExitSucceed,
} from '@polkadot/types/interfaces/evm';
import type {
  AnySignature,
  EcdsaSignature,
  Ed25519Signature,
  Extrinsic,
  ExtrinsicEra,
  ExtrinsicPayload,
  ExtrinsicPayloadUnknown,
  ExtrinsicPayloadV4,
  ExtrinsicSignature,
  ExtrinsicSignatureV4,
  ExtrinsicUnknown,
  ExtrinsicV4,
  ImmortalEra,
  MortalEra,
  MultiSignature,
  Signature,
  SignerPayload,
  Sr25519Signature,
} from '@polkadot/types/interfaces/extrinsics';
import type {
  AssetOptions,
  Owner,
  PermissionLatest,
  PermissionVersions,
  PermissionsV1,
} from '@polkadot/types/interfaces/genericAsset';
import type {
  AuthorityIndex,
  AuthorityList,
  AuthorityWeight,
  EncodedFinalityProofs,
  GrandpaEquivocation,
  GrandpaEquivocationProof,
  GrandpaEquivocationValue,
  GrandpaPrevote,
  JustificationNotification,
  KeyOwnerProof,
  NextAuthority,
  PendingPause,
  PendingResume,
  Precommits,
  Prevotes,
  ReportedRoundStates,
  RoundState,
  SetId,
  StoredPendingChange,
  StoredState,
} from '@polkadot/types/interfaces/grandpa';
import type {
  AuthIndex,
  AuthoritySignature,
  Heartbeat,
  HeartbeatTo244,
  OpaqueMultiaddr,
  OpaqueNetworkState,
  OpaquePeerId,
} from '@polkadot/types/interfaces/imOnline';
import type { CallIndex, LotteryConfig } from '@polkadot/types/interfaces/lottery';
import type {
  DoubleMapTypeLatest,
  DoubleMapTypeV10,
  DoubleMapTypeV11,
  DoubleMapTypeV12,
  DoubleMapTypeV9,
  ErrorMetadataLatest,
  ErrorMetadataV10,
  ErrorMetadataV11,
  ErrorMetadataV12,
  ErrorMetadataV9,
  EventMetadataLatest,
  EventMetadataV10,
  EventMetadataV11,
  EventMetadataV12,
  EventMetadataV9,
  ExtrinsicMetadataLatest,
  ExtrinsicMetadataV11,
  ExtrinsicMetadataV12,
  FunctionArgumentMetadataLatest,
  FunctionArgumentMetadataV10,
  FunctionArgumentMetadataV11,
  FunctionArgumentMetadataV12,
  FunctionArgumentMetadataV9,
  FunctionMetadataLatest,
  FunctionMetadataV10,
  FunctionMetadataV11,
  FunctionMetadataV12,
  FunctionMetadataV9,
  MapTypeLatest,
  MapTypeV10,
  MapTypeV11,
  MapTypeV12,
  MapTypeV9,
  MetadataAll,
  MetadataLatest,
  MetadataV10,
  MetadataV11,
  MetadataV12,
  MetadataV9,
  ModuleConstantMetadataLatest,
  ModuleConstantMetadataV10,
  ModuleConstantMetadataV11,
  ModuleConstantMetadataV12,
  ModuleConstantMetadataV9,
  ModuleMetadataLatest,
  ModuleMetadataV10,
  ModuleMetadataV11,
  ModuleMetadataV12,
  ModuleMetadataV9,
  StorageEntryMetadataLatest,
  StorageEntryMetadataV10,
  StorageEntryMetadataV11,
  StorageEntryMetadataV12,
  StorageEntryMetadataV9,
  StorageEntryModifierLatest,
  StorageEntryModifierV10,
  StorageEntryModifierV11,
  StorageEntryModifierV12,
  StorageEntryModifierV9,
  StorageEntryTypeLatest,
  StorageEntryTypeV10,
  StorageEntryTypeV11,
  StorageEntryTypeV12,
  StorageEntryTypeV9,
  StorageHasher,
  StorageHasherV10,
  StorageHasherV11,
  StorageHasherV12,
  StorageHasherV9,
  StorageMetadataLatest,
  StorageMetadataV10,
  StorageMetadataV11,
  StorageMetadataV12,
  StorageMetadataV9,
} from '@polkadot/types/interfaces/metadata';
import type { StorageKind } from '@polkadot/types/interfaces/offchain';
import type {
  DeferredOffenceOf,
  Kind,
  OffenceDetails,
  Offender,
  OpaqueTimeSlot,
  ReportIdOf,
  Reporter,
} from '@polkadot/types/interfaces/offences';
import type {
  AbridgedCandidateReceipt,
  AbridgedHostConfiguration,
  AbridgedHrmpChannel,
  AbstractFungible,
  AbstractNonFungible,
  AccountId32Junction,
  AccountIndex64Junction,
  AccountKey20Junction,
  AssetInstance,
  AssignmentId,
  AssignmentKind,
  AttestedCandidate,
  AuctionIndex,
  AuthorityDiscoveryId,
  AvailabilityBitfield,
  AvailabilityBitfieldRecord,
  BackedCandidate,
  Balances,
  Bidder,
  BufferedSessionChange,
  CandidateCommitments,
  CandidateDescriptor,
  CandidateHash,
  CandidatePendingAvailability,
  CandidateReceipt,
  CollatorId,
  CollatorSignature,
  CommittedCandidateReceipt,
  ConcreteFungible,
  ConcreteNonFungible,
  CoreAssignment,
  CoreIndex,
  CoreOccupied,
  DepositAsset,
  DepositReserveAsset,
  DoubleVoteReport,
  DownwardMessage,
  ExchangeAsset,
  GlobalValidationSchedule,
  GroupIndex,
  HeadData,
  HostConfiguration,
  HrmpChannel,
  HrmpChannelId,
  HrmpOpenChannelRequest,
  InboundDownwardMessage,
  InboundHrmpMessage,
  InboundHrmpMessages,
  IncomingParachain,
  IncomingParachainDeploy,
  IncomingParachainFixed,
  InitiateReserveWithdraw,
  InitiateTeleport,
  Junction,
  LeasePeriod,
  LeasePeriodOf,
  LocalValidationData,
  MessageIngestionType,
  MultiAsset,
  MultiLocation,
  NetworkId,
  NewBidder,
  NewBidderOption,
  Order,
  OriginKind,
  OutboundHrmpMessage,
  ParaGenesisArgs,
  ParaId,
  ParaInfo,
  ParaPastCodeMeta,
  ParaScheduling,
  ParachainDispatchOrigin,
  ParachainProposal,
  ParathreadClaim,
  ParathreadClaimQueue,
  ParathreadEntry,
  PersistedValidationData,
  QueryHolding,
  QueuedParathread,
  RegisteredParachainInfo,
  RelayChainBlockNumber,
  RelayTo,
  RelayedFrom,
  Remark,
  ReserveAssetDeposit,
  Retriable,
  Scheduling,
  SessionInfo,
  SessionInfoValidatorGroup,
  SignedAvailabilityBitfield,
  SignedAvailabilityBitfields,
  SigningContext,
  SlotRange,
  Statement,
  SubId,
  TeleportAsset,
  Transact,
  TransientValidationData,
  UpwardMessage,
  ValidationCode,
  ValidationData,
  ValidationDataType,
  ValidationFunctionParams,
  ValidatorSignature,
  ValidityAttestation,
  VersionedMultiAsset,
  VersionedMultiLocation,
  VersionedXcm,
  WinnersData,
  WinnersDataTuple,
  WinningData,
  WinningDataEntry,
  WithdrawAsset,
  Xcm,
  XcmError,
  XcmResult,
} from '@polkadot/types/interfaces/parachains';
import type { RuntimeDispatchInfo } from '@polkadot/types/interfaces/payment';
import type { Approvals } from '@polkadot/types/interfaces/poll';
import type {
  ProxyAnnouncement,
  ProxyDefinition,
  ProxyType,
} from '@polkadot/types/interfaces/proxy';
import type { AccountStatus, AccountValidity } from '@polkadot/types/interfaces/purchase';
import type { ActiveRecovery, RecoveryConfig } from '@polkadot/types/interfaces/recovery';
import type { RpcMethods } from '@polkadot/types/interfaces/rpc';
import type {
  AccountId,
  AccountIdOf,
  AccountIndex,
  Address,
  AssetId,
  Balance,
  BalanceOf,
  Block,
  BlockNumber,
  Call,
  CallHash,
  CallHashOf,
  ChangesTrieConfiguration,
  Consensus,
  ConsensusEngineId,
  Digest,
  DigestItem,
  ExtrinsicsWeight,
  Fixed128,
  Fixed64,
  FixedI128,
  FixedI64,
  FixedU128,
  FixedU64,
  H1024,
  H128,
  H160,
  H2048,
  H256,
  H512,
  H64,
  Hash,
  Header,
  I32F32,
  Index,
  IndicesLookupSource,
  Justification,
  KeyTypeId,
  KeyValue,
  LockIdentifier,
  LookupSource,
  LookupTarget,
  ModuleId,
  Moment,
  MultiAddress,
  OpaqueCall,
  Origin,
  OriginCaller,
  PalletVersion,
  PalletsOrigin,
  Pays,
  PerU16,
  Perbill,
  Percent,
  Permill,
  Perquintill,
  Phantom,
  PhantomData,
  PreRuntime,
  Releases,
  RuntimeDbWeight,
  Seal,
  SealV0,
  SignedBlock,
  StorageData,
  TransactionPriority,
  U32F32,
  ValidatorId,
  ValidatorIdOf,
  Weight,
  WeightMultiplier,
} from '@polkadot/types/interfaces/runtime';
import type {
  SiField,
  SiLookupTypeId,
  SiPath,
  SiType,
  SiTypeDef,
  SiTypeDefArray,
  SiTypeDefComposite,
  SiTypeDefPrimitive,
  SiTypeDefSequence,
  SiTypeDefTuple,
  SiTypeDefVariant,
  SiVariant,
} from '@polkadot/types/interfaces/scaleInfo';
import type {
  Period,
  Priority,
  SchedulePeriod,
  SchedulePriority,
  Scheduled,
  ScheduledTo254,
  TaskAddress,
} from '@polkadot/types/interfaces/scheduler';
import type {
  FullIdentification,
  IdentificationTuple,
  Keys,
  MembershipProof,
  SessionIndex,
  SessionKeys1,
  SessionKeys2,
  SessionKeys3,
  SessionKeys4,
  SessionKeys5,
  SessionKeys6,
  SessionKeys7,
  SessionKeys8,
  SessionKeys9,
  ValidatorCount,
} from '@polkadot/types/interfaces/session';
import type {
  Bid,
  BidKind,
  SocietyJudgement,
  SocietyVote,
  StrikeCount,
  VouchingStatus,
} from '@polkadot/types/interfaces/society';
import type {
  ApiId,
  KeyValueOption,
  ReadProof,
  RuntimeVersion,
  RuntimeVersionApi,
  StorageChangeSet,
} from '@polkadot/types/interfaces/state';
import type { WeightToFeeCoefficient } from '@polkadot/types/interfaces/support';
import type {
  AccountInfo,
  AccountInfoWithProviders,
  AccountInfoWithRefCount,
  ApplyExtrinsicResult,
  BlockWeights,
  ChainProperties,
  ChainType,
  ConsumedWeight,
  DigestOf,
  DispatchClass,
  DispatchError,
  DispatchErrorModule,
  DispatchErrorTo198,
  DispatchInfo,
  DispatchInfoTo190,
  DispatchInfoTo244,
  DispatchOutcome,
  DispatchResult,
  DispatchResultOf,
  DispatchResultTo198,
  Event,
  EventId,
  EventIndex,
  EventRecord,
  Health,
  InvalidTransaction,
  Key,
  LastRuntimeUpgradeInfo,
  NetworkState,
  NetworkStatePeerset,
  NetworkStatePeersetInfo,
  NodeRole,
  NotConnectedPeer,
  Peer,
  PeerEndpoint,
  PeerEndpointAddr,
  PeerInfo,
  PeerPing,
  PerDispatchClass,
  Phase,
  RawOrigin,
  RefCount,
  RefCountTo259,
  SyncState,
  SystemOrigin,
  TransactionValidityError,
  UnknownTransaction,
  WeightPerClass,
} from '@polkadot/types/interfaces/system';
import type {
  Bounty,
  BountyIndex,
  BountyStatus,
  BountyStatusActive,
  BountyStatusCuratorProposed,
  BountyStatusPendingPayout,
  OpenTip,
  OpenTipFinderTo225,
  OpenTipTip,
  OpenTipTo225,
  TreasuryProposal,
} from '@polkadot/types/interfaces/treasury';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { Multisig, Timepoint } from '@polkadot/types/interfaces/utility';
import type { VestingInfo } from '@polkadot/types/interfaces/vesting';
import type {
  AffirmationStatus,
  AssetCompliance,
  AssetComplianceResult,
  AssetDidResult,
  AssetIdentifier,
  AssetMigrationError,
  AssetName,
  AssetOwnershipRelation,
  AssetType,
  AuthIdentifier,
  Authorization,
  AuthorizationData,
  AuthorizationNonce,
  AuthorizationType,
  BallotMeta,
  BallotTimeRange,
  BallotTitle,
  BallotVote,
  BatchAddClaimItem,
  BatchRevokeClaimItem,
  Beneficiary,
  BridgeTx,
  BridgeTxDetail,
  BridgeTxStatus,
  CACheckpoint,
  CADetails,
  CAId,
  CAKind,
  CalendarPeriod,
  CalendarUnit,
  CanTransferResult,
  CappedFee,
  CddId,
  CddStatus,
  CheckpointId,
  CheckpointSchedule,
  ChoiceTitle,
  Claim,
  Claim1stKey,
  Claim2ndKey,
  ClaimType,
  ClassicTickerImport,
  ClassicTickerRegistration,
  Committee,
  ComplianceRequirement,
  ComplianceRequirementResult,
  Condition,
  ConditionResult,
  ConditionType,
  CorporateAction,
  Counter,
  CountryCode,
  DepositInfo,
  DidRecord,
  DidRecords,
  DidRecordsSuccess,
  DidStatus,
  DispatchableName,
  Distribution,
  Document,
  DocumentHash,
  DocumentId,
  DocumentName,
  DocumentType,
  DocumentUri,
  EventDid,
  ExtVersion,
  ExtensionAttributes,
  FeeOf,
  FundingRoundName,
  Fundraiser,
  FundraiserName,
  FundraiserStatus,
  FundraiserTier,
  GetPortfolioAssetsResult,
  GetPortfoliosResult,
  HandledTxStatus,
  HistoricalVotingByAddress,
  HistoricalVotingById,
  IdentityClaim,
  IdentityClaimKey,
  IdentityId,
  IdentityRole,
  InactiveMember,
  Instruction,
  InstructionStatus,
  InvestorUid,
  InvestorZKProofData,
  IssueAssetItem,
  IssueRecipient,
  KeyIdentityData,
  Leg,
  LegStatus,
  LegacyPalletPermissions,
  LegacyPermissions,
  LocalCAId,
  MaybeBlock,
  Memo,
  MetaDescription,
  MetaUrl,
  MetaVersion,
  MigrationError,
  Motion,
  MotionInfoLink,
  MotionTitle,
  MovePortfolioItem,
  OffChainSignature,
  OfflineSlashingParams,
  PalletName,
  PalletPermissions,
  Payload,
  PendingTx,
  Percentage,
  PermissionedIdentityPrefs,
  Permissions,
  Pip,
  PipDescription,
  PipId,
  PipsMetadata,
  PolymeshVotes,
  PortfolioId,
  PortfolioKind,
  PortfolioName,
  PortfolioNumber,
  PosRatio,
  PreAuthorizedKeyInfo,
  PriceTier,
  ProportionMatch,
  ProposalData,
  ProposalDetails,
  ProposalState,
  ProposalStatus,
  Proposer,
  ProtocolOp,
  ProverTickerKey,
  Receipt,
  ReceiptDetails,
  ReceiptMetadata,
  RecordDate,
  RecordDateSpec,
  RestrictionResult,
  ScheduleId,
  ScheduleSpec,
  Scope,
  ScopeId,
  SecondaryKey,
  SecondaryKeyWithAuth,
  SecurityToken,
  SettlementType,
  Signatory,
  SimpleTokenRecord,
  SkippedCount,
  SlashingSwitch,
  SmartExtension,
  SmartExtensionName,
  SmartExtensionType,
  SnapshotId,
  SnapshotMetadata,
  SnapshotResult,
  SnapshottedPip,
  StoredSchedule,
  TargetIdAuthorization,
  TargetIdentities,
  TargetIdentity,
  TargetTreatment,
  Tax,
  TemplateDetails,
  TemplateMetadata,
  Ticker,
  TickerRangeProof,
  TickerRegistration,
  TickerRegistrationConfig,
  TickerTransferApproval,
  TransferManager,
  TrustedFor,
  TrustedIssuer,
  UniqueCall,
  Url,
  Venue,
  VenueDetails,
  VenueType,
  Version,
  VoteByPip,
  VoteCount,
  VoteCountProposalFound,
  VotingResult,
} from 'polymesh-types/polymesh';

declare module '@polkadot/types/types/registry' {
  export interface InterfaceTypes {
    'Compact<AccountIndex>': Compact<AccountIndex>;
    'Compact<ApprovalFlag>': Compact<ApprovalFlag>;
    'Compact<AssetId>': Compact<AssetId>;
    'Compact<AuctionIndex>': Compact<AuctionIndex>;
    'Compact<AuthIndex>': Compact<AuthIndex>;
    'Compact<AuthorityIndex>': Compact<AuthorityIndex>;
    'Compact<AuthorityWeight>': Compact<AuthorityWeight>;
    'Compact<AuthorizationNonce>': Compact<AuthorizationNonce>;
    'Compact<BabeAuthorityWeight>': Compact<BabeAuthorityWeight>;
    'Compact<BabeBlockWeight>': Compact<BabeBlockWeight>;
    'Compact<BabeWeight>': Compact<BabeWeight>;
    'Compact<Balance>': Compact<Balance>;
    'Compact<BalanceOf>': Compact<BalanceOf>;
    'Compact<BlockNumber>': Compact<BlockNumber>;
    'Compact<BountyIndex>': Compact<BountyIndex>;
    'Compact<CappedFee>': Compact<CappedFee>;
    'Compact<CheckpointId>': Compact<CheckpointId>;
    'Compact<ConsensusEngineId>': Compact<ConsensusEngineId>;
    'Compact<ContractDiscriminant>': Compact<ContractDiscriminant>;
    'Compact<CoreIndex>': Compact<CoreIndex>;
    'Compact<Counter>': Compact<Counter>;
    'Compact<DocumentId>': Compact<DocumentId>;
    'Compact<EventIndex>': Compact<EventIndex>;
    'Compact<ExtVersion>': Compact<ExtVersion>;
    'Compact<FeeOf>': Compact<FeeOf>;
    'Compact<FixedU128>': Compact<FixedU128>;
    'Compact<FixedU64>': Compact<FixedU64>;
    'Compact<FundIndex>': Compact<FundIndex>;
    'Compact<Gas>': Compact<Gas>;
    'Compact<GroupIndex>': Compact<GroupIndex>;
    'Compact<Index>': Compact<Index>;
    'Compact<KeyTypeId>': Compact<KeyTypeId>;
    'Compact<LeasePeriod>': Compact<LeasePeriod>;
    'Compact<LeasePeriodOf>': Compact<LeasePeriodOf>;
    'Compact<LocalCAId>': Compact<LocalCAId>;
    'Compact<MemberCount>': Compact<MemberCount>;
    'Compact<MetaVersion>': Compact<MetaVersion>;
    'Compact<Moment>': Compact<Moment>;
    'Compact<ParaId>': Compact<ParaId>;
    'Compact<Perbill>': Compact<Perbill>;
    'Compact<Percent>': Compact<Percent>;
    'Compact<Percentage>': Compact<Percentage>;
    'Compact<Permill>': Compact<Permill>;
    'Compact<Perquintill>': Compact<Perquintill>;
    'Compact<PerU16>': Compact<PerU16>;
    'Compact<PipId>': Compact<PipId>;
    'Compact<PortfolioNumber>': Compact<PortfolioNumber>;
    'Compact<Priority>': Compact<Priority>;
    'Compact<PropIndex>': Compact<PropIndex>;
    'Compact<ProposalIndex>': Compact<ProposalIndex>;
    'Compact<RefCount>': Compact<RefCount>;
    'Compact<RefCountTo259>': Compact<RefCountTo259>;
    'Compact<ReferendumIndex>': Compact<ReferendumIndex>;
    'Compact<RelayChainBlockNumber>': Compact<RelayChainBlockNumber>;
    'Compact<ScheduleId>': Compact<ScheduleId>;
    'Compact<SchedulePriority>': Compact<SchedulePriority>;
    'Compact<SessionIndex>': Compact<SessionIndex>;
    'Compact<SetId>': Compact<SetId>;
    'Compact<SetIndex>': Compact<SetIndex>;
    'Compact<SiLookupTypeId>': Compact<SiLookupTypeId>;
    'Compact<SkippedCount>': Compact<SkippedCount>;
    'Compact<SlotNumber>': Compact<SlotNumber>;
    'Compact<SnapshotId>': Compact<SnapshotId>;
    'Compact<StrikeCount>': Compact<StrikeCount>;
    'Compact<SubId>': Compact<SubId>;
    'Compact<TAssetBalance>': Compact<TAssetBalance>;
    'Compact<TAssetDepositBalance>': Compact<TAssetDepositBalance>;
    'Compact<Tax>': Compact<Tax>;
    'Compact<TransactionPriority>': Compact<TransactionPriority>;
    'Compact<u128>': Compact<u128>;
    'Compact<U128>': Compact<U128>;
    'Compact<u16>': Compact<u16>;
    'Compact<U16>': Compact<U16>;
    'Compact<u256>': Compact<u256>;
    'Compact<U256>': Compact<U256>;
    'Compact<u32>': Compact<u32>;
    'Compact<U32>': Compact<U32>;
    'Compact<U32F32>': Compact<U32F32>;
    'Compact<u64>': Compact<u64>;
    'Compact<U64>': Compact<U64>;
    'Compact<u8>': Compact<u8>;
    'Compact<U8>': Compact<U8>;
    'Compact<usize>': Compact<usize>;
    'Compact<USize>': Compact<USize>;
    'Compact<ValidatorCount>': Compact<ValidatorCount>;
    'Compact<Version>': Compact<Version>;
    'Compact<VoteIndex>': Compact<VoteIndex>;
    'Compact<Weight>': Compact<Weight>;
    'Option<AbridgedCandidateReceipt>': Option<AbridgedCandidateReceipt>;
    'Option<AbridgedHostConfiguration>': Option<AbridgedHostConfiguration>;
    'Option<AbridgedHrmpChannel>': Option<AbridgedHrmpChannel>;
    'Option<AbstractFungible>': Option<AbstractFungible>;
    'Option<AbstractNonFungible>': Option<AbstractNonFungible>;
    'Option<AccountData>': Option<AccountData>;
    'Option<AccountId>': Option<AccountId>;
    'Option<AccountId32Junction>': Option<AccountId32Junction>;
    'Option<AccountIdOf>': Option<AccountIdOf>;
    'Option<AccountIndex>': Option<AccountIndex>;
    'Option<AccountIndex64Junction>': Option<AccountIndex64Junction>;
    'Option<AccountInfo>': Option<AccountInfo>;
    'Option<AccountInfoWithProviders>': Option<AccountInfoWithProviders>;
    'Option<AccountInfoWithRefCount>': Option<AccountInfoWithRefCount>;
    'Option<AccountKey20Junction>': Option<AccountKey20Junction>;
    'Option<AccountStatus>': Option<AccountStatus>;
    'Option<AccountValidity>': Option<AccountValidity>;
    'Option<AccountVote>': Option<AccountVote>;
    'Option<AccountVoteSplit>': Option<AccountVoteSplit>;
    'Option<AccountVoteStandard>': Option<AccountVoteStandard>;
    'Option<ActiveRecovery>': Option<ActiveRecovery>;
    'Option<Address>': Option<Address>;
    'Option<AffirmationStatus>': Option<AffirmationStatus>;
    'Option<AliveContractInfo>': Option<AliveContractInfo>;
    'Option<AllowedSlots>': Option<AllowedSlots>;
    'Option<AnySignature>': Option<AnySignature>;
    'Option<ApiId>': Option<ApiId>;
    'Option<ApplyExtrinsicResult>': Option<ApplyExtrinsicResult>;
    'Option<ApprovalFlag>': Option<ApprovalFlag>;
    'Option<Approvals>': Option<Approvals>;
    'Option<AssetBalance>': Option<AssetBalance>;
    'Option<AssetCompliance>': Option<AssetCompliance>;
    'Option<AssetComplianceResult>': Option<AssetComplianceResult>;
    'Option<AssetDetails>': Option<AssetDetails>;
    'Option<AssetDidResult>': Option<AssetDidResult>;
    'Option<AssetId>': Option<AssetId>;
    'Option<AssetIdentifier>': Option<AssetIdentifier>;
    'Option<AssetInstance>': Option<AssetInstance>;
    'Option<AssetMigrationError>': Option<AssetMigrationError>;
    'Option<AssetName>': Option<AssetName>;
    'Option<AssetOptions>': Option<AssetOptions>;
    'Option<AssetOwnershipRelation>': Option<AssetOwnershipRelation>;
    'Option<AssetType>': Option<AssetType>;
    'Option<AssignmentId>': Option<AssignmentId>;
    'Option<AssignmentKind>': Option<AssignmentKind>;
    'Option<AttestedCandidate>': Option<AttestedCandidate>;
    'Option<AuctionIndex>': Option<AuctionIndex>;
    'Option<AuthIdentifier>': Option<AuthIdentifier>;
    'Option<AuthIndex>': Option<AuthIndex>;
    'Option<AuthorityDiscoveryId>': Option<AuthorityDiscoveryId>;
    'Option<AuthorityId>': Option<AuthorityId>;
    'Option<AuthorityIndex>': Option<AuthorityIndex>;
    'Option<AuthorityList>': Option<AuthorityList>;
    'Option<AuthoritySignature>': Option<AuthoritySignature>;
    'Option<AuthorityWeight>': Option<AuthorityWeight>;
    'Option<Authorization>': Option<Authorization>;
    'Option<AuthorizationData>': Option<AuthorizationData>;
    'Option<AuthorizationNonce>': Option<AuthorizationNonce>;
    'Option<AuthorizationType>': Option<AuthorizationType>;
    'Option<AvailabilityBitfield>': Option<AvailabilityBitfield>;
    'Option<AvailabilityBitfieldRecord>': Option<AvailabilityBitfieldRecord>;
    'Option<BabeAuthorityWeight>': Option<BabeAuthorityWeight>;
    'Option<BabeBlockWeight>': Option<BabeBlockWeight>;
    'Option<BabeEquivocationProof>': Option<BabeEquivocationProof>;
    'Option<BabeWeight>': Option<BabeWeight>;
    'Option<BackedCandidate>': Option<BackedCandidate>;
    'Option<Balance>': Option<Balance>;
    'Option<BalanceLock>': Option<BalanceLock>;
    'Option<BalanceLockTo212>': Option<BalanceLockTo212>;
    'Option<BalanceOf>': Option<BalanceOf>;
    'Option<Balances>': Option<Balances>;
    'Option<BalanceStatus>': Option<BalanceStatus>;
    'Option<BallotMeta>': Option<BallotMeta>;
    'Option<BallotTimeRange>': Option<BallotTimeRange>;
    'Option<BallotTitle>': Option<BallotTitle>;
    'Option<BallotVote>': Option<BallotVote>;
    'Option<BatchAddClaimItem>': Option<BatchAddClaimItem>;
    'Option<BatchRevokeClaimItem>': Option<BatchRevokeClaimItem>;
    'Option<Beneficiary>': Option<Beneficiary>;
    'Option<Bid>': Option<Bid>;
    'Option<Bidder>': Option<Bidder>;
    'Option<BidKind>': Option<BidKind>;
    'Option<BitVec>': Option<BitVec>;
    'Option<Block>': Option<Block>;
    'Option<BlockAttestations>': Option<BlockAttestations>;
    'Option<BlockHash>': Option<BlockHash>;
    'Option<BlockNumber>': Option<BlockNumber>;
    'Option<BlockWeights>': Option<BlockWeights>;
    'Option<bool>': Option<bool>;
    'Option<Bool>': Option<Bool>;
    'Option<Bounty>': Option<Bounty>;
    'Option<BountyIndex>': Option<BountyIndex>;
    'Option<BountyStatus>': Option<BountyStatus>;
    'Option<BountyStatusActive>': Option<BountyStatusActive>;
    'Option<BountyStatusCuratorProposed>': Option<BountyStatusCuratorProposed>;
    'Option<BountyStatusPendingPayout>': Option<BountyStatusPendingPayout>;
    'Option<BridgeTx>': Option<BridgeTx>;
    'Option<BridgeTxDetail>': Option<BridgeTxDetail>;
    'Option<BridgeTxStatus>': Option<BridgeTxStatus>;
    'Option<BufferedSessionChange>': Option<BufferedSessionChange>;
    'Option<Bytes>': Option<Bytes>;
    'Option<CACheckpoint>': Option<CACheckpoint>;
    'Option<CADetails>': Option<CADetails>;
    'Option<CAId>': Option<CAId>;
    'Option<CAKind>': Option<CAKind>;
    'Option<CalendarPeriod>': Option<CalendarPeriod>;
    'Option<CalendarUnit>': Option<CalendarUnit>;
    'Option<Call>': Option<Call>;
    'Option<CallHash>': Option<CallHash>;
    'Option<CallHashOf>': Option<CallHashOf>;
    'Option<CallIndex>': Option<CallIndex>;
    'Option<CandidateCommitments>': Option<CandidateCommitments>;
    'Option<CandidateDescriptor>': Option<CandidateDescriptor>;
    'Option<CandidateHash>': Option<CandidateHash>;
    'Option<CandidatePendingAvailability>': Option<CandidatePendingAvailability>;
    'Option<CandidateReceipt>': Option<CandidateReceipt>;
    'Option<CanTransferResult>': Option<CanTransferResult>;
    'Option<CappedFee>': Option<CappedFee>;
    'Option<CddId>': Option<CddId>;
    'Option<CddStatus>': Option<CddStatus>;
    'Option<ChainProperties>': Option<ChainProperties>;
    'Option<ChainType>': Option<ChainType>;
    'Option<ChangesTrieConfiguration>': Option<ChangesTrieConfiguration>;
    'Option<CheckpointId>': Option<CheckpointId>;
    'Option<CheckpointSchedule>': Option<CheckpointSchedule>;
    'Option<ChoiceTitle>': Option<ChoiceTitle>;
    'Option<Claim>': Option<Claim>;
    'Option<Claim1stKey>': Option<Claim1stKey>;
    'Option<Claim2ndKey>': Option<Claim2ndKey>;
    'Option<ClaimType>': Option<ClaimType>;
    'Option<ClassicTickerImport>': Option<ClassicTickerImport>;
    'Option<ClassicTickerRegistration>': Option<ClassicTickerRegistration>;
    'Option<CodeHash>': Option<CodeHash>;
    'Option<CollatorId>': Option<CollatorId>;
    'Option<CollatorSignature>': Option<CollatorSignature>;
    'Option<CollectiveOrigin>': Option<CollectiveOrigin>;
    'Option<CommittedCandidateReceipt>': Option<CommittedCandidateReceipt>;
    'Option<Committee>': Option<Committee>;
    'Option<ComplianceRequirement>': Option<ComplianceRequirement>;
    'Option<ComplianceRequirementResult>': Option<ComplianceRequirementResult>;
    'Option<ConcreteFungible>': Option<ConcreteFungible>;
    'Option<ConcreteNonFungible>': Option<ConcreteNonFungible>;
    'Option<Condition>': Option<Condition>;
    'Option<ConditionResult>': Option<ConditionResult>;
    'Option<ConditionType>': Option<ConditionType>;
    'Option<Consensus>': Option<Consensus>;
    'Option<ConsensusEngineId>': Option<ConsensusEngineId>;
    'Option<ConsumedWeight>': Option<ConsumedWeight>;
    'Option<ContractCallRequest>': Option<ContractCallRequest>;
    'Option<ContractConstructorSpec>': Option<ContractConstructorSpec>;
    'Option<ContractContractSpec>': Option<ContractContractSpec>;
    'Option<ContractCryptoHasher>': Option<ContractCryptoHasher>;
    'Option<ContractDiscriminant>': Option<ContractDiscriminant>;
    'Option<ContractDisplayName>': Option<ContractDisplayName>;
    'Option<ContractEventParamSpec>': Option<ContractEventParamSpec>;
    'Option<ContractEventSpec>': Option<ContractEventSpec>;
    'Option<ContractExecResult>': Option<ContractExecResult>;
    'Option<ContractExecResultErr>': Option<ContractExecResultErr>;
    'Option<ContractExecResultErrModule>': Option<ContractExecResultErrModule>;
    'Option<ContractExecResultOk>': Option<ContractExecResultOk>;
    'Option<ContractExecResultResult>': Option<ContractExecResultResult>;
    'Option<ContractExecResultSuccessTo255>': Option<ContractExecResultSuccessTo255>;
    'Option<ContractExecResultSuccessTo260>': Option<ContractExecResultSuccessTo260>;
    'Option<ContractExecResultTo255>': Option<ContractExecResultTo255>;
    'Option<ContractExecResultTo260>': Option<ContractExecResultTo260>;
    'Option<ContractInfo>': Option<ContractInfo>;
    'Option<ContractLayoutArray>': Option<ContractLayoutArray>;
    'Option<ContractLayoutCell>': Option<ContractLayoutCell>;
    'Option<ContractLayoutEnum>': Option<ContractLayoutEnum>;
    'Option<ContractLayoutHash>': Option<ContractLayoutHash>;
    'Option<ContractLayoutHashingStrategy>': Option<ContractLayoutHashingStrategy>;
    'Option<ContractLayoutKey>': Option<ContractLayoutKey>;
    'Option<ContractLayoutStruct>': Option<ContractLayoutStruct>;
    'Option<ContractLayoutStructField>': Option<ContractLayoutStructField>;
    'Option<ContractMessageParamSpec>': Option<ContractMessageParamSpec>;
    'Option<ContractMessageSpec>': Option<ContractMessageSpec>;
    'Option<ContractProject>': Option<ContractProject>;
    'Option<ContractProjectContract>': Option<ContractProjectContract>;
    'Option<ContractProjectSource>': Option<ContractProjectSource>;
    'Option<ContractSelector>': Option<ContractSelector>;
    'Option<ContractStorageKey>': Option<ContractStorageKey>;
    'Option<ContractStorageLayout>': Option<ContractStorageLayout>;
    'Option<ContractTypeSpec>': Option<ContractTypeSpec>;
    'Option<Conviction>': Option<Conviction>;
    'Option<CoreAssignment>': Option<CoreAssignment>;
    'Option<CoreIndex>': Option<CoreIndex>;
    'Option<CoreOccupied>': Option<CoreOccupied>;
    'Option<CorporateAction>': Option<CorporateAction>;
    'Option<Counter>': Option<Counter>;
    'Option<CountryCode>': Option<CountryCode>;
    'Option<CreatedBlock>': Option<CreatedBlock>;
    'Option<Data>': Option<Data>;
    'Option<DeferredOffenceOf>': Option<DeferredOffenceOf>;
    'Option<DefunctVoter>': Option<DefunctVoter>;
    'Option<Delegations>': Option<Delegations>;
    'Option<DeletedContract>': Option<DeletedContract>;
    'Option<DeployData>': Option<DeployData>;
    'Option<DepositAsset>': Option<DepositAsset>;
    'Option<DepositInfo>': Option<DepositInfo>;
    'Option<DepositReserveAsset>': Option<DepositReserveAsset>;
    'Option<DidRecord>': Option<DidRecord>;
    'Option<DidRecords>': Option<DidRecords>;
    'Option<DidRecordsSuccess>': Option<DidRecordsSuccess>;
    'Option<DidStatus>': Option<DidStatus>;
    'Option<Digest>': Option<Digest>;
    'Option<DigestItem>': Option<DigestItem>;
    'Option<DigestOf>': Option<DigestOf>;
    'Option<DispatchableName>': Option<DispatchableName>;
    'Option<DispatchClass>': Option<DispatchClass>;
    'Option<DispatchError>': Option<DispatchError>;
    'Option<DispatchErrorModule>': Option<DispatchErrorModule>;
    'Option<DispatchErrorTo198>': Option<DispatchErrorTo198>;
    'Option<DispatchInfo>': Option<DispatchInfo>;
    'Option<DispatchInfoTo190>': Option<DispatchInfoTo190>;
    'Option<DispatchInfoTo244>': Option<DispatchInfoTo244>;
    'Option<DispatchOutcome>': Option<DispatchOutcome>;
    'Option<DispatchResult>': Option<DispatchResult>;
    'Option<DispatchResultOf>': Option<DispatchResultOf>;
    'Option<DispatchResultTo198>': Option<DispatchResultTo198>;
    'Option<Distribution>': Option<Distribution>;
    'Option<Document>': Option<Document>;
    'Option<DocumentHash>': Option<DocumentHash>;
    'Option<DocumentId>': Option<DocumentId>;
    'Option<DocumentName>': Option<DocumentName>;
    'Option<DocumentType>': Option<DocumentType>;
    'Option<DocumentUri>': Option<DocumentUri>;
    'Option<DoNotConstruct>': Option<DoNotConstruct>;
    'Option<DoubleMapTypeLatest>': Option<DoubleMapTypeLatest>;
    'Option<DoubleMapTypeV10>': Option<DoubleMapTypeV10>;
    'Option<DoubleMapTypeV11>': Option<DoubleMapTypeV11>;
    'Option<DoubleMapTypeV12>': Option<DoubleMapTypeV12>;
    'Option<DoubleMapTypeV9>': Option<DoubleMapTypeV9>;
    'Option<DoubleVoteReport>': Option<DoubleVoteReport>;
    'Option<DownwardMessage>': Option<DownwardMessage>;
    'Option<EcdsaSignature>': Option<EcdsaSignature>;
    'Option<Ed25519Signature>': Option<Ed25519Signature>;
    'Option<EncodedFinalityProofs>': Option<EncodedFinalityProofs>;
    'Option<EpochAuthorship>': Option<EpochAuthorship>;
    'Option<ErrorMetadataLatest>': Option<ErrorMetadataLatest>;
    'Option<ErrorMetadataV10>': Option<ErrorMetadataV10>;
    'Option<ErrorMetadataV11>': Option<ErrorMetadataV11>;
    'Option<ErrorMetadataV12>': Option<ErrorMetadataV12>;
    'Option<ErrorMetadataV9>': Option<ErrorMetadataV9>;
    'Option<EthAccount>': Option<EthAccount>;
    'Option<EthBlock>': Option<EthBlock>;
    'Option<EthBloom>': Option<EthBloom>;
    'Option<EthCallRequest>': Option<EthCallRequest>;
    'Option<EthereumAccountId>': Option<EthereumAccountId>;
    'Option<EthereumAddress>': Option<EthereumAddress>;
    'Option<EthereumLookupSource>': Option<EthereumLookupSource>;
    'Option<EthereumSignature>': Option<EthereumSignature>;
    'Option<EthFilter>': Option<EthFilter>;
    'Option<EthFilterAddress>': Option<EthFilterAddress>;
    'Option<EthFilterTopic>': Option<EthFilterTopic>;
    'Option<EthFilterTopicEntry>': Option<EthFilterTopicEntry>;
    'Option<EthFilterTopicInner>': Option<EthFilterTopicInner>;
    'Option<EthHeader>': Option<EthHeader>;
    'Option<EthLog>': Option<EthLog>;
    'Option<EthReceipt>': Option<EthReceipt>;
    'Option<EthRichBlock>': Option<EthRichBlock>;
    'Option<EthRichHeader>': Option<EthRichHeader>;
    'Option<EthStorageProof>': Option<EthStorageProof>;
    'Option<EthSubKind>': Option<EthSubKind>;
    'Option<EthSubParams>': Option<EthSubParams>;
    'Option<EthSubResult>': Option<EthSubResult>;
    'Option<EthSyncInfo>': Option<EthSyncInfo>;
    'Option<EthSyncStatus>': Option<EthSyncStatus>;
    'Option<EthTransaction>': Option<EthTransaction>;
    'Option<EthTransactionAction>': Option<EthTransactionAction>;
    'Option<EthTransactionCondition>': Option<EthTransactionCondition>;
    'Option<EthTransactionRequest>': Option<EthTransactionRequest>;
    'Option<EthTransactionStatus>': Option<EthTransactionStatus>;
    'Option<EthWork>': Option<EthWork>;
    'Option<Event>': Option<Event>;
    'Option<EventDid>': Option<EventDid>;
    'Option<EventId>': Option<EventId>;
    'Option<EventIndex>': Option<EventIndex>;
    'Option<EventMetadataLatest>': Option<EventMetadataLatest>;
    'Option<EventMetadataV10>': Option<EventMetadataV10>;
    'Option<EventMetadataV11>': Option<EventMetadataV11>;
    'Option<EventMetadataV12>': Option<EventMetadataV12>;
    'Option<EventMetadataV9>': Option<EventMetadataV9>;
    'Option<EventRecord>': Option<EventRecord>;
    'Option<EvmAccount>': Option<EvmAccount>;
    'Option<EvmLog>': Option<EvmLog>;
    'Option<EvmVicinity>': Option<EvmVicinity>;
    'Option<ExchangeAsset>': Option<ExchangeAsset>;
    'Option<ExitError>': Option<ExitError>;
    'Option<ExitFatal>': Option<ExitFatal>;
    'Option<ExitReason>': Option<ExitReason>;
    'Option<ExitRevert>': Option<ExitRevert>;
    'Option<ExitSucceed>': Option<ExitSucceed>;
    'Option<ExtensionAttributes>': Option<ExtensionAttributes>;
    'Option<Extrinsic>': Option<Extrinsic>;
    'Option<ExtrinsicEra>': Option<ExtrinsicEra>;
    'Option<ExtrinsicMetadataLatest>': Option<ExtrinsicMetadataLatest>;
    'Option<ExtrinsicMetadataV11>': Option<ExtrinsicMetadataV11>;
    'Option<ExtrinsicMetadataV12>': Option<ExtrinsicMetadataV12>;
    'Option<ExtrinsicOrHash>': Option<ExtrinsicOrHash>;
    'Option<ExtrinsicPayload>': Option<ExtrinsicPayload>;
    'Option<ExtrinsicPayloadUnknown>': Option<ExtrinsicPayloadUnknown>;
    'Option<ExtrinsicPayloadV4>': Option<ExtrinsicPayloadV4>;
    'Option<ExtrinsicSignature>': Option<ExtrinsicSignature>;
    'Option<ExtrinsicSignatureV4>': Option<ExtrinsicSignatureV4>;
    'Option<ExtrinsicStatus>': Option<ExtrinsicStatus>;
    'Option<ExtrinsicsWeight>': Option<ExtrinsicsWeight>;
    'Option<ExtrinsicUnknown>': Option<ExtrinsicUnknown>;
    'Option<ExtrinsicV4>': Option<ExtrinsicV4>;
    'Option<ExtVersion>': Option<ExtVersion>;
    'Option<FeeOf>': Option<FeeOf>;
    'Option<Fixed128>': Option<Fixed128>;
    'Option<Fixed64>': Option<Fixed64>;
    'Option<FixedI128>': Option<FixedI128>;
    'Option<FixedI64>': Option<FixedI64>;
    'Option<FixedU128>': Option<FixedU128>;
    'Option<FixedU64>': Option<FixedU64>;
    'Option<FullIdentification>': Option<FullIdentification>;
    'Option<FunctionArgumentMetadataLatest>': Option<FunctionArgumentMetadataLatest>;
    'Option<FunctionArgumentMetadataV10>': Option<FunctionArgumentMetadataV10>;
    'Option<FunctionArgumentMetadataV11>': Option<FunctionArgumentMetadataV11>;
    'Option<FunctionArgumentMetadataV12>': Option<FunctionArgumentMetadataV12>;
    'Option<FunctionArgumentMetadataV9>': Option<FunctionArgumentMetadataV9>;
    'Option<FunctionMetadataLatest>': Option<FunctionMetadataLatest>;
    'Option<FunctionMetadataV10>': Option<FunctionMetadataV10>;
    'Option<FunctionMetadataV11>': Option<FunctionMetadataV11>;
    'Option<FunctionMetadataV12>': Option<FunctionMetadataV12>;
    'Option<FunctionMetadataV9>': Option<FunctionMetadataV9>;
    'Option<FundIndex>': Option<FundIndex>;
    'Option<FundInfo>': Option<FundInfo>;
    'Option<FundingRoundName>': Option<FundingRoundName>;
    'Option<Fundraiser>': Option<Fundraiser>;
    'Option<FundraiserName>': Option<FundraiserName>;
    'Option<FundraiserStatus>': Option<FundraiserStatus>;
    'Option<FundraiserTier>': Option<FundraiserTier>;
    'Option<Gas>': Option<Gas>;
    'Option<GetPortfolioAssetsResult>': Option<GetPortfolioAssetsResult>;
    'Option<GetPortfoliosResult>': Option<GetPortfoliosResult>;
    'Option<GlobalValidationSchedule>': Option<GlobalValidationSchedule>;
    'Option<GrandpaEquivocation>': Option<GrandpaEquivocation>;
    'Option<GrandpaEquivocationProof>': Option<GrandpaEquivocationProof>;
    'Option<GrandpaEquivocationValue>': Option<GrandpaEquivocationValue>;
    'Option<GrandpaPrevote>': Option<GrandpaPrevote>;
    'Option<GroupIndex>': Option<GroupIndex>;
    'Option<H1024>': Option<H1024>;
    'Option<H128>': Option<H128>;
    'Option<H160>': Option<H160>;
    'Option<H2048>': Option<H2048>;
    'Option<H256>': Option<H256>;
    'Option<H512>': Option<H512>;
    'Option<H64>': Option<H64>;
    'Option<HandledTxStatus>': Option<HandledTxStatus>;
    'Option<Hash>': Option<Hash>;
    'Option<HeadData>': Option<HeadData>;
    'Option<Header>': Option<Header>;
    'Option<Health>': Option<Health>;
    'Option<Heartbeat>': Option<Heartbeat>;
    'Option<HeartbeatTo244>': Option<HeartbeatTo244>;
    'Option<HistoricalVotingByAddress>': Option<HistoricalVotingByAddress>;
    'Option<HistoricalVotingById>': Option<HistoricalVotingById>;
    'Option<HostConfiguration>': Option<HostConfiguration>;
    'Option<HostFnWeights>': Option<HostFnWeights>;
    'Option<HrmpChannel>': Option<HrmpChannel>;
    'Option<HrmpChannelId>': Option<HrmpChannelId>;
    'Option<HrmpOpenChannelRequest>': Option<HrmpOpenChannelRequest>;
    'Option<i128>': Option<i128>;
    'Option<I128>': Option<I128>;
    'Option<i16>': Option<i16>;
    'Option<I16>': Option<I16>;
    'Option<i256>': Option<i256>;
    'Option<I256>': Option<I256>;
    'Option<i32>': Option<i32>;
    'Option<I32>': Option<I32>;
    'Option<I32F32>': Option<I32F32>;
    'Option<i64>': Option<i64>;
    'Option<I64>': Option<I64>;
    'Option<i8>': Option<i8>;
    'Option<I8>': Option<I8>;
    'Option<IdentificationTuple>': Option<IdentificationTuple>;
    'Option<IdentityClaim>': Option<IdentityClaim>;
    'Option<IdentityClaimKey>': Option<IdentityClaimKey>;
    'Option<IdentityId>': Option<IdentityId>;
    'Option<IdentityRole>': Option<IdentityRole>;
    'Option<ImmortalEra>': Option<ImmortalEra>;
    'Option<ImportedAux>': Option<ImportedAux>;
    'Option<InactiveMember>': Option<InactiveMember>;
    'Option<InboundDownwardMessage>': Option<InboundDownwardMessage>;
    'Option<InboundHrmpMessage>': Option<InboundHrmpMessage>;
    'Option<InboundHrmpMessages>': Option<InboundHrmpMessages>;
    'Option<IncludedBlocks>': Option<IncludedBlocks>;
    'Option<IncomingParachain>': Option<IncomingParachain>;
    'Option<IncomingParachainDeploy>': Option<IncomingParachainDeploy>;
    'Option<IncomingParachainFixed>': Option<IncomingParachainFixed>;
    'Option<Index>': Option<Index>;
    'Option<IndicesLookupSource>': Option<IndicesLookupSource>;
    'Option<InitiateReserveWithdraw>': Option<InitiateReserveWithdraw>;
    'Option<InitiateTeleport>': Option<InitiateTeleport>;
    'Option<Instruction>': Option<Instruction>;
    'Option<InstructionStatus>': Option<InstructionStatus>;
    'Option<InstructionWeights>': Option<InstructionWeights>;
    'Option<InvalidTransaction>': Option<InvalidTransaction>;
    'Option<InvestorUid>': Option<InvestorUid>;
    'Option<InvestorZKProofData>': Option<InvestorZKProofData>;
    'Option<IssueAssetItem>': Option<IssueAssetItem>;
    'Option<IssueRecipient>': Option<IssueRecipient>;
    'Option<Json>': Option<Json>;
    'Option<Junction>': Option<Junction>;
    'Option<Justification>': Option<Justification>;
    'Option<JustificationNotification>': Option<JustificationNotification>;
    'Option<Key>': Option<Key>;
    'Option<KeyIdentityData>': Option<KeyIdentityData>;
    'Option<KeyOwnerProof>': Option<KeyOwnerProof>;
    'Option<Keys>': Option<Keys>;
    'Option<KeyTypeId>': Option<KeyTypeId>;
    'Option<KeyValue>': Option<KeyValue>;
    'Option<KeyValueOption>': Option<KeyValueOption>;
    'Option<Kind>': Option<Kind>;
    'Option<LastContribution>': Option<LastContribution>;
    'Option<LastRuntimeUpgradeInfo>': Option<LastRuntimeUpgradeInfo>;
    'Option<LeasePeriod>': Option<LeasePeriod>;
    'Option<LeasePeriodOf>': Option<LeasePeriodOf>;
    'Option<Leg>': Option<Leg>;
    'Option<LegacyPalletPermissions>': Option<LegacyPalletPermissions>;
    'Option<LegacyPermissions>': Option<LegacyPermissions>;
    'Option<LegStatus>': Option<LegStatus>;
    'Option<Limits>': Option<Limits>;
    'Option<LocalCAId>': Option<LocalCAId>;
    'Option<LocalValidationData>': Option<LocalValidationData>;
    'Option<LockIdentifier>': Option<LockIdentifier>;
    'Option<LookupSource>': Option<LookupSource>;
    'Option<LookupTarget>': Option<LookupTarget>;
    'Option<LotteryConfig>': Option<LotteryConfig>;
    'Option<MapTypeLatest>': Option<MapTypeLatest>;
    'Option<MapTypeV10>': Option<MapTypeV10>;
    'Option<MapTypeV11>': Option<MapTypeV11>;
    'Option<MapTypeV12>': Option<MapTypeV12>;
    'Option<MapTypeV9>': Option<MapTypeV9>;
    'Option<MaybeBlock>': Option<MaybeBlock>;
    'Option<MaybeRandomness>': Option<MaybeRandomness>;
    'Option<MaybeVrf>': Option<MaybeVrf>;
    'Option<MemberCount>': Option<MemberCount>;
    'Option<MembershipProof>': Option<MembershipProof>;
    'Option<Memo>': Option<Memo>;
    'Option<MessageIngestionType>': Option<MessageIngestionType>;
    'Option<MetadataAll>': Option<MetadataAll>;
    'Option<MetadataLatest>': Option<MetadataLatest>;
    'Option<MetadataV10>': Option<MetadataV10>;
    'Option<MetadataV11>': Option<MetadataV11>;
    'Option<MetadataV12>': Option<MetadataV12>;
    'Option<MetadataV9>': Option<MetadataV9>;
    'Option<MetaDescription>': Option<MetaDescription>;
    'Option<MetaUrl>': Option<MetaUrl>;
    'Option<MetaVersion>': Option<MetaVersion>;
    'Option<MigrationError>': Option<MigrationError>;
    'Option<ModuleConstantMetadataLatest>': Option<ModuleConstantMetadataLatest>;
    'Option<ModuleConstantMetadataV10>': Option<ModuleConstantMetadataV10>;
    'Option<ModuleConstantMetadataV11>': Option<ModuleConstantMetadataV11>;
    'Option<ModuleConstantMetadataV12>': Option<ModuleConstantMetadataV12>;
    'Option<ModuleConstantMetadataV9>': Option<ModuleConstantMetadataV9>;
    'Option<ModuleId>': Option<ModuleId>;
    'Option<ModuleMetadataLatest>': Option<ModuleMetadataLatest>;
    'Option<ModuleMetadataV10>': Option<ModuleMetadataV10>;
    'Option<ModuleMetadataV11>': Option<ModuleMetadataV11>;
    'Option<ModuleMetadataV12>': Option<ModuleMetadataV12>;
    'Option<ModuleMetadataV9>': Option<ModuleMetadataV9>;
    'Option<Moment>': Option<Moment>;
    'Option<MoreAttestations>': Option<MoreAttestations>;
    'Option<MortalEra>': Option<MortalEra>;
    'Option<Motion>': Option<Motion>;
    'Option<MotionInfoLink>': Option<MotionInfoLink>;
    'Option<MotionTitle>': Option<MotionTitle>;
    'Option<MovePortfolioItem>': Option<MovePortfolioItem>;
    'Option<MultiAddress>': Option<MultiAddress>;
    'Option<MultiAsset>': Option<MultiAsset>;
    'Option<MultiLocation>': Option<MultiLocation>;
    'Option<Multiplier>': Option<Multiplier>;
    'Option<Multisig>': Option<Multisig>;
    'Option<MultiSignature>': Option<MultiSignature>;
    'Option<NetworkId>': Option<NetworkId>;
    'Option<NetworkState>': Option<NetworkState>;
    'Option<NetworkStatePeerset>': Option<NetworkStatePeerset>;
    'Option<NetworkStatePeersetInfo>': Option<NetworkStatePeersetInfo>;
    'Option<NewBidder>': Option<NewBidder>;
    'Option<NewBidderOption>': Option<NewBidderOption>;
    'Option<NextAuthority>': Option<NextAuthority>;
    'Option<NextConfigDescriptor>': Option<NextConfigDescriptor>;
    'Option<NextConfigDescriptorV1>': Option<NextConfigDescriptorV1>;
    'Option<NodeRole>': Option<NodeRole>;
    'Option<NotConnectedPeer>': Option<NotConnectedPeer>;
    'Option<Null>': Option<Null>;
    'Option<OffChainSignature>': Option<OffChainSignature>;
    'Option<OffenceDetails>': Option<OffenceDetails>;
    'Option<Offender>': Option<Offender>;
    'Option<OfflineSlashingParams>': Option<OfflineSlashingParams>;
    'Option<OpaqueCall>': Option<OpaqueCall>;
    'Option<OpaqueMultiaddr>': Option<OpaqueMultiaddr>;
    'Option<OpaqueNetworkState>': Option<OpaqueNetworkState>;
    'Option<OpaquePeerId>': Option<OpaquePeerId>;
    'Option<OpaqueTimeSlot>': Option<OpaqueTimeSlot>;
    'Option<OpenTip>': Option<OpenTip>;
    'Option<OpenTipFinderTo225>': Option<OpenTipFinderTo225>;
    'Option<OpenTipTip>': Option<OpenTipTip>;
    'Option<OpenTipTo225>': Option<OpenTipTo225>;
    'Option<Order>': Option<Order>;
    'Option<Origin>': Option<Origin>;
    'Option<OriginCaller>': Option<OriginCaller>;
    'Option<OriginKind>': Option<OriginKind>;
    'Option<OutboundHrmpMessage>': Option<OutboundHrmpMessage>;
    'Option<Owner>': Option<Owner>;
    'Option<PalletName>': Option<PalletName>;
    'Option<PalletPermissions>': Option<PalletPermissions>;
    'Option<PalletsOrigin>': Option<PalletsOrigin>;
    'Option<PalletVersion>': Option<PalletVersion>;
    'Option<ParachainDispatchOrigin>': Option<ParachainDispatchOrigin>;
    'Option<ParachainProposal>': Option<ParachainProposal>;
    'Option<ParaGenesisArgs>': Option<ParaGenesisArgs>;
    'Option<ParaId>': Option<ParaId>;
    'Option<ParaInfo>': Option<ParaInfo>;
    'Option<ParaPastCodeMeta>': Option<ParaPastCodeMeta>;
    'Option<ParaScheduling>': Option<ParaScheduling>;
    'Option<ParathreadClaim>': Option<ParathreadClaim>;
    'Option<ParathreadClaimQueue>': Option<ParathreadClaimQueue>;
    'Option<ParathreadEntry>': Option<ParathreadEntry>;
    'Option<Payload>': Option<Payload>;
    'Option<Pays>': Option<Pays>;
    'Option<Peer>': Option<Peer>;
    'Option<PeerEndpoint>': Option<PeerEndpoint>;
    'Option<PeerEndpointAddr>': Option<PeerEndpointAddr>;
    'Option<PeerInfo>': Option<PeerInfo>;
    'Option<PeerPing>': Option<PeerPing>;
    'Option<PendingPause>': Option<PendingPause>;
    'Option<PendingResume>': Option<PendingResume>;
    'Option<PendingTx>': Option<PendingTx>;
    'Option<Perbill>': Option<Perbill>;
    'Option<Percent>': Option<Percent>;
    'Option<Percentage>': Option<Percentage>;
    'Option<PerDispatchClass>': Option<PerDispatchClass>;
    'Option<Period>': Option<Period>;
    'Option<Permill>': Option<Permill>;
    'Option<PermissionedIdentityPrefs>': Option<PermissionedIdentityPrefs>;
    'Option<PermissionLatest>': Option<PermissionLatest>;
    'Option<Permissions>': Option<Permissions>;
    'Option<PermissionsV1>': Option<PermissionsV1>;
    'Option<PermissionVersions>': Option<PermissionVersions>;
    'Option<Perquintill>': Option<Perquintill>;
    'Option<PersistedValidationData>': Option<PersistedValidationData>;
    'Option<PerU16>': Option<PerU16>;
    'Option<Phantom>': Option<Phantom>;
    'Option<PhantomData>': Option<PhantomData>;
    'Option<Phase>': Option<Phase>;
    'Option<Pip>': Option<Pip>;
    'Option<PipDescription>': Option<PipDescription>;
    'Option<PipId>': Option<PipId>;
    'Option<PipsMetadata>': Option<PipsMetadata>;
    'Option<PolymeshVotes>': Option<PolymeshVotes>;
    'Option<PortfolioId>': Option<PortfolioId>;
    'Option<PortfolioKind>': Option<PortfolioKind>;
    'Option<PortfolioName>': Option<PortfolioName>;
    'Option<PortfolioNumber>': Option<PortfolioNumber>;
    'Option<PosRatio>': Option<PosRatio>;
    'Option<PreAuthorizedKeyInfo>': Option<PreAuthorizedKeyInfo>;
    'Option<Precommits>': Option<Precommits>;
    'Option<PrefabWasmModule>': Option<PrefabWasmModule>;
    'Option<PrefabWasmModuleReserved>': Option<PrefabWasmModuleReserved>;
    'Option<PrefixedStorageKey>': Option<PrefixedStorageKey>;
    'Option<PreimageStatus>': Option<PreimageStatus>;
    'Option<PreimageStatusAvailable>': Option<PreimageStatusAvailable>;
    'Option<PreRuntime>': Option<PreRuntime>;
    'Option<Prevotes>': Option<Prevotes>;
    'Option<PriceTier>': Option<PriceTier>;
    'Option<Priority>': Option<Priority>;
    'Option<PriorLock>': Option<PriorLock>;
    'Option<PropIndex>': Option<PropIndex>;
    'Option<ProportionMatch>': Option<ProportionMatch>;
    'Option<Proposal>': Option<Proposal>;
    'Option<ProposalData>': Option<ProposalData>;
    'Option<ProposalDetails>': Option<ProposalDetails>;
    'Option<ProposalIndex>': Option<ProposalIndex>;
    'Option<ProposalState>': Option<ProposalState>;
    'Option<ProposalStatus>': Option<ProposalStatus>;
    'Option<Proposer>': Option<Proposer>;
    'Option<ProtocolOp>': Option<ProtocolOp>;
    'Option<ProverTickerKey>': Option<ProverTickerKey>;
    'Option<ProxyAnnouncement>': Option<ProxyAnnouncement>;
    'Option<ProxyDefinition>': Option<ProxyDefinition>;
    'Option<ProxyState>': Option<ProxyState>;
    'Option<ProxyType>': Option<ProxyType>;
    'Option<QueryHolding>': Option<QueryHolding>;
    'Option<QueuedParathread>': Option<QueuedParathread>;
    'Option<Randomness>': Option<Randomness>;
    'Option<Raw>': Option<Raw>;
    'Option<RawAuraPreDigest>': Option<RawAuraPreDigest>;
    'Option<RawBabePreDigest>': Option<RawBabePreDigest>;
    'Option<RawBabePreDigestCompat>': Option<RawBabePreDigestCompat>;
    'Option<RawBabePreDigestPrimary>': Option<RawBabePreDigestPrimary>;
    'Option<RawBabePreDigestPrimaryTo159>': Option<RawBabePreDigestPrimaryTo159>;
    'Option<RawBabePreDigestSecondaryPlain>': Option<RawBabePreDigestSecondaryPlain>;
    'Option<RawBabePreDigestSecondaryTo159>': Option<RawBabePreDigestSecondaryTo159>;
    'Option<RawBabePreDigestSecondaryVRF>': Option<RawBabePreDigestSecondaryVRF>;
    'Option<RawBabePreDigestTo159>': Option<RawBabePreDigestTo159>;
    'Option<RawOrigin>': Option<RawOrigin>;
    'Option<RawVRFOutput>': Option<RawVRFOutput>;
    'Option<ReadProof>': Option<ReadProof>;
    'Option<Reasons>': Option<Reasons>;
    'Option<Receipt>': Option<Receipt>;
    'Option<ReceiptDetails>': Option<ReceiptDetails>;
    'Option<ReceiptMetadata>': Option<ReceiptMetadata>;
    'Option<RecordDate>': Option<RecordDate>;
    'Option<RecordDateSpec>': Option<RecordDateSpec>;
    'Option<RecoveryConfig>': Option<RecoveryConfig>;
    'Option<RefCount>': Option<RefCount>;
    'Option<RefCountTo259>': Option<RefCountTo259>;
    'Option<ReferendumIndex>': Option<ReferendumIndex>;
    'Option<ReferendumInfo>': Option<ReferendumInfo>;
    'Option<ReferendumInfoFinished>': Option<ReferendumInfoFinished>;
    'Option<ReferendumInfoTo239>': Option<ReferendumInfoTo239>;
    'Option<ReferendumStatus>': Option<ReferendumStatus>;
    'Option<RegisteredParachainInfo>': Option<RegisteredParachainInfo>;
    'Option<RelayChainBlockNumber>': Option<RelayChainBlockNumber>;
    'Option<RelayedFrom>': Option<RelayedFrom>;
    'Option<RelayTo>': Option<RelayTo>;
    'Option<Releases>': Option<Releases>;
    'Option<Remark>': Option<Remark>;
    'Option<Renouncing>': Option<Renouncing>;
    'Option<ReportedRoundStates>': Option<ReportedRoundStates>;
    'Option<Reporter>': Option<Reporter>;
    'Option<ReportIdOf>': Option<ReportIdOf>;
    'Option<ReserveAssetDeposit>': Option<ReserveAssetDeposit>;
    'Option<RestrictionResult>': Option<RestrictionResult>;
    'Option<Retriable>': Option<Retriable>;
    'Option<RoundState>': Option<RoundState>;
    'Option<RpcMethods>': Option<RpcMethods>;
    'Option<RuntimeDbWeight>': Option<RuntimeDbWeight>;
    'Option<RuntimeDispatchInfo>': Option<RuntimeDispatchInfo>;
    'Option<RuntimeVersion>': Option<RuntimeVersion>;
    'Option<RuntimeVersionApi>': Option<RuntimeVersionApi>;
    'Option<Schedule>': Option<Schedule>;
    'Option<Scheduled>': Option<Scheduled>;
    'Option<ScheduledTo254>': Option<ScheduledTo254>;
    'Option<ScheduleId>': Option<ScheduleId>;
    'Option<SchedulePeriod>': Option<SchedulePeriod>;
    'Option<SchedulePriority>': Option<SchedulePriority>;
    'Option<ScheduleSpec>': Option<ScheduleSpec>;
    'Option<ScheduleTo212>': Option<ScheduleTo212>;
    'Option<ScheduleTo258>': Option<ScheduleTo258>;
    'Option<Scheduling>': Option<Scheduling>;
    'Option<Scope>': Option<Scope>;
    'Option<ScopeId>': Option<ScopeId>;
    'Option<Seal>': Option<Seal>;
    'Option<SealV0>': Option<SealV0>;
    'Option<SecondaryKey>': Option<SecondaryKey>;
    'Option<SecondaryKeyWithAuth>': Option<SecondaryKeyWithAuth>;
    'Option<SecurityToken>': Option<SecurityToken>;
    'Option<SeedOf>': Option<SeedOf>;
    'Option<SessionIndex>': Option<SessionIndex>;
    'Option<SessionInfo>': Option<SessionInfo>;
    'Option<SessionInfoValidatorGroup>': Option<SessionInfoValidatorGroup>;
    'Option<SessionKeys1>': Option<SessionKeys1>;
    'Option<SessionKeys2>': Option<SessionKeys2>;
    'Option<SessionKeys3>': Option<SessionKeys3>;
    'Option<SessionKeys4>': Option<SessionKeys4>;
    'Option<SessionKeys5>': Option<SessionKeys5>;
    'Option<SessionKeys6>': Option<SessionKeys6>;
    'Option<SessionKeys7>': Option<SessionKeys7>;
    'Option<SessionKeys8>': Option<SessionKeys8>;
    'Option<SessionKeys9>': Option<SessionKeys9>;
    'Option<SetId>': Option<SetId>;
    'Option<SetIndex>': Option<SetIndex>;
    'Option<SettlementType>': Option<SettlementType>;
    'Option<SiField>': Option<SiField>;
    'Option<Signatory>': Option<Signatory>;
    'Option<Signature>': Option<Signature>;
    'Option<SignedAvailabilityBitfield>': Option<SignedAvailabilityBitfield>;
    'Option<SignedAvailabilityBitfields>': Option<SignedAvailabilityBitfields>;
    'Option<SignedBlock>': Option<SignedBlock>;
    'Option<SignerPayload>': Option<SignerPayload>;
    'Option<SigningContext>': Option<SigningContext>;
    'Option<SiLookupTypeId>': Option<SiLookupTypeId>;
    'Option<SimpleTokenRecord>': Option<SimpleTokenRecord>;
    'Option<SiPath>': Option<SiPath>;
    'Option<SiType>': Option<SiType>;
    'Option<SiTypeDef>': Option<SiTypeDef>;
    'Option<SiTypeDefArray>': Option<SiTypeDefArray>;
    'Option<SiTypeDefComposite>': Option<SiTypeDefComposite>;
    'Option<SiTypeDefPrimitive>': Option<SiTypeDefPrimitive>;
    'Option<SiTypeDefSequence>': Option<SiTypeDefSequence>;
    'Option<SiTypeDefTuple>': Option<SiTypeDefTuple>;
    'Option<SiTypeDefVariant>': Option<SiTypeDefVariant>;
    'Option<SiVariant>': Option<SiVariant>;
    'Option<SkippedCount>': Option<SkippedCount>;
    'Option<SlashingSwitch>': Option<SlashingSwitch>;
    'Option<SlotNumber>': Option<SlotNumber>;
    'Option<SlotRange>': Option<SlotRange>;
    'Option<SmartExtension>': Option<SmartExtension>;
    'Option<SmartExtensionName>': Option<SmartExtensionName>;
    'Option<SmartExtensionType>': Option<SmartExtensionType>;
    'Option<SnapshotId>': Option<SnapshotId>;
    'Option<SnapshotMetadata>': Option<SnapshotMetadata>;
    'Option<SnapshotResult>': Option<SnapshotResult>;
    'Option<SnapshottedPip>': Option<SnapshottedPip>;
    'Option<SocietyJudgement>': Option<SocietyJudgement>;
    'Option<SocietyVote>': Option<SocietyVote>;
    'Option<Sr25519Signature>': Option<Sr25519Signature>;
    'Option<Statement>': Option<Statement>;
    'Option<StatementKind>': Option<StatementKind>;
    'Option<StorageChangeSet>': Option<StorageChangeSet>;
    'Option<StorageData>': Option<StorageData>;
    'Option<StorageEntryMetadataLatest>': Option<StorageEntryMetadataLatest>;
    'Option<StorageEntryMetadataV10>': Option<StorageEntryMetadataV10>;
    'Option<StorageEntryMetadataV11>': Option<StorageEntryMetadataV11>;
    'Option<StorageEntryMetadataV12>': Option<StorageEntryMetadataV12>;
    'Option<StorageEntryMetadataV9>': Option<StorageEntryMetadataV9>;
    'Option<StorageEntryModifierLatest>': Option<StorageEntryModifierLatest>;
    'Option<StorageEntryModifierV10>': Option<StorageEntryModifierV10>;
    'Option<StorageEntryModifierV11>': Option<StorageEntryModifierV11>;
    'Option<StorageEntryModifierV12>': Option<StorageEntryModifierV12>;
    'Option<StorageEntryModifierV9>': Option<StorageEntryModifierV9>;
    'Option<StorageEntryTypeLatest>': Option<StorageEntryTypeLatest>;
    'Option<StorageEntryTypeV10>': Option<StorageEntryTypeV10>;
    'Option<StorageEntryTypeV11>': Option<StorageEntryTypeV11>;
    'Option<StorageEntryTypeV12>': Option<StorageEntryTypeV12>;
    'Option<StorageEntryTypeV9>': Option<StorageEntryTypeV9>;
    'Option<StorageHasher>': Option<StorageHasher>;
    'Option<StorageHasherV10>': Option<StorageHasherV10>;
    'Option<StorageHasherV11>': Option<StorageHasherV11>;
    'Option<StorageHasherV12>': Option<StorageHasherV12>;
    'Option<StorageHasherV9>': Option<StorageHasherV9>;
    'Option<StorageKey>': Option<StorageKey>;
    'Option<StorageKind>': Option<StorageKind>;
    'Option<StorageMetadataLatest>': Option<StorageMetadataLatest>;
    'Option<StorageMetadataV10>': Option<StorageMetadataV10>;
    'Option<StorageMetadataV11>': Option<StorageMetadataV11>;
    'Option<StorageMetadataV12>': Option<StorageMetadataV12>;
    'Option<StorageMetadataV9>': Option<StorageMetadataV9>;
    'Option<StoredPendingChange>': Option<StoredPendingChange>;
    'Option<StoredSchedule>': Option<StoredSchedule>;
    'Option<StoredState>': Option<StoredState>;
    'Option<StrikeCount>': Option<StrikeCount>;
    'Option<SubId>': Option<SubId>;
    'Option<SyncState>': Option<SyncState>;
    'Option<SystemOrigin>': Option<SystemOrigin>;
    'Option<Tally>': Option<Tally>;
    'Option<TargetIdAuthorization>': Option<TargetIdAuthorization>;
    'Option<TargetIdentities>': Option<TargetIdentities>;
    'Option<TargetIdentity>': Option<TargetIdentity>;
    'Option<TargetTreatment>': Option<TargetTreatment>;
    'Option<TaskAddress>': Option<TaskAddress>;
    'Option<TAssetBalance>': Option<TAssetBalance>;
    'Option<TAssetDepositBalance>': Option<TAssetDepositBalance>;
    'Option<Tax>': Option<Tax>;
    'Option<TeleportAsset>': Option<TeleportAsset>;
    'Option<TemplateDetails>': Option<TemplateDetails>;
    'Option<TemplateMetadata>': Option<TemplateMetadata>;
    'Option<Text>': Option<Text>;
    'Option<Ticker>': Option<Ticker>;
    'Option<TickerRangeProof>': Option<TickerRangeProof>;
    'Option<TickerRegistration>': Option<TickerRegistration>;
    'Option<TickerRegistrationConfig>': Option<TickerRegistrationConfig>;
    'Option<TickerTransferApproval>': Option<TickerTransferApproval>;
    'Option<Timepoint>': Option<Timepoint>;
    'Option<TombstoneContractInfo>': Option<TombstoneContractInfo>;
    'Option<Transact>': Option<Transact>;
    'Option<TransactionPriority>': Option<TransactionPriority>;
    'Option<TransactionValidityError>': Option<TransactionValidityError>;
    'Option<TransferManager>': Option<TransferManager>;
    'Option<TransientValidationData>': Option<TransientValidationData>;
    'Option<TreasuryProposal>': Option<TreasuryProposal>;
    'Option<TrieId>': Option<TrieId>;
    'Option<TrustedFor>': Option<TrustedFor>;
    'Option<TrustedIssuer>': Option<TrustedIssuer>;
    'Option<Type>': Option<Type>;
    'Option<u128>': Option<u128>;
    'Option<U128>': Option<U128>;
    'Option<u16>': Option<u16>;
    'Option<U16>': Option<U16>;
    'Option<u256>': Option<u256>;
    'Option<U256>': Option<U256>;
    'Option<u32>': Option<u32>;
    'Option<U32>': Option<U32>;
    'Option<U32F32>': Option<U32F32>;
    'Option<u64>': Option<u64>;
    'Option<U64>': Option<U64>;
    'Option<u8>': Option<u8>;
    'Option<U8>': Option<U8>;
    'Option<UncleEntryItem>': Option<UncleEntryItem>;
    'Option<UniqueCall>': Option<UniqueCall>;
    'Option<UnknownTransaction>': Option<UnknownTransaction>;
    'Option<UpwardMessage>': Option<UpwardMessage>;
    'Option<Url>': Option<Url>;
    'Option<usize>': Option<usize>;
    'Option<USize>': Option<USize>;
    'Option<ValidationCode>': Option<ValidationCode>;
    'Option<ValidationData>': Option<ValidationData>;
    'Option<ValidationDataType>': Option<ValidationDataType>;
    'Option<ValidationFunctionParams>': Option<ValidationFunctionParams>;
    'Option<ValidatorCount>': Option<ValidatorCount>;
    'Option<ValidatorId>': Option<ValidatorId>;
    'Option<ValidatorIdOf>': Option<ValidatorIdOf>;
    'Option<ValidatorSignature>': Option<ValidatorSignature>;
    'Option<ValidityAttestation>': Option<ValidityAttestation>;
    'Option<Venue>': Option<Venue>;
    'Option<VenueDetails>': Option<VenueDetails>;
    'Option<VenueType>': Option<VenueType>;
    'Option<Version>': Option<Version>;
    'Option<VersionedMultiAsset>': Option<VersionedMultiAsset>;
    'Option<VersionedMultiLocation>': Option<VersionedMultiLocation>;
    'Option<VersionedXcm>': Option<VersionedXcm>;
    'Option<VestingInfo>': Option<VestingInfo>;
    'Option<VestingSchedule>': Option<VestingSchedule>;
    'Option<Vote>': Option<Vote>;
    'Option<VoteByPip>': Option<VoteByPip>;
    'Option<VoteCount>': Option<VoteCount>;
    'Option<VoteCountProposalFound>': Option<VoteCountProposalFound>;
    'Option<VoteIndex>': Option<VoteIndex>;
    'Option<VoterInfo>': Option<VoterInfo>;
    'Option<Votes>': Option<Votes>;
    'Option<VotesTo230>': Option<VotesTo230>;
    'Option<VoteThreshold>': Option<VoteThreshold>;
    'Option<Voting>': Option<Voting>;
    'Option<VotingDelegating>': Option<VotingDelegating>;
    'Option<VotingDirect>': Option<VotingDirect>;
    'Option<VotingDirectVote>': Option<VotingDirectVote>;
    'Option<VotingResult>': Option<VotingResult>;
    'Option<VouchingStatus>': Option<VouchingStatus>;
    'Option<VrfData>': Option<VrfData>;
    'Option<VrfOutput>': Option<VrfOutput>;
    'Option<VrfProof>': Option<VrfProof>;
    'Option<Weight>': Option<Weight>;
    'Option<WeightMultiplier>': Option<WeightMultiplier>;
    'Option<WeightPerClass>': Option<WeightPerClass>;
    'Option<WeightToFeeCoefficient>': Option<WeightToFeeCoefficient>;
    'Option<WinnersData>': Option<WinnersData>;
    'Option<WinnersDataTuple>': Option<WinnersDataTuple>;
    'Option<WinningData>': Option<WinningData>;
    'Option<WinningDataEntry>': Option<WinningDataEntry>;
    'Option<WithdrawAsset>': Option<WithdrawAsset>;
    'Option<WithdrawReasons>': Option<WithdrawReasons>;
    'Option<Xcm>': Option<Xcm>;
    'Option<XcmError>': Option<XcmError>;
    'Option<XcmResult>': Option<XcmResult>;
    'Vec<AbridgedCandidateReceipt>': Vec<AbridgedCandidateReceipt>;
    'Vec<AbridgedHostConfiguration>': Vec<AbridgedHostConfiguration>;
    'Vec<AbridgedHrmpChannel>': Vec<AbridgedHrmpChannel>;
    'Vec<AbstractFungible>': Vec<AbstractFungible>;
    'Vec<AbstractNonFungible>': Vec<AbstractNonFungible>;
    'Vec<AccountData>': Vec<AccountData>;
    'Vec<AccountId>': Vec<AccountId>;
    'Vec<AccountId32Junction>': Vec<AccountId32Junction>;
    'Vec<AccountIdOf>': Vec<AccountIdOf>;
    'Vec<AccountIndex>': Vec<AccountIndex>;
    'Vec<AccountIndex64Junction>': Vec<AccountIndex64Junction>;
    'Vec<AccountInfo>': Vec<AccountInfo>;
    'Vec<AccountInfoWithProviders>': Vec<AccountInfoWithProviders>;
    'Vec<AccountInfoWithRefCount>': Vec<AccountInfoWithRefCount>;
    'Vec<AccountKey20Junction>': Vec<AccountKey20Junction>;
    'Vec<AccountStatus>': Vec<AccountStatus>;
    'Vec<AccountValidity>': Vec<AccountValidity>;
    'Vec<AccountVote>': Vec<AccountVote>;
    'Vec<AccountVoteSplit>': Vec<AccountVoteSplit>;
    'Vec<AccountVoteStandard>': Vec<AccountVoteStandard>;
    'Vec<ActiveRecovery>': Vec<ActiveRecovery>;
    'Vec<Address>': Vec<Address>;
    'Vec<AffirmationStatus>': Vec<AffirmationStatus>;
    'Vec<AliveContractInfo>': Vec<AliveContractInfo>;
    'Vec<AllowedSlots>': Vec<AllowedSlots>;
    'Vec<AnySignature>': Vec<AnySignature>;
    'Vec<ApiId>': Vec<ApiId>;
    'Vec<ApplyExtrinsicResult>': Vec<ApplyExtrinsicResult>;
    'Vec<ApprovalFlag>': Vec<ApprovalFlag>;
    'Vec<Approvals>': Vec<Approvals>;
    'Vec<AssetBalance>': Vec<AssetBalance>;
    'Vec<AssetCompliance>': Vec<AssetCompliance>;
    'Vec<AssetComplianceResult>': Vec<AssetComplianceResult>;
    'Vec<AssetDetails>': Vec<AssetDetails>;
    'Vec<AssetDidResult>': Vec<AssetDidResult>;
    'Vec<AssetId>': Vec<AssetId>;
    'Vec<AssetIdentifier>': Vec<AssetIdentifier>;
    'Vec<AssetInstance>': Vec<AssetInstance>;
    'Vec<AssetMigrationError>': Vec<AssetMigrationError>;
    'Vec<AssetName>': Vec<AssetName>;
    'Vec<AssetOptions>': Vec<AssetOptions>;
    'Vec<AssetOwnershipRelation>': Vec<AssetOwnershipRelation>;
    'Vec<AssetType>': Vec<AssetType>;
    'Vec<AssignmentId>': Vec<AssignmentId>;
    'Vec<AssignmentKind>': Vec<AssignmentKind>;
    'Vec<AttestedCandidate>': Vec<AttestedCandidate>;
    'Vec<AuctionIndex>': Vec<AuctionIndex>;
    'Vec<AuthIdentifier>': Vec<AuthIdentifier>;
    'Vec<AuthIndex>': Vec<AuthIndex>;
    'Vec<AuthorityDiscoveryId>': Vec<AuthorityDiscoveryId>;
    'Vec<AuthorityId>': Vec<AuthorityId>;
    'Vec<AuthorityIndex>': Vec<AuthorityIndex>;
    'Vec<AuthorityList>': Vec<AuthorityList>;
    'Vec<AuthoritySignature>': Vec<AuthoritySignature>;
    'Vec<AuthorityWeight>': Vec<AuthorityWeight>;
    'Vec<Authorization>': Vec<Authorization>;
    'Vec<AuthorizationData>': Vec<AuthorizationData>;
    'Vec<AuthorizationNonce>': Vec<AuthorizationNonce>;
    'Vec<AuthorizationType>': Vec<AuthorizationType>;
    'Vec<AvailabilityBitfield>': Vec<AvailabilityBitfield>;
    'Vec<AvailabilityBitfieldRecord>': Vec<AvailabilityBitfieldRecord>;
    'Vec<BabeAuthorityWeight>': Vec<BabeAuthorityWeight>;
    'Vec<BabeBlockWeight>': Vec<BabeBlockWeight>;
    'Vec<BabeEquivocationProof>': Vec<BabeEquivocationProof>;
    'Vec<BabeWeight>': Vec<BabeWeight>;
    'Vec<BackedCandidate>': Vec<BackedCandidate>;
    'Vec<Balance>': Vec<Balance>;
    'Vec<BalanceLock>': Vec<BalanceLock>;
    'Vec<BalanceLockTo212>': Vec<BalanceLockTo212>;
    'Vec<BalanceOf>': Vec<BalanceOf>;
    'Vec<Balances>': Vec<Balances>;
    'Vec<BalanceStatus>': Vec<BalanceStatus>;
    'Vec<BallotMeta>': Vec<BallotMeta>;
    'Vec<BallotTimeRange>': Vec<BallotTimeRange>;
    'Vec<BallotTitle>': Vec<BallotTitle>;
    'Vec<BallotVote>': Vec<BallotVote>;
    'Vec<BatchAddClaimItem>': Vec<BatchAddClaimItem>;
    'Vec<BatchRevokeClaimItem>': Vec<BatchRevokeClaimItem>;
    'Vec<Beneficiary>': Vec<Beneficiary>;
    'Vec<Bid>': Vec<Bid>;
    'Vec<Bidder>': Vec<Bidder>;
    'Vec<BidKind>': Vec<BidKind>;
    'Vec<BitVec>': Vec<BitVec>;
    'Vec<Block>': Vec<Block>;
    'Vec<BlockAttestations>': Vec<BlockAttestations>;
    'Vec<BlockHash>': Vec<BlockHash>;
    'Vec<BlockNumber>': Vec<BlockNumber>;
    'Vec<BlockWeights>': Vec<BlockWeights>;
    'Vec<bool>': Vec<bool>;
    'Vec<Bool>': Vec<Bool>;
    'Vec<Bounty>': Vec<Bounty>;
    'Vec<BountyIndex>': Vec<BountyIndex>;
    'Vec<BountyStatus>': Vec<BountyStatus>;
    'Vec<BountyStatusActive>': Vec<BountyStatusActive>;
    'Vec<BountyStatusCuratorProposed>': Vec<BountyStatusCuratorProposed>;
    'Vec<BountyStatusPendingPayout>': Vec<BountyStatusPendingPayout>;
    'Vec<BridgeTx>': Vec<BridgeTx>;
    'Vec<BridgeTxDetail>': Vec<BridgeTxDetail>;
    'Vec<BridgeTxStatus>': Vec<BridgeTxStatus>;
    'Vec<BufferedSessionChange>': Vec<BufferedSessionChange>;
    'Vec<Bytes>': Vec<Bytes>;
    'Vec<CACheckpoint>': Vec<CACheckpoint>;
    'Vec<CADetails>': Vec<CADetails>;
    'Vec<CAId>': Vec<CAId>;
    'Vec<CAKind>': Vec<CAKind>;
    'Vec<CalendarPeriod>': Vec<CalendarPeriod>;
    'Vec<CalendarUnit>': Vec<CalendarUnit>;
    'Vec<Call>': Vec<Call>;
    'Vec<CallHash>': Vec<CallHash>;
    'Vec<CallHashOf>': Vec<CallHashOf>;
    'Vec<CallIndex>': Vec<CallIndex>;
    'Vec<CandidateCommitments>': Vec<CandidateCommitments>;
    'Vec<CandidateDescriptor>': Vec<CandidateDescriptor>;
    'Vec<CandidateHash>': Vec<CandidateHash>;
    'Vec<CandidatePendingAvailability>': Vec<CandidatePendingAvailability>;
    'Vec<CandidateReceipt>': Vec<CandidateReceipt>;
    'Vec<CanTransferResult>': Vec<CanTransferResult>;
    'Vec<CappedFee>': Vec<CappedFee>;
    'Vec<CddId>': Vec<CddId>;
    'Vec<CddStatus>': Vec<CddStatus>;
    'Vec<ChainProperties>': Vec<ChainProperties>;
    'Vec<ChainType>': Vec<ChainType>;
    'Vec<ChangesTrieConfiguration>': Vec<ChangesTrieConfiguration>;
    'Vec<CheckpointId>': Vec<CheckpointId>;
    'Vec<CheckpointSchedule>': Vec<CheckpointSchedule>;
    'Vec<ChoiceTitle>': Vec<ChoiceTitle>;
    'Vec<Claim>': Vec<Claim>;
    'Vec<Claim1stKey>': Vec<Claim1stKey>;
    'Vec<Claim2ndKey>': Vec<Claim2ndKey>;
    'Vec<ClaimType>': Vec<ClaimType>;
    'Vec<ClassicTickerImport>': Vec<ClassicTickerImport>;
    'Vec<ClassicTickerRegistration>': Vec<ClassicTickerRegistration>;
    'Vec<CodeHash>': Vec<CodeHash>;
    'Vec<CollatorId>': Vec<CollatorId>;
    'Vec<CollatorSignature>': Vec<CollatorSignature>;
    'Vec<CollectiveOrigin>': Vec<CollectiveOrigin>;
    'Vec<CommittedCandidateReceipt>': Vec<CommittedCandidateReceipt>;
    'Vec<Committee>': Vec<Committee>;
    'Vec<ComplianceRequirement>': Vec<ComplianceRequirement>;
    'Vec<ComplianceRequirementResult>': Vec<ComplianceRequirementResult>;
    'Vec<ConcreteFungible>': Vec<ConcreteFungible>;
    'Vec<ConcreteNonFungible>': Vec<ConcreteNonFungible>;
    'Vec<Condition>': Vec<Condition>;
    'Vec<ConditionResult>': Vec<ConditionResult>;
    'Vec<ConditionType>': Vec<ConditionType>;
    'Vec<Consensus>': Vec<Consensus>;
    'Vec<ConsensusEngineId>': Vec<ConsensusEngineId>;
    'Vec<ConsumedWeight>': Vec<ConsumedWeight>;
    'Vec<ContractCallRequest>': Vec<ContractCallRequest>;
    'Vec<ContractConstructorSpec>': Vec<ContractConstructorSpec>;
    'Vec<ContractContractSpec>': Vec<ContractContractSpec>;
    'Vec<ContractCryptoHasher>': Vec<ContractCryptoHasher>;
    'Vec<ContractDiscriminant>': Vec<ContractDiscriminant>;
    'Vec<ContractDisplayName>': Vec<ContractDisplayName>;
    'Vec<ContractEventParamSpec>': Vec<ContractEventParamSpec>;
    'Vec<ContractEventSpec>': Vec<ContractEventSpec>;
    'Vec<ContractExecResult>': Vec<ContractExecResult>;
    'Vec<ContractExecResultErr>': Vec<ContractExecResultErr>;
    'Vec<ContractExecResultErrModule>': Vec<ContractExecResultErrModule>;
    'Vec<ContractExecResultOk>': Vec<ContractExecResultOk>;
    'Vec<ContractExecResultResult>': Vec<ContractExecResultResult>;
    'Vec<ContractExecResultSuccessTo255>': Vec<ContractExecResultSuccessTo255>;
    'Vec<ContractExecResultSuccessTo260>': Vec<ContractExecResultSuccessTo260>;
    'Vec<ContractExecResultTo255>': Vec<ContractExecResultTo255>;
    'Vec<ContractExecResultTo260>': Vec<ContractExecResultTo260>;
    'Vec<ContractInfo>': Vec<ContractInfo>;
    'Vec<ContractLayoutArray>': Vec<ContractLayoutArray>;
    'Vec<ContractLayoutCell>': Vec<ContractLayoutCell>;
    'Vec<ContractLayoutEnum>': Vec<ContractLayoutEnum>;
    'Vec<ContractLayoutHash>': Vec<ContractLayoutHash>;
    'Vec<ContractLayoutHashingStrategy>': Vec<ContractLayoutHashingStrategy>;
    'Vec<ContractLayoutKey>': Vec<ContractLayoutKey>;
    'Vec<ContractLayoutStruct>': Vec<ContractLayoutStruct>;
    'Vec<ContractLayoutStructField>': Vec<ContractLayoutStructField>;
    'Vec<ContractMessageParamSpec>': Vec<ContractMessageParamSpec>;
    'Vec<ContractMessageSpec>': Vec<ContractMessageSpec>;
    'Vec<ContractProject>': Vec<ContractProject>;
    'Vec<ContractProjectContract>': Vec<ContractProjectContract>;
    'Vec<ContractProjectSource>': Vec<ContractProjectSource>;
    'Vec<ContractSelector>': Vec<ContractSelector>;
    'Vec<ContractStorageKey>': Vec<ContractStorageKey>;
    'Vec<ContractStorageLayout>': Vec<ContractStorageLayout>;
    'Vec<ContractTypeSpec>': Vec<ContractTypeSpec>;
    'Vec<Conviction>': Vec<Conviction>;
    'Vec<CoreAssignment>': Vec<CoreAssignment>;
    'Vec<CoreIndex>': Vec<CoreIndex>;
    'Vec<CoreOccupied>': Vec<CoreOccupied>;
    'Vec<CorporateAction>': Vec<CorporateAction>;
    'Vec<Counter>': Vec<Counter>;
    'Vec<CountryCode>': Vec<CountryCode>;
    'Vec<CreatedBlock>': Vec<CreatedBlock>;
    'Vec<Data>': Vec<Data>;
    'Vec<DeferredOffenceOf>': Vec<DeferredOffenceOf>;
    'Vec<DefunctVoter>': Vec<DefunctVoter>;
    'Vec<Delegations>': Vec<Delegations>;
    'Vec<DeletedContract>': Vec<DeletedContract>;
    'Vec<DeployData>': Vec<DeployData>;
    'Vec<DepositAsset>': Vec<DepositAsset>;
    'Vec<DepositInfo>': Vec<DepositInfo>;
    'Vec<DepositReserveAsset>': Vec<DepositReserveAsset>;
    'Vec<DidRecord>': Vec<DidRecord>;
    'Vec<DidRecords>': Vec<DidRecords>;
    'Vec<DidRecordsSuccess>': Vec<DidRecordsSuccess>;
    'Vec<DidStatus>': Vec<DidStatus>;
    'Vec<Digest>': Vec<Digest>;
    'Vec<DigestItem>': Vec<DigestItem>;
    'Vec<DigestOf>': Vec<DigestOf>;
    'Vec<DispatchableName>': Vec<DispatchableName>;
    'Vec<DispatchClass>': Vec<DispatchClass>;
    'Vec<DispatchError>': Vec<DispatchError>;
    'Vec<DispatchErrorModule>': Vec<DispatchErrorModule>;
    'Vec<DispatchErrorTo198>': Vec<DispatchErrorTo198>;
    'Vec<DispatchInfo>': Vec<DispatchInfo>;
    'Vec<DispatchInfoTo190>': Vec<DispatchInfoTo190>;
    'Vec<DispatchInfoTo244>': Vec<DispatchInfoTo244>;
    'Vec<DispatchOutcome>': Vec<DispatchOutcome>;
    'Vec<DispatchResult>': Vec<DispatchResult>;
    'Vec<DispatchResultOf>': Vec<DispatchResultOf>;
    'Vec<DispatchResultTo198>': Vec<DispatchResultTo198>;
    'Vec<Distribution>': Vec<Distribution>;
    'Vec<Document>': Vec<Document>;
    'Vec<DocumentHash>': Vec<DocumentHash>;
    'Vec<DocumentId>': Vec<DocumentId>;
    'Vec<DocumentName>': Vec<DocumentName>;
    'Vec<DocumentType>': Vec<DocumentType>;
    'Vec<DocumentUri>': Vec<DocumentUri>;
    'Vec<DoNotConstruct>': Vec<DoNotConstruct>;
    'Vec<DoubleMapTypeLatest>': Vec<DoubleMapTypeLatest>;
    'Vec<DoubleMapTypeV10>': Vec<DoubleMapTypeV10>;
    'Vec<DoubleMapTypeV11>': Vec<DoubleMapTypeV11>;
    'Vec<DoubleMapTypeV12>': Vec<DoubleMapTypeV12>;
    'Vec<DoubleMapTypeV9>': Vec<DoubleMapTypeV9>;
    'Vec<DoubleVoteReport>': Vec<DoubleVoteReport>;
    'Vec<DownwardMessage>': Vec<DownwardMessage>;
    'Vec<EcdsaSignature>': Vec<EcdsaSignature>;
    'Vec<Ed25519Signature>': Vec<Ed25519Signature>;
    'Vec<EncodedFinalityProofs>': Vec<EncodedFinalityProofs>;
    'Vec<EpochAuthorship>': Vec<EpochAuthorship>;
    'Vec<ErrorMetadataLatest>': Vec<ErrorMetadataLatest>;
    'Vec<ErrorMetadataV10>': Vec<ErrorMetadataV10>;
    'Vec<ErrorMetadataV11>': Vec<ErrorMetadataV11>;
    'Vec<ErrorMetadataV12>': Vec<ErrorMetadataV12>;
    'Vec<ErrorMetadataV9>': Vec<ErrorMetadataV9>;
    'Vec<EthAccount>': Vec<EthAccount>;
    'Vec<EthBlock>': Vec<EthBlock>;
    'Vec<EthBloom>': Vec<EthBloom>;
    'Vec<EthCallRequest>': Vec<EthCallRequest>;
    'Vec<EthereumAccountId>': Vec<EthereumAccountId>;
    'Vec<EthereumAddress>': Vec<EthereumAddress>;
    'Vec<EthereumLookupSource>': Vec<EthereumLookupSource>;
    'Vec<EthereumSignature>': Vec<EthereumSignature>;
    'Vec<EthFilter>': Vec<EthFilter>;
    'Vec<EthFilterAddress>': Vec<EthFilterAddress>;
    'Vec<EthFilterTopic>': Vec<EthFilterTopic>;
    'Vec<EthFilterTopicEntry>': Vec<EthFilterTopicEntry>;
    'Vec<EthFilterTopicInner>': Vec<EthFilterTopicInner>;
    'Vec<EthHeader>': Vec<EthHeader>;
    'Vec<EthLog>': Vec<EthLog>;
    'Vec<EthReceipt>': Vec<EthReceipt>;
    'Vec<EthRichBlock>': Vec<EthRichBlock>;
    'Vec<EthRichHeader>': Vec<EthRichHeader>;
    'Vec<EthStorageProof>': Vec<EthStorageProof>;
    'Vec<EthSubKind>': Vec<EthSubKind>;
    'Vec<EthSubParams>': Vec<EthSubParams>;
    'Vec<EthSubResult>': Vec<EthSubResult>;
    'Vec<EthSyncInfo>': Vec<EthSyncInfo>;
    'Vec<EthSyncStatus>': Vec<EthSyncStatus>;
    'Vec<EthTransaction>': Vec<EthTransaction>;
    'Vec<EthTransactionAction>': Vec<EthTransactionAction>;
    'Vec<EthTransactionCondition>': Vec<EthTransactionCondition>;
    'Vec<EthTransactionRequest>': Vec<EthTransactionRequest>;
    'Vec<EthTransactionStatus>': Vec<EthTransactionStatus>;
    'Vec<EthWork>': Vec<EthWork>;
    'Vec<Event>': Vec<Event>;
    'Vec<EventDid>': Vec<EventDid>;
    'Vec<EventId>': Vec<EventId>;
    'Vec<EventIndex>': Vec<EventIndex>;
    'Vec<EventMetadataLatest>': Vec<EventMetadataLatest>;
    'Vec<EventMetadataV10>': Vec<EventMetadataV10>;
    'Vec<EventMetadataV11>': Vec<EventMetadataV11>;
    'Vec<EventMetadataV12>': Vec<EventMetadataV12>;
    'Vec<EventMetadataV9>': Vec<EventMetadataV9>;
    'Vec<EventRecord>': Vec<EventRecord>;
    'Vec<EvmAccount>': Vec<EvmAccount>;
    'Vec<EvmLog>': Vec<EvmLog>;
    'Vec<EvmVicinity>': Vec<EvmVicinity>;
    'Vec<ExchangeAsset>': Vec<ExchangeAsset>;
    'Vec<ExitError>': Vec<ExitError>;
    'Vec<ExitFatal>': Vec<ExitFatal>;
    'Vec<ExitReason>': Vec<ExitReason>;
    'Vec<ExitRevert>': Vec<ExitRevert>;
    'Vec<ExitSucceed>': Vec<ExitSucceed>;
    'Vec<ExtensionAttributes>': Vec<ExtensionAttributes>;
    'Vec<Extrinsic>': Vec<Extrinsic>;
    'Vec<ExtrinsicEra>': Vec<ExtrinsicEra>;
    'Vec<ExtrinsicMetadataLatest>': Vec<ExtrinsicMetadataLatest>;
    'Vec<ExtrinsicMetadataV11>': Vec<ExtrinsicMetadataV11>;
    'Vec<ExtrinsicMetadataV12>': Vec<ExtrinsicMetadataV12>;
    'Vec<ExtrinsicOrHash>': Vec<ExtrinsicOrHash>;
    'Vec<ExtrinsicPayload>': Vec<ExtrinsicPayload>;
    'Vec<ExtrinsicPayloadUnknown>': Vec<ExtrinsicPayloadUnknown>;
    'Vec<ExtrinsicPayloadV4>': Vec<ExtrinsicPayloadV4>;
    'Vec<ExtrinsicSignature>': Vec<ExtrinsicSignature>;
    'Vec<ExtrinsicSignatureV4>': Vec<ExtrinsicSignatureV4>;
    'Vec<ExtrinsicStatus>': Vec<ExtrinsicStatus>;
    'Vec<ExtrinsicsWeight>': Vec<ExtrinsicsWeight>;
    'Vec<ExtrinsicUnknown>': Vec<ExtrinsicUnknown>;
    'Vec<ExtrinsicV4>': Vec<ExtrinsicV4>;
    'Vec<ExtVersion>': Vec<ExtVersion>;
    'Vec<FeeOf>': Vec<FeeOf>;
    'Vec<Fixed128>': Vec<Fixed128>;
    'Vec<Fixed64>': Vec<Fixed64>;
    'Vec<FixedI128>': Vec<FixedI128>;
    'Vec<FixedI64>': Vec<FixedI64>;
    'Vec<FixedU128>': Vec<FixedU128>;
    'Vec<FixedU64>': Vec<FixedU64>;
    'Vec<FullIdentification>': Vec<FullIdentification>;
    'Vec<FunctionArgumentMetadataLatest>': Vec<FunctionArgumentMetadataLatest>;
    'Vec<FunctionArgumentMetadataV10>': Vec<FunctionArgumentMetadataV10>;
    'Vec<FunctionArgumentMetadataV11>': Vec<FunctionArgumentMetadataV11>;
    'Vec<FunctionArgumentMetadataV12>': Vec<FunctionArgumentMetadataV12>;
    'Vec<FunctionArgumentMetadataV9>': Vec<FunctionArgumentMetadataV9>;
    'Vec<FunctionMetadataLatest>': Vec<FunctionMetadataLatest>;
    'Vec<FunctionMetadataV10>': Vec<FunctionMetadataV10>;
    'Vec<FunctionMetadataV11>': Vec<FunctionMetadataV11>;
    'Vec<FunctionMetadataV12>': Vec<FunctionMetadataV12>;
    'Vec<FunctionMetadataV9>': Vec<FunctionMetadataV9>;
    'Vec<FundIndex>': Vec<FundIndex>;
    'Vec<FundInfo>': Vec<FundInfo>;
    'Vec<FundingRoundName>': Vec<FundingRoundName>;
    'Vec<Fundraiser>': Vec<Fundraiser>;
    'Vec<FundraiserName>': Vec<FundraiserName>;
    'Vec<FundraiserStatus>': Vec<FundraiserStatus>;
    'Vec<FundraiserTier>': Vec<FundraiserTier>;
    'Vec<Gas>': Vec<Gas>;
    'Vec<GetPortfolioAssetsResult>': Vec<GetPortfolioAssetsResult>;
    'Vec<GetPortfoliosResult>': Vec<GetPortfoliosResult>;
    'Vec<GlobalValidationSchedule>': Vec<GlobalValidationSchedule>;
    'Vec<GrandpaEquivocation>': Vec<GrandpaEquivocation>;
    'Vec<GrandpaEquivocationProof>': Vec<GrandpaEquivocationProof>;
    'Vec<GrandpaEquivocationValue>': Vec<GrandpaEquivocationValue>;
    'Vec<GrandpaPrevote>': Vec<GrandpaPrevote>;
    'Vec<GroupIndex>': Vec<GroupIndex>;
    'Vec<H1024>': Vec<H1024>;
    'Vec<H128>': Vec<H128>;
    'Vec<H160>': Vec<H160>;
    'Vec<H2048>': Vec<H2048>;
    'Vec<H256>': Vec<H256>;
    'Vec<H512>': Vec<H512>;
    'Vec<H64>': Vec<H64>;
    'Vec<HandledTxStatus>': Vec<HandledTxStatus>;
    'Vec<Hash>': Vec<Hash>;
    'Vec<HeadData>': Vec<HeadData>;
    'Vec<Header>': Vec<Header>;
    'Vec<Health>': Vec<Health>;
    'Vec<Heartbeat>': Vec<Heartbeat>;
    'Vec<HeartbeatTo244>': Vec<HeartbeatTo244>;
    'Vec<HistoricalVotingByAddress>': Vec<HistoricalVotingByAddress>;
    'Vec<HistoricalVotingById>': Vec<HistoricalVotingById>;
    'Vec<HostConfiguration>': Vec<HostConfiguration>;
    'Vec<HostFnWeights>': Vec<HostFnWeights>;
    'Vec<HrmpChannel>': Vec<HrmpChannel>;
    'Vec<HrmpChannelId>': Vec<HrmpChannelId>;
    'Vec<HrmpOpenChannelRequest>': Vec<HrmpOpenChannelRequest>;
    'Vec<i128>': Vec<i128>;
    'Vec<I128>': Vec<I128>;
    'Vec<i16>': Vec<i16>;
    'Vec<I16>': Vec<I16>;
    'Vec<i256>': Vec<i256>;
    'Vec<I256>': Vec<I256>;
    'Vec<i32>': Vec<i32>;
    'Vec<I32>': Vec<I32>;
    'Vec<I32F32>': Vec<I32F32>;
    'Vec<i64>': Vec<i64>;
    'Vec<I64>': Vec<I64>;
    'Vec<i8>': Vec<i8>;
    'Vec<I8>': Vec<I8>;
    'Vec<IdentificationTuple>': Vec<IdentificationTuple>;
    'Vec<IdentityClaim>': Vec<IdentityClaim>;
    'Vec<IdentityClaimKey>': Vec<IdentityClaimKey>;
    'Vec<IdentityId>': Vec<IdentityId>;
    'Vec<IdentityRole>': Vec<IdentityRole>;
    'Vec<ImmortalEra>': Vec<ImmortalEra>;
    'Vec<ImportedAux>': Vec<ImportedAux>;
    'Vec<InactiveMember>': Vec<InactiveMember>;
    'Vec<InboundDownwardMessage>': Vec<InboundDownwardMessage>;
    'Vec<InboundHrmpMessage>': Vec<InboundHrmpMessage>;
    'Vec<InboundHrmpMessages>': Vec<InboundHrmpMessages>;
    'Vec<IncludedBlocks>': Vec<IncludedBlocks>;
    'Vec<IncomingParachain>': Vec<IncomingParachain>;
    'Vec<IncomingParachainDeploy>': Vec<IncomingParachainDeploy>;
    'Vec<IncomingParachainFixed>': Vec<IncomingParachainFixed>;
    'Vec<Index>': Vec<Index>;
    'Vec<IndicesLookupSource>': Vec<IndicesLookupSource>;
    'Vec<InitiateReserveWithdraw>': Vec<InitiateReserveWithdraw>;
    'Vec<InitiateTeleport>': Vec<InitiateTeleport>;
    'Vec<Instruction>': Vec<Instruction>;
    'Vec<InstructionStatus>': Vec<InstructionStatus>;
    'Vec<InstructionWeights>': Vec<InstructionWeights>;
    'Vec<InvalidTransaction>': Vec<InvalidTransaction>;
    'Vec<InvestorUid>': Vec<InvestorUid>;
    'Vec<InvestorZKProofData>': Vec<InvestorZKProofData>;
    'Vec<IssueAssetItem>': Vec<IssueAssetItem>;
    'Vec<IssueRecipient>': Vec<IssueRecipient>;
    'Vec<Json>': Vec<Json>;
    'Vec<Junction>': Vec<Junction>;
    'Vec<Justification>': Vec<Justification>;
    'Vec<JustificationNotification>': Vec<JustificationNotification>;
    'Vec<Key>': Vec<Key>;
    'Vec<KeyIdentityData>': Vec<KeyIdentityData>;
    'Vec<KeyOwnerProof>': Vec<KeyOwnerProof>;
    'Vec<Keys>': Vec<Keys>;
    'Vec<KeyTypeId>': Vec<KeyTypeId>;
    'Vec<KeyValue>': Vec<KeyValue>;
    'Vec<KeyValueOption>': Vec<KeyValueOption>;
    'Vec<Kind>': Vec<Kind>;
    'Vec<LastContribution>': Vec<LastContribution>;
    'Vec<LastRuntimeUpgradeInfo>': Vec<LastRuntimeUpgradeInfo>;
    'Vec<LeasePeriod>': Vec<LeasePeriod>;
    'Vec<LeasePeriodOf>': Vec<LeasePeriodOf>;
    'Vec<Leg>': Vec<Leg>;
    'Vec<LegacyPalletPermissions>': Vec<LegacyPalletPermissions>;
    'Vec<LegacyPermissions>': Vec<LegacyPermissions>;
    'Vec<LegStatus>': Vec<LegStatus>;
    'Vec<Limits>': Vec<Limits>;
    'Vec<LocalCAId>': Vec<LocalCAId>;
    'Vec<LocalValidationData>': Vec<LocalValidationData>;
    'Vec<LockIdentifier>': Vec<LockIdentifier>;
    'Vec<LookupSource>': Vec<LookupSource>;
    'Vec<LookupTarget>': Vec<LookupTarget>;
    'Vec<LotteryConfig>': Vec<LotteryConfig>;
    'Vec<MapTypeLatest>': Vec<MapTypeLatest>;
    'Vec<MapTypeV10>': Vec<MapTypeV10>;
    'Vec<MapTypeV11>': Vec<MapTypeV11>;
    'Vec<MapTypeV12>': Vec<MapTypeV12>;
    'Vec<MapTypeV9>': Vec<MapTypeV9>;
    'Vec<MaybeBlock>': Vec<MaybeBlock>;
    'Vec<MaybeRandomness>': Vec<MaybeRandomness>;
    'Vec<MaybeVrf>': Vec<MaybeVrf>;
    'Vec<MemberCount>': Vec<MemberCount>;
    'Vec<MembershipProof>': Vec<MembershipProof>;
    'Vec<Memo>': Vec<Memo>;
    'Vec<MessageIngestionType>': Vec<MessageIngestionType>;
    'Vec<MetadataAll>': Vec<MetadataAll>;
    'Vec<MetadataLatest>': Vec<MetadataLatest>;
    'Vec<MetadataV10>': Vec<MetadataV10>;
    'Vec<MetadataV11>': Vec<MetadataV11>;
    'Vec<MetadataV12>': Vec<MetadataV12>;
    'Vec<MetadataV9>': Vec<MetadataV9>;
    'Vec<MetaDescription>': Vec<MetaDescription>;
    'Vec<MetaUrl>': Vec<MetaUrl>;
    'Vec<MetaVersion>': Vec<MetaVersion>;
    'Vec<MigrationError>': Vec<MigrationError>;
    'Vec<ModuleConstantMetadataLatest>': Vec<ModuleConstantMetadataLatest>;
    'Vec<ModuleConstantMetadataV10>': Vec<ModuleConstantMetadataV10>;
    'Vec<ModuleConstantMetadataV11>': Vec<ModuleConstantMetadataV11>;
    'Vec<ModuleConstantMetadataV12>': Vec<ModuleConstantMetadataV12>;
    'Vec<ModuleConstantMetadataV9>': Vec<ModuleConstantMetadataV9>;
    'Vec<ModuleId>': Vec<ModuleId>;
    'Vec<ModuleMetadataLatest>': Vec<ModuleMetadataLatest>;
    'Vec<ModuleMetadataV10>': Vec<ModuleMetadataV10>;
    'Vec<ModuleMetadataV11>': Vec<ModuleMetadataV11>;
    'Vec<ModuleMetadataV12>': Vec<ModuleMetadataV12>;
    'Vec<ModuleMetadataV9>': Vec<ModuleMetadataV9>;
    'Vec<Moment>': Vec<Moment>;
    'Vec<MoreAttestations>': Vec<MoreAttestations>;
    'Vec<MortalEra>': Vec<MortalEra>;
    'Vec<Motion>': Vec<Motion>;
    'Vec<MotionInfoLink>': Vec<MotionInfoLink>;
    'Vec<MotionTitle>': Vec<MotionTitle>;
    'Vec<MovePortfolioItem>': Vec<MovePortfolioItem>;
    'Vec<MultiAddress>': Vec<MultiAddress>;
    'Vec<MultiAsset>': Vec<MultiAsset>;
    'Vec<MultiLocation>': Vec<MultiLocation>;
    'Vec<Multiplier>': Vec<Multiplier>;
    'Vec<Multisig>': Vec<Multisig>;
    'Vec<MultiSignature>': Vec<MultiSignature>;
    'Vec<NetworkId>': Vec<NetworkId>;
    'Vec<NetworkState>': Vec<NetworkState>;
    'Vec<NetworkStatePeerset>': Vec<NetworkStatePeerset>;
    'Vec<NetworkStatePeersetInfo>': Vec<NetworkStatePeersetInfo>;
    'Vec<NewBidder>': Vec<NewBidder>;
    'Vec<NewBidderOption>': Vec<NewBidderOption>;
    'Vec<NextAuthority>': Vec<NextAuthority>;
    'Vec<NextConfigDescriptor>': Vec<NextConfigDescriptor>;
    'Vec<NextConfigDescriptorV1>': Vec<NextConfigDescriptorV1>;
    'Vec<NodeRole>': Vec<NodeRole>;
    'Vec<NotConnectedPeer>': Vec<NotConnectedPeer>;
    'Vec<Null>': Vec<Null>;
    'Vec<OffChainSignature>': Vec<OffChainSignature>;
    'Vec<OffenceDetails>': Vec<OffenceDetails>;
    'Vec<Offender>': Vec<Offender>;
    'Vec<OfflineSlashingParams>': Vec<OfflineSlashingParams>;
    'Vec<OpaqueCall>': Vec<OpaqueCall>;
    'Vec<OpaqueMultiaddr>': Vec<OpaqueMultiaddr>;
    'Vec<OpaqueNetworkState>': Vec<OpaqueNetworkState>;
    'Vec<OpaquePeerId>': Vec<OpaquePeerId>;
    'Vec<OpaqueTimeSlot>': Vec<OpaqueTimeSlot>;
    'Vec<OpenTip>': Vec<OpenTip>;
    'Vec<OpenTipFinderTo225>': Vec<OpenTipFinderTo225>;
    'Vec<OpenTipTip>': Vec<OpenTipTip>;
    'Vec<OpenTipTo225>': Vec<OpenTipTo225>;
    'Vec<Order>': Vec<Order>;
    'Vec<Origin>': Vec<Origin>;
    'Vec<OriginCaller>': Vec<OriginCaller>;
    'Vec<OriginKind>': Vec<OriginKind>;
    'Vec<OutboundHrmpMessage>': Vec<OutboundHrmpMessage>;
    'Vec<Owner>': Vec<Owner>;
    'Vec<PalletName>': Vec<PalletName>;
    'Vec<PalletPermissions>': Vec<PalletPermissions>;
    'Vec<PalletsOrigin>': Vec<PalletsOrigin>;
    'Vec<PalletVersion>': Vec<PalletVersion>;
    'Vec<ParachainDispatchOrigin>': Vec<ParachainDispatchOrigin>;
    'Vec<ParachainProposal>': Vec<ParachainProposal>;
    'Vec<ParaGenesisArgs>': Vec<ParaGenesisArgs>;
    'Vec<ParaId>': Vec<ParaId>;
    'Vec<ParaInfo>': Vec<ParaInfo>;
    'Vec<ParaPastCodeMeta>': Vec<ParaPastCodeMeta>;
    'Vec<ParaScheduling>': Vec<ParaScheduling>;
    'Vec<ParathreadClaim>': Vec<ParathreadClaim>;
    'Vec<ParathreadClaimQueue>': Vec<ParathreadClaimQueue>;
    'Vec<ParathreadEntry>': Vec<ParathreadEntry>;
    'Vec<Payload>': Vec<Payload>;
    'Vec<Pays>': Vec<Pays>;
    'Vec<Peer>': Vec<Peer>;
    'Vec<PeerEndpoint>': Vec<PeerEndpoint>;
    'Vec<PeerEndpointAddr>': Vec<PeerEndpointAddr>;
    'Vec<PeerInfo>': Vec<PeerInfo>;
    'Vec<PeerPing>': Vec<PeerPing>;
    'Vec<PendingPause>': Vec<PendingPause>;
    'Vec<PendingResume>': Vec<PendingResume>;
    'Vec<PendingTx>': Vec<PendingTx>;
    'Vec<Perbill>': Vec<Perbill>;
    'Vec<Percent>': Vec<Percent>;
    'Vec<Percentage>': Vec<Percentage>;
    'Vec<PerDispatchClass>': Vec<PerDispatchClass>;
    'Vec<Period>': Vec<Period>;
    'Vec<Permill>': Vec<Permill>;
    'Vec<PermissionedIdentityPrefs>': Vec<PermissionedIdentityPrefs>;
    'Vec<PermissionLatest>': Vec<PermissionLatest>;
    'Vec<Permissions>': Vec<Permissions>;
    'Vec<PermissionsV1>': Vec<PermissionsV1>;
    'Vec<PermissionVersions>': Vec<PermissionVersions>;
    'Vec<Perquintill>': Vec<Perquintill>;
    'Vec<PersistedValidationData>': Vec<PersistedValidationData>;
    'Vec<PerU16>': Vec<PerU16>;
    'Vec<Phantom>': Vec<Phantom>;
    'Vec<PhantomData>': Vec<PhantomData>;
    'Vec<Phase>': Vec<Phase>;
    'Vec<Pip>': Vec<Pip>;
    'Vec<PipDescription>': Vec<PipDescription>;
    'Vec<PipId>': Vec<PipId>;
    'Vec<PipsMetadata>': Vec<PipsMetadata>;
    'Vec<PolymeshVotes>': Vec<PolymeshVotes>;
    'Vec<PortfolioId>': Vec<PortfolioId>;
    'Vec<PortfolioKind>': Vec<PortfolioKind>;
    'Vec<PortfolioName>': Vec<PortfolioName>;
    'Vec<PortfolioNumber>': Vec<PortfolioNumber>;
    'Vec<PosRatio>': Vec<PosRatio>;
    'Vec<PreAuthorizedKeyInfo>': Vec<PreAuthorizedKeyInfo>;
    'Vec<Precommits>': Vec<Precommits>;
    'Vec<PrefabWasmModule>': Vec<PrefabWasmModule>;
    'Vec<PrefabWasmModuleReserved>': Vec<PrefabWasmModuleReserved>;
    'Vec<PrefixedStorageKey>': Vec<PrefixedStorageKey>;
    'Vec<PreimageStatus>': Vec<PreimageStatus>;
    'Vec<PreimageStatusAvailable>': Vec<PreimageStatusAvailable>;
    'Vec<PreRuntime>': Vec<PreRuntime>;
    'Vec<Prevotes>': Vec<Prevotes>;
    'Vec<PriceTier>': Vec<PriceTier>;
    'Vec<Priority>': Vec<Priority>;
    'Vec<PriorLock>': Vec<PriorLock>;
    'Vec<PropIndex>': Vec<PropIndex>;
    'Vec<ProportionMatch>': Vec<ProportionMatch>;
    'Vec<Proposal>': Vec<Proposal>;
    'Vec<ProposalData>': Vec<ProposalData>;
    'Vec<ProposalDetails>': Vec<ProposalDetails>;
    'Vec<ProposalIndex>': Vec<ProposalIndex>;
    'Vec<ProposalState>': Vec<ProposalState>;
    'Vec<ProposalStatus>': Vec<ProposalStatus>;
    'Vec<Proposer>': Vec<Proposer>;
    'Vec<ProtocolOp>': Vec<ProtocolOp>;
    'Vec<ProverTickerKey>': Vec<ProverTickerKey>;
    'Vec<ProxyAnnouncement>': Vec<ProxyAnnouncement>;
    'Vec<ProxyDefinition>': Vec<ProxyDefinition>;
    'Vec<ProxyState>': Vec<ProxyState>;
    'Vec<ProxyType>': Vec<ProxyType>;
    'Vec<QueryHolding>': Vec<QueryHolding>;
    'Vec<QueuedParathread>': Vec<QueuedParathread>;
    'Vec<Randomness>': Vec<Randomness>;
    'Vec<Raw>': Vec<Raw>;
    'Vec<RawAuraPreDigest>': Vec<RawAuraPreDigest>;
    'Vec<RawBabePreDigest>': Vec<RawBabePreDigest>;
    'Vec<RawBabePreDigestCompat>': Vec<RawBabePreDigestCompat>;
    'Vec<RawBabePreDigestPrimary>': Vec<RawBabePreDigestPrimary>;
    'Vec<RawBabePreDigestPrimaryTo159>': Vec<RawBabePreDigestPrimaryTo159>;
    'Vec<RawBabePreDigestSecondaryPlain>': Vec<RawBabePreDigestSecondaryPlain>;
    'Vec<RawBabePreDigestSecondaryTo159>': Vec<RawBabePreDigestSecondaryTo159>;
    'Vec<RawBabePreDigestSecondaryVRF>': Vec<RawBabePreDigestSecondaryVRF>;
    'Vec<RawBabePreDigestTo159>': Vec<RawBabePreDigestTo159>;
    'Vec<RawOrigin>': Vec<RawOrigin>;
    'Vec<RawVRFOutput>': Vec<RawVRFOutput>;
    'Vec<ReadProof>': Vec<ReadProof>;
    'Vec<Reasons>': Vec<Reasons>;
    'Vec<Receipt>': Vec<Receipt>;
    'Vec<ReceiptDetails>': Vec<ReceiptDetails>;
    'Vec<ReceiptMetadata>': Vec<ReceiptMetadata>;
    'Vec<RecordDate>': Vec<RecordDate>;
    'Vec<RecordDateSpec>': Vec<RecordDateSpec>;
    'Vec<RecoveryConfig>': Vec<RecoveryConfig>;
    'Vec<RefCount>': Vec<RefCount>;
    'Vec<RefCountTo259>': Vec<RefCountTo259>;
    'Vec<ReferendumIndex>': Vec<ReferendumIndex>;
    'Vec<ReferendumInfo>': Vec<ReferendumInfo>;
    'Vec<ReferendumInfoFinished>': Vec<ReferendumInfoFinished>;
    'Vec<ReferendumInfoTo239>': Vec<ReferendumInfoTo239>;
    'Vec<ReferendumStatus>': Vec<ReferendumStatus>;
    'Vec<RegisteredParachainInfo>': Vec<RegisteredParachainInfo>;
    'Vec<RelayChainBlockNumber>': Vec<RelayChainBlockNumber>;
    'Vec<RelayedFrom>': Vec<RelayedFrom>;
    'Vec<RelayTo>': Vec<RelayTo>;
    'Vec<Releases>': Vec<Releases>;
    'Vec<Remark>': Vec<Remark>;
    'Vec<Renouncing>': Vec<Renouncing>;
    'Vec<ReportedRoundStates>': Vec<ReportedRoundStates>;
    'Vec<Reporter>': Vec<Reporter>;
    'Vec<ReportIdOf>': Vec<ReportIdOf>;
    'Vec<ReserveAssetDeposit>': Vec<ReserveAssetDeposit>;
    'Vec<RestrictionResult>': Vec<RestrictionResult>;
    'Vec<Retriable>': Vec<Retriable>;
    'Vec<RoundState>': Vec<RoundState>;
    'Vec<RpcMethods>': Vec<RpcMethods>;
    'Vec<RuntimeDbWeight>': Vec<RuntimeDbWeight>;
    'Vec<RuntimeDispatchInfo>': Vec<RuntimeDispatchInfo>;
    'Vec<RuntimeVersion>': Vec<RuntimeVersion>;
    'Vec<RuntimeVersionApi>': Vec<RuntimeVersionApi>;
    'Vec<Schedule>': Vec<Schedule>;
    'Vec<Scheduled>': Vec<Scheduled>;
    'Vec<ScheduledTo254>': Vec<ScheduledTo254>;
    'Vec<ScheduleId>': Vec<ScheduleId>;
    'Vec<SchedulePeriod>': Vec<SchedulePeriod>;
    'Vec<SchedulePriority>': Vec<SchedulePriority>;
    'Vec<ScheduleSpec>': Vec<ScheduleSpec>;
    'Vec<ScheduleTo212>': Vec<ScheduleTo212>;
    'Vec<ScheduleTo258>': Vec<ScheduleTo258>;
    'Vec<Scheduling>': Vec<Scheduling>;
    'Vec<Scope>': Vec<Scope>;
    'Vec<ScopeId>': Vec<ScopeId>;
    'Vec<Seal>': Vec<Seal>;
    'Vec<SealV0>': Vec<SealV0>;
    'Vec<SecondaryKey>': Vec<SecondaryKey>;
    'Vec<SecondaryKeyWithAuth>': Vec<SecondaryKeyWithAuth>;
    'Vec<SecurityToken>': Vec<SecurityToken>;
    'Vec<SeedOf>': Vec<SeedOf>;
    'Vec<SessionIndex>': Vec<SessionIndex>;
    'Vec<SessionInfo>': Vec<SessionInfo>;
    'Vec<SessionInfoValidatorGroup>': Vec<SessionInfoValidatorGroup>;
    'Vec<SessionKeys1>': Vec<SessionKeys1>;
    'Vec<SessionKeys2>': Vec<SessionKeys2>;
    'Vec<SessionKeys3>': Vec<SessionKeys3>;
    'Vec<SessionKeys4>': Vec<SessionKeys4>;
    'Vec<SessionKeys5>': Vec<SessionKeys5>;
    'Vec<SessionKeys6>': Vec<SessionKeys6>;
    'Vec<SessionKeys7>': Vec<SessionKeys7>;
    'Vec<SessionKeys8>': Vec<SessionKeys8>;
    'Vec<SessionKeys9>': Vec<SessionKeys9>;
    'Vec<SetId>': Vec<SetId>;
    'Vec<SetIndex>': Vec<SetIndex>;
    'Vec<SettlementType>': Vec<SettlementType>;
    'Vec<SiField>': Vec<SiField>;
    'Vec<Signatory>': Vec<Signatory>;
    'Vec<Signature>': Vec<Signature>;
    'Vec<SignedAvailabilityBitfield>': Vec<SignedAvailabilityBitfield>;
    'Vec<SignedAvailabilityBitfields>': Vec<SignedAvailabilityBitfields>;
    'Vec<SignedBlock>': Vec<SignedBlock>;
    'Vec<SignerPayload>': Vec<SignerPayload>;
    'Vec<SigningContext>': Vec<SigningContext>;
    'Vec<SiLookupTypeId>': Vec<SiLookupTypeId>;
    'Vec<SimpleTokenRecord>': Vec<SimpleTokenRecord>;
    'Vec<SiPath>': Vec<SiPath>;
    'Vec<SiType>': Vec<SiType>;
    'Vec<SiTypeDef>': Vec<SiTypeDef>;
    'Vec<SiTypeDefArray>': Vec<SiTypeDefArray>;
    'Vec<SiTypeDefComposite>': Vec<SiTypeDefComposite>;
    'Vec<SiTypeDefPrimitive>': Vec<SiTypeDefPrimitive>;
    'Vec<SiTypeDefSequence>': Vec<SiTypeDefSequence>;
    'Vec<SiTypeDefTuple>': Vec<SiTypeDefTuple>;
    'Vec<SiTypeDefVariant>': Vec<SiTypeDefVariant>;
    'Vec<SiVariant>': Vec<SiVariant>;
    'Vec<SkippedCount>': Vec<SkippedCount>;
    'Vec<SlashingSwitch>': Vec<SlashingSwitch>;
    'Vec<SlotNumber>': Vec<SlotNumber>;
    'Vec<SlotRange>': Vec<SlotRange>;
    'Vec<SmartExtension>': Vec<SmartExtension>;
    'Vec<SmartExtensionName>': Vec<SmartExtensionName>;
    'Vec<SmartExtensionType>': Vec<SmartExtensionType>;
    'Vec<SnapshotId>': Vec<SnapshotId>;
    'Vec<SnapshotMetadata>': Vec<SnapshotMetadata>;
    'Vec<SnapshotResult>': Vec<SnapshotResult>;
    'Vec<SnapshottedPip>': Vec<SnapshottedPip>;
    'Vec<SocietyJudgement>': Vec<SocietyJudgement>;
    'Vec<SocietyVote>': Vec<SocietyVote>;
    'Vec<Sr25519Signature>': Vec<Sr25519Signature>;
    'Vec<Statement>': Vec<Statement>;
    'Vec<StatementKind>': Vec<StatementKind>;
    'Vec<StorageChangeSet>': Vec<StorageChangeSet>;
    'Vec<StorageData>': Vec<StorageData>;
    'Vec<StorageEntryMetadataLatest>': Vec<StorageEntryMetadataLatest>;
    'Vec<StorageEntryMetadataV10>': Vec<StorageEntryMetadataV10>;
    'Vec<StorageEntryMetadataV11>': Vec<StorageEntryMetadataV11>;
    'Vec<StorageEntryMetadataV12>': Vec<StorageEntryMetadataV12>;
    'Vec<StorageEntryMetadataV9>': Vec<StorageEntryMetadataV9>;
    'Vec<StorageEntryModifierLatest>': Vec<StorageEntryModifierLatest>;
    'Vec<StorageEntryModifierV10>': Vec<StorageEntryModifierV10>;
    'Vec<StorageEntryModifierV11>': Vec<StorageEntryModifierV11>;
    'Vec<StorageEntryModifierV12>': Vec<StorageEntryModifierV12>;
    'Vec<StorageEntryModifierV9>': Vec<StorageEntryModifierV9>;
    'Vec<StorageEntryTypeLatest>': Vec<StorageEntryTypeLatest>;
    'Vec<StorageEntryTypeV10>': Vec<StorageEntryTypeV10>;
    'Vec<StorageEntryTypeV11>': Vec<StorageEntryTypeV11>;
    'Vec<StorageEntryTypeV12>': Vec<StorageEntryTypeV12>;
    'Vec<StorageEntryTypeV9>': Vec<StorageEntryTypeV9>;
    'Vec<StorageHasher>': Vec<StorageHasher>;
    'Vec<StorageHasherV10>': Vec<StorageHasherV10>;
    'Vec<StorageHasherV11>': Vec<StorageHasherV11>;
    'Vec<StorageHasherV12>': Vec<StorageHasherV12>;
    'Vec<StorageHasherV9>': Vec<StorageHasherV9>;
    'Vec<StorageKey>': Vec<StorageKey>;
    'Vec<StorageKind>': Vec<StorageKind>;
    'Vec<StorageMetadataLatest>': Vec<StorageMetadataLatest>;
    'Vec<StorageMetadataV10>': Vec<StorageMetadataV10>;
    'Vec<StorageMetadataV11>': Vec<StorageMetadataV11>;
    'Vec<StorageMetadataV12>': Vec<StorageMetadataV12>;
    'Vec<StorageMetadataV9>': Vec<StorageMetadataV9>;
    'Vec<StoredPendingChange>': Vec<StoredPendingChange>;
    'Vec<StoredSchedule>': Vec<StoredSchedule>;
    'Vec<StoredState>': Vec<StoredState>;
    'Vec<StrikeCount>': Vec<StrikeCount>;
    'Vec<SubId>': Vec<SubId>;
    'Vec<SyncState>': Vec<SyncState>;
    'Vec<SystemOrigin>': Vec<SystemOrigin>;
    'Vec<Tally>': Vec<Tally>;
    'Vec<TargetIdAuthorization>': Vec<TargetIdAuthorization>;
    'Vec<TargetIdentities>': Vec<TargetIdentities>;
    'Vec<TargetIdentity>': Vec<TargetIdentity>;
    'Vec<TargetTreatment>': Vec<TargetTreatment>;
    'Vec<TaskAddress>': Vec<TaskAddress>;
    'Vec<TAssetBalance>': Vec<TAssetBalance>;
    'Vec<TAssetDepositBalance>': Vec<TAssetDepositBalance>;
    'Vec<Tax>': Vec<Tax>;
    'Vec<TeleportAsset>': Vec<TeleportAsset>;
    'Vec<TemplateDetails>': Vec<TemplateDetails>;
    'Vec<TemplateMetadata>': Vec<TemplateMetadata>;
    'Vec<Text>': Vec<Text>;
    'Vec<Ticker>': Vec<Ticker>;
    'Vec<TickerRangeProof>': Vec<TickerRangeProof>;
    'Vec<TickerRegistration>': Vec<TickerRegistration>;
    'Vec<TickerRegistrationConfig>': Vec<TickerRegistrationConfig>;
    'Vec<TickerTransferApproval>': Vec<TickerTransferApproval>;
    'Vec<Timepoint>': Vec<Timepoint>;
    'Vec<TombstoneContractInfo>': Vec<TombstoneContractInfo>;
    'Vec<Transact>': Vec<Transact>;
    'Vec<TransactionPriority>': Vec<TransactionPriority>;
    'Vec<TransactionValidityError>': Vec<TransactionValidityError>;
    'Vec<TransferManager>': Vec<TransferManager>;
    'Vec<TransientValidationData>': Vec<TransientValidationData>;
    'Vec<TreasuryProposal>': Vec<TreasuryProposal>;
    'Vec<TrieId>': Vec<TrieId>;
    'Vec<TrustedFor>': Vec<TrustedFor>;
    'Vec<TrustedIssuer>': Vec<TrustedIssuer>;
    'Vec<Type>': Vec<Type>;
    'Vec<u128>': Vec<u128>;
    'Vec<U128>': Vec<U128>;
    'Vec<u16>': Vec<u16>;
    'Vec<U16>': Vec<U16>;
    'Vec<u256>': Vec<u256>;
    'Vec<U256>': Vec<U256>;
    'Vec<u32>': Vec<u32>;
    'Vec<U32>': Vec<U32>;
    'Vec<U32F32>': Vec<U32F32>;
    'Vec<u64>': Vec<u64>;
    'Vec<U64>': Vec<U64>;
    'Vec<u8>': Vec<u8>;
    'Vec<U8>': Vec<U8>;
    'Vec<UncleEntryItem>': Vec<UncleEntryItem>;
    'Vec<UniqueCall>': Vec<UniqueCall>;
    'Vec<UnknownTransaction>': Vec<UnknownTransaction>;
    'Vec<UpwardMessage>': Vec<UpwardMessage>;
    'Vec<Url>': Vec<Url>;
    'Vec<usize>': Vec<usize>;
    'Vec<USize>': Vec<USize>;
    'Vec<ValidationCode>': Vec<ValidationCode>;
    'Vec<ValidationData>': Vec<ValidationData>;
    'Vec<ValidationDataType>': Vec<ValidationDataType>;
    'Vec<ValidationFunctionParams>': Vec<ValidationFunctionParams>;
    'Vec<ValidatorCount>': Vec<ValidatorCount>;
    'Vec<ValidatorId>': Vec<ValidatorId>;
    'Vec<ValidatorIdOf>': Vec<ValidatorIdOf>;
    'Vec<ValidatorSignature>': Vec<ValidatorSignature>;
    'Vec<ValidityAttestation>': Vec<ValidityAttestation>;
    'Vec<Venue>': Vec<Venue>;
    'Vec<VenueDetails>': Vec<VenueDetails>;
    'Vec<VenueType>': Vec<VenueType>;
    'Vec<Version>': Vec<Version>;
    'Vec<VersionedMultiAsset>': Vec<VersionedMultiAsset>;
    'Vec<VersionedMultiLocation>': Vec<VersionedMultiLocation>;
    'Vec<VersionedXcm>': Vec<VersionedXcm>;
    'Vec<VestingInfo>': Vec<VestingInfo>;
    'Vec<VestingSchedule>': Vec<VestingSchedule>;
    'Vec<Vote>': Vec<Vote>;
    'Vec<VoteByPip>': Vec<VoteByPip>;
    'Vec<VoteCount>': Vec<VoteCount>;
    'Vec<VoteCountProposalFound>': Vec<VoteCountProposalFound>;
    'Vec<VoteIndex>': Vec<VoteIndex>;
    'Vec<VoterInfo>': Vec<VoterInfo>;
    'Vec<Votes>': Vec<Votes>;
    'Vec<VotesTo230>': Vec<VotesTo230>;
    'Vec<VoteThreshold>': Vec<VoteThreshold>;
    'Vec<Voting>': Vec<Voting>;
    'Vec<VotingDelegating>': Vec<VotingDelegating>;
    'Vec<VotingDirect>': Vec<VotingDirect>;
    'Vec<VotingDirectVote>': Vec<VotingDirectVote>;
    'Vec<VotingResult>': Vec<VotingResult>;
    'Vec<VouchingStatus>': Vec<VouchingStatus>;
    'Vec<VrfData>': Vec<VrfData>;
    'Vec<VrfOutput>': Vec<VrfOutput>;
    'Vec<VrfProof>': Vec<VrfProof>;
    'Vec<Weight>': Vec<Weight>;
    'Vec<WeightMultiplier>': Vec<WeightMultiplier>;
    'Vec<WeightPerClass>': Vec<WeightPerClass>;
    'Vec<WeightToFeeCoefficient>': Vec<WeightToFeeCoefficient>;
    'Vec<WinnersData>': Vec<WinnersData>;
    'Vec<WinnersDataTuple>': Vec<WinnersDataTuple>;
    'Vec<WinningData>': Vec<WinningData>;
    'Vec<WinningDataEntry>': Vec<WinningDataEntry>;
    'Vec<WithdrawAsset>': Vec<WithdrawAsset>;
    'Vec<WithdrawReasons>': Vec<WithdrawReasons>;
    'Vec<Xcm>': Vec<Xcm>;
    'Vec<XcmError>': Vec<XcmError>;
    'Vec<XcmResult>': Vec<XcmResult>;
    AbridgedCandidateReceipt: AbridgedCandidateReceipt;
    AbridgedHostConfiguration: AbridgedHostConfiguration;
    AbridgedHrmpChannel: AbridgedHrmpChannel;
    AbstractFungible: AbstractFungible;
    AbstractNonFungible: AbstractNonFungible;
    AccountData: AccountData;
    AccountId: AccountId;
    AccountId32Junction: AccountId32Junction;
    AccountIdOf: AccountIdOf;
    AccountIndex: AccountIndex;
    AccountIndex64Junction: AccountIndex64Junction;
    AccountInfo: AccountInfo;
    AccountInfoWithProviders: AccountInfoWithProviders;
    AccountInfoWithRefCount: AccountInfoWithRefCount;
    AccountKey20Junction: AccountKey20Junction;
    AccountStatus: AccountStatus;
    AccountValidity: AccountValidity;
    AccountVote: AccountVote;
    AccountVoteSplit: AccountVoteSplit;
    AccountVoteStandard: AccountVoteStandard;
    ActiveRecovery: ActiveRecovery;
    Address: Address;
    AffirmationStatus: AffirmationStatus;
    AliveContractInfo: AliveContractInfo;
    AllowedSlots: AllowedSlots;
    AnySignature: AnySignature;
    ApiId: ApiId;
    ApplyExtrinsicResult: ApplyExtrinsicResult;
    ApprovalFlag: ApprovalFlag;
    Approvals: Approvals;
    AssetBalance: AssetBalance;
    AssetCompliance: AssetCompliance;
    AssetComplianceResult: AssetComplianceResult;
    AssetDetails: AssetDetails;
    AssetDidResult: AssetDidResult;
    AssetId: AssetId;
    AssetIdentifier: AssetIdentifier;
    AssetInstance: AssetInstance;
    AssetMigrationError: AssetMigrationError;
    AssetName: AssetName;
    AssetOptions: AssetOptions;
    AssetOwnershipRelation: AssetOwnershipRelation;
    AssetType: AssetType;
    AssignmentId: AssignmentId;
    AssignmentKind: AssignmentKind;
    AttestedCandidate: AttestedCandidate;
    AuctionIndex: AuctionIndex;
    AuthIdentifier: AuthIdentifier;
    AuthIndex: AuthIndex;
    AuthorityDiscoveryId: AuthorityDiscoveryId;
    AuthorityId: AuthorityId;
    AuthorityIndex: AuthorityIndex;
    AuthorityList: AuthorityList;
    AuthoritySignature: AuthoritySignature;
    AuthorityWeight: AuthorityWeight;
    Authorization: Authorization;
    AuthorizationData: AuthorizationData;
    AuthorizationNonce: AuthorizationNonce;
    AuthorizationType: AuthorizationType;
    AvailabilityBitfield: AvailabilityBitfield;
    AvailabilityBitfieldRecord: AvailabilityBitfieldRecord;
    BabeAuthorityWeight: BabeAuthorityWeight;
    BabeBlockWeight: BabeBlockWeight;
    BabeEquivocationProof: BabeEquivocationProof;
    BabeWeight: BabeWeight;
    BackedCandidate: BackedCandidate;
    Balance: Balance;
    BalanceLock: BalanceLock;
    BalanceLockTo212: BalanceLockTo212;
    BalanceOf: BalanceOf;
    Balances: Balances;
    BalanceStatus: BalanceStatus;
    BallotMeta: BallotMeta;
    BallotTimeRange: BallotTimeRange;
    BallotTitle: BallotTitle;
    BallotVote: BallotVote;
    BatchAddClaimItem: BatchAddClaimItem;
    BatchRevokeClaimItem: BatchRevokeClaimItem;
    Beneficiary: Beneficiary;
    Bid: Bid;
    Bidder: Bidder;
    BidKind: BidKind;
    BitVec: BitVec;
    Block: Block;
    BlockAttestations: BlockAttestations;
    BlockHash: BlockHash;
    BlockNumber: BlockNumber;
    BlockWeights: BlockWeights;
    bool: bool;
    Bool: Bool;
    Bounty: Bounty;
    BountyIndex: BountyIndex;
    BountyStatus: BountyStatus;
    BountyStatusActive: BountyStatusActive;
    BountyStatusCuratorProposed: BountyStatusCuratorProposed;
    BountyStatusPendingPayout: BountyStatusPendingPayout;
    BridgeTx: BridgeTx;
    BridgeTxDetail: BridgeTxDetail;
    BridgeTxStatus: BridgeTxStatus;
    BufferedSessionChange: BufferedSessionChange;
    Bytes: Bytes;
    CACheckpoint: CACheckpoint;
    CADetails: CADetails;
    CAId: CAId;
    CAKind: CAKind;
    CalendarPeriod: CalendarPeriod;
    CalendarUnit: CalendarUnit;
    Call: Call;
    CallHash: CallHash;
    CallHashOf: CallHashOf;
    CallIndex: CallIndex;
    CandidateCommitments: CandidateCommitments;
    CandidateDescriptor: CandidateDescriptor;
    CandidateHash: CandidateHash;
    CandidatePendingAvailability: CandidatePendingAvailability;
    CandidateReceipt: CandidateReceipt;
    CanTransferResult: CanTransferResult;
    CappedFee: CappedFee;
    CddId: CddId;
    CddStatus: CddStatus;
    ChainProperties: ChainProperties;
    ChainType: ChainType;
    ChangesTrieConfiguration: ChangesTrieConfiguration;
    CheckpointId: CheckpointId;
    CheckpointSchedule: CheckpointSchedule;
    ChoiceTitle: ChoiceTitle;
    Claim: Claim;
    Claim1stKey: Claim1stKey;
    Claim2ndKey: Claim2ndKey;
    ClaimType: ClaimType;
    ClassicTickerImport: ClassicTickerImport;
    ClassicTickerRegistration: ClassicTickerRegistration;
    CodeHash: CodeHash;
    CollatorId: CollatorId;
    CollatorSignature: CollatorSignature;
    CollectiveOrigin: CollectiveOrigin;
    CommittedCandidateReceipt: CommittedCandidateReceipt;
    Committee: Committee;
    ComplianceRequirement: ComplianceRequirement;
    ComplianceRequirementResult: ComplianceRequirementResult;
    ConcreteFungible: ConcreteFungible;
    ConcreteNonFungible: ConcreteNonFungible;
    Condition: Condition;
    ConditionResult: ConditionResult;
    ConditionType: ConditionType;
    Consensus: Consensus;
    ConsensusEngineId: ConsensusEngineId;
    ConsumedWeight: ConsumedWeight;
    ContractCallRequest: ContractCallRequest;
    ContractConstructorSpec: ContractConstructorSpec;
    ContractContractSpec: ContractContractSpec;
    ContractCryptoHasher: ContractCryptoHasher;
    ContractDiscriminant: ContractDiscriminant;
    ContractDisplayName: ContractDisplayName;
    ContractEventParamSpec: ContractEventParamSpec;
    ContractEventSpec: ContractEventSpec;
    ContractExecResult: ContractExecResult;
    ContractExecResultErr: ContractExecResultErr;
    ContractExecResultErrModule: ContractExecResultErrModule;
    ContractExecResultOk: ContractExecResultOk;
    ContractExecResultResult: ContractExecResultResult;
    ContractExecResultSuccessTo255: ContractExecResultSuccessTo255;
    ContractExecResultSuccessTo260: ContractExecResultSuccessTo260;
    ContractExecResultTo255: ContractExecResultTo255;
    ContractExecResultTo260: ContractExecResultTo260;
    ContractInfo: ContractInfo;
    ContractLayoutArray: ContractLayoutArray;
    ContractLayoutCell: ContractLayoutCell;
    ContractLayoutEnum: ContractLayoutEnum;
    ContractLayoutHash: ContractLayoutHash;
    ContractLayoutHashingStrategy: ContractLayoutHashingStrategy;
    ContractLayoutKey: ContractLayoutKey;
    ContractLayoutStruct: ContractLayoutStruct;
    ContractLayoutStructField: ContractLayoutStructField;
    ContractMessageParamSpec: ContractMessageParamSpec;
    ContractMessageSpec: ContractMessageSpec;
    ContractProject: ContractProject;
    ContractProjectContract: ContractProjectContract;
    ContractProjectSource: ContractProjectSource;
    ContractSelector: ContractSelector;
    ContractStorageKey: ContractStorageKey;
    ContractStorageLayout: ContractStorageLayout;
    ContractTypeSpec: ContractTypeSpec;
    Conviction: Conviction;
    CoreAssignment: CoreAssignment;
    CoreIndex: CoreIndex;
    CoreOccupied: CoreOccupied;
    CorporateAction: CorporateAction;
    Counter: Counter;
    CountryCode: CountryCode;
    CreatedBlock: CreatedBlock;
    Data: Data;
    DeferredOffenceOf: DeferredOffenceOf;
    DefunctVoter: DefunctVoter;
    Delegations: Delegations;
    DeletedContract: DeletedContract;
    DeployData: DeployData;
    DepositAsset: DepositAsset;
    DepositInfo: DepositInfo;
    DepositReserveAsset: DepositReserveAsset;
    DidRecord: DidRecord;
    DidRecords: DidRecords;
    DidRecordsSuccess: DidRecordsSuccess;
    DidStatus: DidStatus;
    Digest: Digest;
    DigestItem: DigestItem;
    DigestOf: DigestOf;
    DispatchableName: DispatchableName;
    DispatchClass: DispatchClass;
    DispatchError: DispatchError;
    DispatchErrorModule: DispatchErrorModule;
    DispatchErrorTo198: DispatchErrorTo198;
    DispatchInfo: DispatchInfo;
    DispatchInfoTo190: DispatchInfoTo190;
    DispatchInfoTo244: DispatchInfoTo244;
    DispatchOutcome: DispatchOutcome;
    DispatchResult: DispatchResult;
    DispatchResultOf: DispatchResultOf;
    DispatchResultTo198: DispatchResultTo198;
    Distribution: Distribution;
    Document: Document;
    DocumentHash: DocumentHash;
    DocumentId: DocumentId;
    DocumentName: DocumentName;
    DocumentType: DocumentType;
    DocumentUri: DocumentUri;
    DoNotConstruct: DoNotConstruct;
    DoubleMapTypeLatest: DoubleMapTypeLatest;
    DoubleMapTypeV10: DoubleMapTypeV10;
    DoubleMapTypeV11: DoubleMapTypeV11;
    DoubleMapTypeV12: DoubleMapTypeV12;
    DoubleMapTypeV9: DoubleMapTypeV9;
    DoubleVoteReport: DoubleVoteReport;
    DownwardMessage: DownwardMessage;
    EcdsaSignature: EcdsaSignature;
    Ed25519Signature: Ed25519Signature;
    EncodedFinalityProofs: EncodedFinalityProofs;
    EpochAuthorship: EpochAuthorship;
    ErrorMetadataLatest: ErrorMetadataLatest;
    ErrorMetadataV10: ErrorMetadataV10;
    ErrorMetadataV11: ErrorMetadataV11;
    ErrorMetadataV12: ErrorMetadataV12;
    ErrorMetadataV9: ErrorMetadataV9;
    EthAccount: EthAccount;
    EthBlock: EthBlock;
    EthBloom: EthBloom;
    EthCallRequest: EthCallRequest;
    EthereumAccountId: EthereumAccountId;
    EthereumAddress: EthereumAddress;
    EthereumLookupSource: EthereumLookupSource;
    EthereumSignature: EthereumSignature;
    EthFilter: EthFilter;
    EthFilterAddress: EthFilterAddress;
    EthFilterTopic: EthFilterTopic;
    EthFilterTopicEntry: EthFilterTopicEntry;
    EthFilterTopicInner: EthFilterTopicInner;
    EthHeader: EthHeader;
    EthLog: EthLog;
    EthReceipt: EthReceipt;
    EthRichBlock: EthRichBlock;
    EthRichHeader: EthRichHeader;
    EthStorageProof: EthStorageProof;
    EthSubKind: EthSubKind;
    EthSubParams: EthSubParams;
    EthSubResult: EthSubResult;
    EthSyncInfo: EthSyncInfo;
    EthSyncStatus: EthSyncStatus;
    EthTransaction: EthTransaction;
    EthTransactionAction: EthTransactionAction;
    EthTransactionCondition: EthTransactionCondition;
    EthTransactionRequest: EthTransactionRequest;
    EthTransactionStatus: EthTransactionStatus;
    EthWork: EthWork;
    Event: Event;
    EventDid: EventDid;
    EventId: EventId;
    EventIndex: EventIndex;
    EventMetadataLatest: EventMetadataLatest;
    EventMetadataV10: EventMetadataV10;
    EventMetadataV11: EventMetadataV11;
    EventMetadataV12: EventMetadataV12;
    EventMetadataV9: EventMetadataV9;
    EventRecord: EventRecord;
    EvmAccount: EvmAccount;
    EvmLog: EvmLog;
    EvmVicinity: EvmVicinity;
    ExchangeAsset: ExchangeAsset;
    ExitError: ExitError;
    ExitFatal: ExitFatal;
    ExitReason: ExitReason;
    ExitRevert: ExitRevert;
    ExitSucceed: ExitSucceed;
    ExtensionAttributes: ExtensionAttributes;
    Extrinsic: Extrinsic;
    ExtrinsicEra: ExtrinsicEra;
    ExtrinsicMetadataLatest: ExtrinsicMetadataLatest;
    ExtrinsicMetadataV11: ExtrinsicMetadataV11;
    ExtrinsicMetadataV12: ExtrinsicMetadataV12;
    ExtrinsicOrHash: ExtrinsicOrHash;
    ExtrinsicPayload: ExtrinsicPayload;
    ExtrinsicPayloadUnknown: ExtrinsicPayloadUnknown;
    ExtrinsicPayloadV4: ExtrinsicPayloadV4;
    ExtrinsicSignature: ExtrinsicSignature;
    ExtrinsicSignatureV4: ExtrinsicSignatureV4;
    ExtrinsicStatus: ExtrinsicStatus;
    ExtrinsicsWeight: ExtrinsicsWeight;
    ExtrinsicUnknown: ExtrinsicUnknown;
    ExtrinsicV4: ExtrinsicV4;
    ExtVersion: ExtVersion;
    FeeOf: FeeOf;
    Fixed128: Fixed128;
    Fixed64: Fixed64;
    FixedI128: FixedI128;
    FixedI64: FixedI64;
    FixedU128: FixedU128;
    FixedU64: FixedU64;
    FullIdentification: FullIdentification;
    FunctionArgumentMetadataLatest: FunctionArgumentMetadataLatest;
    FunctionArgumentMetadataV10: FunctionArgumentMetadataV10;
    FunctionArgumentMetadataV11: FunctionArgumentMetadataV11;
    FunctionArgumentMetadataV12: FunctionArgumentMetadataV12;
    FunctionArgumentMetadataV9: FunctionArgumentMetadataV9;
    FunctionMetadataLatest: FunctionMetadataLatest;
    FunctionMetadataV10: FunctionMetadataV10;
    FunctionMetadataV11: FunctionMetadataV11;
    FunctionMetadataV12: FunctionMetadataV12;
    FunctionMetadataV9: FunctionMetadataV9;
    FundIndex: FundIndex;
    FundInfo: FundInfo;
    FundingRoundName: FundingRoundName;
    Fundraiser: Fundraiser;
    FundraiserName: FundraiserName;
    FundraiserStatus: FundraiserStatus;
    FundraiserTier: FundraiserTier;
    Gas: Gas;
    GetPortfolioAssetsResult: GetPortfolioAssetsResult;
    GetPortfoliosResult: GetPortfoliosResult;
    GlobalValidationSchedule: GlobalValidationSchedule;
    GrandpaEquivocation: GrandpaEquivocation;
    GrandpaEquivocationProof: GrandpaEquivocationProof;
    GrandpaEquivocationValue: GrandpaEquivocationValue;
    GrandpaPrevote: GrandpaPrevote;
    GroupIndex: GroupIndex;
    H1024: H1024;
    H128: H128;
    H160: H160;
    H2048: H2048;
    H256: H256;
    H512: H512;
    H64: H64;
    HandledTxStatus: HandledTxStatus;
    Hash: Hash;
    HeadData: HeadData;
    Header: Header;
    Health: Health;
    Heartbeat: Heartbeat;
    HeartbeatTo244: HeartbeatTo244;
    HistoricalVotingByAddress: HistoricalVotingByAddress;
    HistoricalVotingById: HistoricalVotingById;
    HostConfiguration: HostConfiguration;
    HostFnWeights: HostFnWeights;
    HrmpChannel: HrmpChannel;
    HrmpChannelId: HrmpChannelId;
    HrmpOpenChannelRequest: HrmpOpenChannelRequest;
    i128: i128;
    I128: I128;
    i16: i16;
    I16: I16;
    i256: i256;
    I256: I256;
    i32: i32;
    I32: I32;
    I32F32: I32F32;
    i64: i64;
    I64: I64;
    i8: i8;
    I8: I8;
    IdentificationTuple: IdentificationTuple;
    IdentityClaim: IdentityClaim;
    IdentityClaimKey: IdentityClaimKey;
    IdentityId: IdentityId;
    IdentityRole: IdentityRole;
    ImmortalEra: ImmortalEra;
    ImportedAux: ImportedAux;
    InactiveMember: InactiveMember;
    InboundDownwardMessage: InboundDownwardMessage;
    InboundHrmpMessage: InboundHrmpMessage;
    InboundHrmpMessages: InboundHrmpMessages;
    IncludedBlocks: IncludedBlocks;
    IncomingParachain: IncomingParachain;
    IncomingParachainDeploy: IncomingParachainDeploy;
    IncomingParachainFixed: IncomingParachainFixed;
    Index: Index;
    IndicesLookupSource: IndicesLookupSource;
    InitiateReserveWithdraw: InitiateReserveWithdraw;
    InitiateTeleport: InitiateTeleport;
    Instruction: Instruction;
    InstructionStatus: InstructionStatus;
    InstructionWeights: InstructionWeights;
    InvalidTransaction: InvalidTransaction;
    InvestorUid: InvestorUid;
    InvestorZKProofData: InvestorZKProofData;
    IssueAssetItem: IssueAssetItem;
    IssueRecipient: IssueRecipient;
    Json: Json;
    Junction: Junction;
    Justification: Justification;
    JustificationNotification: JustificationNotification;
    Key: Key;
    KeyIdentityData: KeyIdentityData;
    KeyOwnerProof: KeyOwnerProof;
    Keys: Keys;
    KeyTypeId: KeyTypeId;
    KeyValue: KeyValue;
    KeyValueOption: KeyValueOption;
    Kind: Kind;
    LastContribution: LastContribution;
    LastRuntimeUpgradeInfo: LastRuntimeUpgradeInfo;
    LeasePeriod: LeasePeriod;
    LeasePeriodOf: LeasePeriodOf;
    Leg: Leg;
    LegacyPalletPermissions: LegacyPalletPermissions;
    LegacyPermissions: LegacyPermissions;
    LegStatus: LegStatus;
    Limits: Limits;
    LocalCAId: LocalCAId;
    LocalValidationData: LocalValidationData;
    LockIdentifier: LockIdentifier;
    LookupSource: LookupSource;
    LookupTarget: LookupTarget;
    LotteryConfig: LotteryConfig;
    MapTypeLatest: MapTypeLatest;
    MapTypeV10: MapTypeV10;
    MapTypeV11: MapTypeV11;
    MapTypeV12: MapTypeV12;
    MapTypeV9: MapTypeV9;
    MaybeBlock: MaybeBlock;
    MaybeRandomness: MaybeRandomness;
    MaybeVrf: MaybeVrf;
    MemberCount: MemberCount;
    MembershipProof: MembershipProof;
    Memo: Memo;
    MessageIngestionType: MessageIngestionType;
    MetadataAll: MetadataAll;
    MetadataLatest: MetadataLatest;
    MetadataV10: MetadataV10;
    MetadataV11: MetadataV11;
    MetadataV12: MetadataV12;
    MetadataV9: MetadataV9;
    MetaDescription: MetaDescription;
    MetaUrl: MetaUrl;
    MetaVersion: MetaVersion;
    MigrationError: MigrationError;
    ModuleConstantMetadataLatest: ModuleConstantMetadataLatest;
    ModuleConstantMetadataV10: ModuleConstantMetadataV10;
    ModuleConstantMetadataV11: ModuleConstantMetadataV11;
    ModuleConstantMetadataV12: ModuleConstantMetadataV12;
    ModuleConstantMetadataV9: ModuleConstantMetadataV9;
    ModuleId: ModuleId;
    ModuleMetadataLatest: ModuleMetadataLatest;
    ModuleMetadataV10: ModuleMetadataV10;
    ModuleMetadataV11: ModuleMetadataV11;
    ModuleMetadataV12: ModuleMetadataV12;
    ModuleMetadataV9: ModuleMetadataV9;
    Moment: Moment;
    MoreAttestations: MoreAttestations;
    MortalEra: MortalEra;
    Motion: Motion;
    MotionInfoLink: MotionInfoLink;
    MotionTitle: MotionTitle;
    MovePortfolioItem: MovePortfolioItem;
    MultiAddress: MultiAddress;
    MultiAsset: MultiAsset;
    MultiLocation: MultiLocation;
    Multiplier: Multiplier;
    Multisig: Multisig;
    MultiSignature: MultiSignature;
    NetworkId: NetworkId;
    NetworkState: NetworkState;
    NetworkStatePeerset: NetworkStatePeerset;
    NetworkStatePeersetInfo: NetworkStatePeersetInfo;
    NewBidder: NewBidder;
    NewBidderOption: NewBidderOption;
    NextAuthority: NextAuthority;
    NextConfigDescriptor: NextConfigDescriptor;
    NextConfigDescriptorV1: NextConfigDescriptorV1;
    NodeRole: NodeRole;
    NotConnectedPeer: NotConnectedPeer;
    Null: Null;
    OffChainSignature: OffChainSignature;
    OffenceDetails: OffenceDetails;
    Offender: Offender;
    OfflineSlashingParams: OfflineSlashingParams;
    OpaqueCall: OpaqueCall;
    OpaqueMultiaddr: OpaqueMultiaddr;
    OpaqueNetworkState: OpaqueNetworkState;
    OpaquePeerId: OpaquePeerId;
    OpaqueTimeSlot: OpaqueTimeSlot;
    OpenTip: OpenTip;
    OpenTipFinderTo225: OpenTipFinderTo225;
    OpenTipTip: OpenTipTip;
    OpenTipTo225: OpenTipTo225;
    Order: Order;
    Origin: Origin;
    OriginCaller: OriginCaller;
    OriginKind: OriginKind;
    OutboundHrmpMessage: OutboundHrmpMessage;
    Owner: Owner;
    PalletName: PalletName;
    PalletPermissions: PalletPermissions;
    PalletsOrigin: PalletsOrigin;
    PalletVersion: PalletVersion;
    ParachainDispatchOrigin: ParachainDispatchOrigin;
    ParachainProposal: ParachainProposal;
    ParaGenesisArgs: ParaGenesisArgs;
    ParaId: ParaId;
    ParaInfo: ParaInfo;
    ParaPastCodeMeta: ParaPastCodeMeta;
    ParaScheduling: ParaScheduling;
    ParathreadClaim: ParathreadClaim;
    ParathreadClaimQueue: ParathreadClaimQueue;
    ParathreadEntry: ParathreadEntry;
    Payload: Payload;
    Pays: Pays;
    Peer: Peer;
    PeerEndpoint: PeerEndpoint;
    PeerEndpointAddr: PeerEndpointAddr;
    PeerInfo: PeerInfo;
    PeerPing: PeerPing;
    PendingPause: PendingPause;
    PendingResume: PendingResume;
    PendingTx: PendingTx;
    Perbill: Perbill;
    Percent: Percent;
    Percentage: Percentage;
    PerDispatchClass: PerDispatchClass;
    Period: Period;
    Permill: Permill;
    PermissionedIdentityPrefs: PermissionedIdentityPrefs;
    PermissionLatest: PermissionLatest;
    Permissions: Permissions;
    PermissionsV1: PermissionsV1;
    PermissionVersions: PermissionVersions;
    Perquintill: Perquintill;
    PersistedValidationData: PersistedValidationData;
    PerU16: PerU16;
    Phantom: Phantom;
    PhantomData: PhantomData;
    Phase: Phase;
    Pip: Pip;
    PipDescription: PipDescription;
    PipId: PipId;
    PipsMetadata: PipsMetadata;
    PolymeshVotes: PolymeshVotes;
    PortfolioId: PortfolioId;
    PortfolioKind: PortfolioKind;
    PortfolioName: PortfolioName;
    PortfolioNumber: PortfolioNumber;
    PosRatio: PosRatio;
    PreAuthorizedKeyInfo: PreAuthorizedKeyInfo;
    Precommits: Precommits;
    PrefabWasmModule: PrefabWasmModule;
    PrefabWasmModuleReserved: PrefabWasmModuleReserved;
    PrefixedStorageKey: PrefixedStorageKey;
    PreimageStatus: PreimageStatus;
    PreimageStatusAvailable: PreimageStatusAvailable;
    PreRuntime: PreRuntime;
    Prevotes: Prevotes;
    PriceTier: PriceTier;
    Priority: Priority;
    PriorLock: PriorLock;
    PropIndex: PropIndex;
    ProportionMatch: ProportionMatch;
    Proposal: Proposal;
    ProposalData: ProposalData;
    ProposalDetails: ProposalDetails;
    ProposalIndex: ProposalIndex;
    ProposalState: ProposalState;
    ProposalStatus: ProposalStatus;
    Proposer: Proposer;
    ProtocolOp: ProtocolOp;
    ProverTickerKey: ProverTickerKey;
    ProxyAnnouncement: ProxyAnnouncement;
    ProxyDefinition: ProxyDefinition;
    ProxyState: ProxyState;
    ProxyType: ProxyType;
    QueryHolding: QueryHolding;
    QueuedParathread: QueuedParathread;
    Randomness: Randomness;
    Raw: Raw;
    RawAuraPreDigest: RawAuraPreDigest;
    RawBabePreDigest: RawBabePreDigest;
    RawBabePreDigestCompat: RawBabePreDigestCompat;
    RawBabePreDigestPrimary: RawBabePreDigestPrimary;
    RawBabePreDigestPrimaryTo159: RawBabePreDigestPrimaryTo159;
    RawBabePreDigestSecondaryPlain: RawBabePreDigestSecondaryPlain;
    RawBabePreDigestSecondaryTo159: RawBabePreDigestSecondaryTo159;
    RawBabePreDigestSecondaryVRF: RawBabePreDigestSecondaryVRF;
    RawBabePreDigestTo159: RawBabePreDigestTo159;
    RawOrigin: RawOrigin;
    RawVRFOutput: RawVRFOutput;
    ReadProof: ReadProof;
    Reasons: Reasons;
    Receipt: Receipt;
    ReceiptDetails: ReceiptDetails;
    ReceiptMetadata: ReceiptMetadata;
    RecordDate: RecordDate;
    RecordDateSpec: RecordDateSpec;
    RecoveryConfig: RecoveryConfig;
    RefCount: RefCount;
    RefCountTo259: RefCountTo259;
    ReferendumIndex: ReferendumIndex;
    ReferendumInfo: ReferendumInfo;
    ReferendumInfoFinished: ReferendumInfoFinished;
    ReferendumInfoTo239: ReferendumInfoTo239;
    ReferendumStatus: ReferendumStatus;
    RegisteredParachainInfo: RegisteredParachainInfo;
    RelayChainBlockNumber: RelayChainBlockNumber;
    RelayedFrom: RelayedFrom;
    RelayTo: RelayTo;
    Releases: Releases;
    Remark: Remark;
    Renouncing: Renouncing;
    ReportedRoundStates: ReportedRoundStates;
    Reporter: Reporter;
    ReportIdOf: ReportIdOf;
    ReserveAssetDeposit: ReserveAssetDeposit;
    RestrictionResult: RestrictionResult;
    Retriable: Retriable;
    RoundState: RoundState;
    RpcMethods: RpcMethods;
    RuntimeDbWeight: RuntimeDbWeight;
    RuntimeDispatchInfo: RuntimeDispatchInfo;
    RuntimeVersion: RuntimeVersion;
    RuntimeVersionApi: RuntimeVersionApi;
    Schedule: Schedule;
    Scheduled: Scheduled;
    ScheduledTo254: ScheduledTo254;
    ScheduleId: ScheduleId;
    SchedulePeriod: SchedulePeriod;
    SchedulePriority: SchedulePriority;
    ScheduleSpec: ScheduleSpec;
    ScheduleTo212: ScheduleTo212;
    ScheduleTo258: ScheduleTo258;
    Scheduling: Scheduling;
    Scope: Scope;
    ScopeId: ScopeId;
    Seal: Seal;
    SealV0: SealV0;
    SecondaryKey: SecondaryKey;
    SecondaryKeyWithAuth: SecondaryKeyWithAuth;
    SecurityToken: SecurityToken;
    SeedOf: SeedOf;
    SessionIndex: SessionIndex;
    SessionInfo: SessionInfo;
    SessionInfoValidatorGroup: SessionInfoValidatorGroup;
    SessionKeys1: SessionKeys1;
    SessionKeys2: SessionKeys2;
    SessionKeys3: SessionKeys3;
    SessionKeys4: SessionKeys4;
    SessionKeys5: SessionKeys5;
    SessionKeys6: SessionKeys6;
    SessionKeys7: SessionKeys7;
    SessionKeys8: SessionKeys8;
    SessionKeys9: SessionKeys9;
    SetId: SetId;
    SetIndex: SetIndex;
    SettlementType: SettlementType;
    SiField: SiField;
    Signatory: Signatory;
    Signature: Signature;
    SignedAvailabilityBitfield: SignedAvailabilityBitfield;
    SignedAvailabilityBitfields: SignedAvailabilityBitfields;
    SignedBlock: SignedBlock;
    SignerPayload: SignerPayload;
    SigningContext: SigningContext;
    SiLookupTypeId: SiLookupTypeId;
    SimpleTokenRecord: SimpleTokenRecord;
    SiPath: SiPath;
    SiType: SiType;
    SiTypeDef: SiTypeDef;
    SiTypeDefArray: SiTypeDefArray;
    SiTypeDefComposite: SiTypeDefComposite;
    SiTypeDefPrimitive: SiTypeDefPrimitive;
    SiTypeDefSequence: SiTypeDefSequence;
    SiTypeDefTuple: SiTypeDefTuple;
    SiTypeDefVariant: SiTypeDefVariant;
    SiVariant: SiVariant;
    SkippedCount: SkippedCount;
    SlashingSwitch: SlashingSwitch;
    SlotNumber: SlotNumber;
    SlotRange: SlotRange;
    SmartExtension: SmartExtension;
    SmartExtensionName: SmartExtensionName;
    SmartExtensionType: SmartExtensionType;
    SnapshotId: SnapshotId;
    SnapshotMetadata: SnapshotMetadata;
    SnapshotResult: SnapshotResult;
    SnapshottedPip: SnapshottedPip;
    SocietyJudgement: SocietyJudgement;
    SocietyVote: SocietyVote;
    Sr25519Signature: Sr25519Signature;
    Statement: Statement;
    StatementKind: StatementKind;
    StorageChangeSet: StorageChangeSet;
    StorageData: StorageData;
    StorageEntryMetadataLatest: StorageEntryMetadataLatest;
    StorageEntryMetadataV10: StorageEntryMetadataV10;
    StorageEntryMetadataV11: StorageEntryMetadataV11;
    StorageEntryMetadataV12: StorageEntryMetadataV12;
    StorageEntryMetadataV9: StorageEntryMetadataV9;
    StorageEntryModifierLatest: StorageEntryModifierLatest;
    StorageEntryModifierV10: StorageEntryModifierV10;
    StorageEntryModifierV11: StorageEntryModifierV11;
    StorageEntryModifierV12: StorageEntryModifierV12;
    StorageEntryModifierV9: StorageEntryModifierV9;
    StorageEntryTypeLatest: StorageEntryTypeLatest;
    StorageEntryTypeV10: StorageEntryTypeV10;
    StorageEntryTypeV11: StorageEntryTypeV11;
    StorageEntryTypeV12: StorageEntryTypeV12;
    StorageEntryTypeV9: StorageEntryTypeV9;
    StorageHasher: StorageHasher;
    StorageHasherV10: StorageHasherV10;
    StorageHasherV11: StorageHasherV11;
    StorageHasherV12: StorageHasherV12;
    StorageHasherV9: StorageHasherV9;
    StorageKey: StorageKey;
    StorageKind: StorageKind;
    StorageMetadataLatest: StorageMetadataLatest;
    StorageMetadataV10: StorageMetadataV10;
    StorageMetadataV11: StorageMetadataV11;
    StorageMetadataV12: StorageMetadataV12;
    StorageMetadataV9: StorageMetadataV9;
    StoredPendingChange: StoredPendingChange;
    StoredSchedule: StoredSchedule;
    StoredState: StoredState;
    StrikeCount: StrikeCount;
    SubId: SubId;
    SyncState: SyncState;
    SystemOrigin: SystemOrigin;
    Tally: Tally;
    TargetIdAuthorization: TargetIdAuthorization;
    TargetIdentities: TargetIdentities;
    TargetIdentity: TargetIdentity;
    TargetTreatment: TargetTreatment;
    TaskAddress: TaskAddress;
    TAssetBalance: TAssetBalance;
    TAssetDepositBalance: TAssetDepositBalance;
    Tax: Tax;
    TeleportAsset: TeleportAsset;
    TemplateDetails: TemplateDetails;
    TemplateMetadata: TemplateMetadata;
    Text: Text;
    Ticker: Ticker;
    TickerRangeProof: TickerRangeProof;
    TickerRegistration: TickerRegistration;
    TickerRegistrationConfig: TickerRegistrationConfig;
    TickerTransferApproval: TickerTransferApproval;
    Timepoint: Timepoint;
    TombstoneContractInfo: TombstoneContractInfo;
    Transact: Transact;
    TransactionPriority: TransactionPriority;
    TransactionValidityError: TransactionValidityError;
    TransferManager: TransferManager;
    TransientValidationData: TransientValidationData;
    TreasuryProposal: TreasuryProposal;
    TrieId: TrieId;
    TrustedFor: TrustedFor;
    TrustedIssuer: TrustedIssuer;
    Type: Type;
    u128: u128;
    U128: U128;
    u16: u16;
    U16: U16;
    u256: u256;
    U256: U256;
    u32: u32;
    U32: U32;
    U32F32: U32F32;
    u64: u64;
    U64: U64;
    u8: u8;
    U8: U8;
    UncleEntryItem: UncleEntryItem;
    UniqueCall: UniqueCall;
    UnknownTransaction: UnknownTransaction;
    UpwardMessage: UpwardMessage;
    Url: Url;
    usize: usize;
    USize: USize;
    ValidationCode: ValidationCode;
    ValidationData: ValidationData;
    ValidationDataType: ValidationDataType;
    ValidationFunctionParams: ValidationFunctionParams;
    ValidatorCount: ValidatorCount;
    ValidatorId: ValidatorId;
    ValidatorIdOf: ValidatorIdOf;
    ValidatorSignature: ValidatorSignature;
    ValidityAttestation: ValidityAttestation;
    Venue: Venue;
    VenueDetails: VenueDetails;
    VenueType: VenueType;
    Version: Version;
    VersionedMultiAsset: VersionedMultiAsset;
    VersionedMultiLocation: VersionedMultiLocation;
    VersionedXcm: VersionedXcm;
    VestingInfo: VestingInfo;
    VestingSchedule: VestingSchedule;
    Vote: Vote;
    VoteByPip: VoteByPip;
    VoteCount: VoteCount;
    VoteCountProposalFound: VoteCountProposalFound;
    VoteIndex: VoteIndex;
    VoterInfo: VoterInfo;
    Votes: Votes;
    VotesTo230: VotesTo230;
    VoteThreshold: VoteThreshold;
    Voting: Voting;
    VotingDelegating: VotingDelegating;
    VotingDirect: VotingDirect;
    VotingDirectVote: VotingDirectVote;
    VotingResult: VotingResult;
    VouchingStatus: VouchingStatus;
    VrfData: VrfData;
    VrfOutput: VrfOutput;
    VrfProof: VrfProof;
    Weight: Weight;
    WeightMultiplier: WeightMultiplier;
    WeightPerClass: WeightPerClass;
    WeightToFeeCoefficient: WeightToFeeCoefficient;
    WinnersData: WinnersData;
    WinnersDataTuple: WinnersDataTuple;
    WinningData: WinningData;
    WinningDataEntry: WinningDataEntry;
    WithdrawAsset: WithdrawAsset;
    WithdrawReasons: WithdrawReasons;
    Xcm: Xcm;
    XcmError: XcmError;
    XcmResult: XcmResult;
  }
}
