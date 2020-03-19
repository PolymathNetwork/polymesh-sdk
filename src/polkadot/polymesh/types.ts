// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Enum, Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { Signature } from '@polkadot/types/interfaces/extrinsics';
import { Balance, Call, H256, H512, Hash, Moment } from '@polkadot/types/interfaces/runtime';
import { bool, Bytes, Text, u8, u16, u32, u64, u128 } from '@polkadot/types/primitive';
import { ITuple } from '@polkadot/types/types';

/** @name AccountKey */
export interface AccountKey extends U8aFixed {}

/** @name AssetIdentifier */
export interface AssetIdentifier extends Text {}

/** @name AssetRule */
export interface AssetRule extends Struct {
  readonly sender_rules: Vec<RuleData>;
  readonly receiver_rules: Vec<RuleData>;
  readonly rule_id: u32;
}

/** @name AssetRules */
export interface AssetRules extends Struct {
  readonly is_paused: bool;
  readonly rules: Vec<AssetRules>;
}

/** @name AssetType */
export interface AssetType extends Enum {
  readonly isEquity: boolean;
  readonly isDebt: boolean;
  readonly isCommodity: boolean;
  readonly isStructuredProduct: boolean;
  readonly isCustom: boolean;
  readonly asCustom: Bytes;
}

/** @name AuthIdentifier */
export interface AuthIdentifier extends Struct {
  readonly signatory: Signatory;
  readonly auth_id: u64;
}

/** @name Authorization */
export interface Authorization extends Struct {
  readonly authorization_data: AuthorizationData;
  readonly authorized_by: Signatory;
  readonly expiry: Option<Moment>;
  readonly auth_id: u64;
}

/** @name AuthorizationData */
export interface AuthorizationData extends Enum {
  readonly isAttestMasterKeyRotation: boolean;
  readonly asAttestMasterKeyRotation: IdentityId;
  readonly isRotateMasterKey: boolean;
  readonly asRotateMasterKey: IdentityId;
  readonly isTransferTicker: boolean;
  readonly asTransferTicker: Ticker;
  readonly isAddMultiSigSigner: boolean;
  readonly isTransferTokenOwnership: boolean;
  readonly asTransferTokenOwnership: Ticker;
  readonly isJoinIdentity: boolean;
  readonly asJoinIdentity: IdentityId;
  readonly isCustom: boolean;
  readonly asCustom: Bytes;
  readonly isNoData: boolean;
}

/** @name AuthorizationNonce */
export interface AuthorizationNonce extends u64 {}

/** @name Ballot */
export interface Ballot extends Struct {
  readonly checkpoint_id: u64;
  readonly voting_start: Moment;
  readonly voting_end: Moment;
  readonly motions: Vec<Motion>;
}

/** @name BridgeTx */
export interface BridgeTx extends Struct {
  readonly nonce: u64;
  readonly recipient: IssueRecipient;
  readonly value: u128;
  readonly tx_hash: H256;
}

/** @name ClaimIdentifier */
export interface ClaimIdentifier extends Struct {
  readonly claim: IdentityClaimData;
  readonly claim_issuer: IdentityId;
}

/** @name Commission */
export interface Commission extends Enum {
  readonly isIndividual: boolean;
  readonly isGlobal: boolean;
  readonly asGlobal: u32;
}

/** @name Compliance */
export interface Compliance extends Enum {
  readonly isPending: boolean;
  readonly isActive: boolean;
}

/** @name Counter */
export interface Counter extends u64 {}

/** @name DidRecord */
export interface DidRecord extends Struct {
  readonly roles: Vec<IdentityRole>;
  readonly master_key: AccountKey;
  readonly signing_items: Vec<SigningItem>;
}

/** @name Dividend */
export interface Dividend extends Struct {
  readonly amount: Balance;
  readonly active: bool;
  readonly maturates_at: Option<u64>;
  readonly expires_at: Option<u64>;
  readonly payout_currency: Option<Ticker>;
  readonly checkpoint_id: u64;
}

/** @name Document */
export interface Document extends Struct {
  readonly name: DocumentName;
  readonly uri: DocumentUri;
  readonly content_hash: DocumentHash;
}

/** @name DocumentHash */
export interface DocumentHash extends Text {}

/** @name DocumentName */
export interface DocumentName extends Text {}

/** @name DocumentUri */
export interface DocumentUri extends Text {}

/** @name FeeOf */
export interface FeeOf extends Balance {}

/** @name FundingRoundName */
export interface FundingRoundName extends Text {}

/** @name IdentifierType */
export interface IdentifierType extends Enum {
  readonly isIsin: boolean;
  readonly isCusip: boolean;
  readonly isCustom: boolean;
  readonly asCustom: Bytes;
}

/** @name IdentityClaim */
export interface IdentityClaim extends Struct {
  readonly claim_issuer: IdentityId;
  readonly issuance_date: Moment;
  readonly last_update_date: Moment;
  readonly expiry: Option<Moment>;
  readonly claim: IdentityClaimData;
}

/** @name IdentityClaimData */
export interface IdentityClaimData extends Enum {
  readonly isAccredited: boolean;
  readonly asAccredited: IdentityId;
  readonly isAffiliate: boolean;
  readonly asAffiliate: IdentityId;
  readonly isBuyLockup: boolean;
  readonly asBuyLockup: IdentityId;
  readonly isSellLockup: boolean;
  readonly asSellLockup: IdentityId;
  readonly isCustomerDueDiligence: boolean;
  readonly isKnowYourCustomer: boolean;
  readonly asKnowYourCustomer: IdentityId;
  readonly isJurisdiction: boolean;
  readonly asJurisdiction: ITuple<[JurisdictionName, IdentityId]>;
  readonly isWhitelisted: boolean;
  readonly asWhitelisted: IdentityId;
  readonly isBlacklisted: boolean;
  readonly asBlacklisted: IdentityId;
  readonly isNoData: boolean;
}

/** @name IdentityId */
export interface IdentityId extends H256 {}

/** @name IdentityRole */
export interface IdentityRole extends Enum {
  readonly isIssuer: boolean;
  readonly isSimpleTokenIssuer: boolean;
  readonly isValidator: boolean;
  readonly isClaimIssuer: boolean;
  readonly isInvestor: boolean;
  readonly isNodeRunner: boolean;
  readonly isPm: boolean;
  readonly isCddamlClaimIssuer: boolean;
  readonly isAccreditedInvestorClaimIssuer: boolean;
  readonly isVerifiedIdentityClaimIssuer: boolean;
}

/** @name Investment */
export interface Investment extends Struct {
  readonly investor_did: IdentityId;
  readonly amount_paid: Balance;
  readonly tokens_purchased: Balance;
  readonly last_purchase_date: Moment;
}

/** @name IssueRecipient */
export interface IssueRecipient extends Enum {
  readonly isAccount: boolean;
  readonly asAccount: AccountKey;
  readonly isIdentity: boolean;
  readonly asIdentity: IdentityId;
}

/** @name JurisdictionName */
export interface JurisdictionName extends Text {}

/** @name Link */
export interface Link extends Struct {
  readonly link_data: LinkData;
  readonly expiry: Option<Moment>;
  readonly link_id: u64;
}

/** @name LinkData */
export interface LinkData extends Enum {
  readonly isDocumentOwned: boolean;
  readonly asDocumentOwned: Document;
  readonly isTickerOwned: boolean;
  readonly asTickerOwned: Ticker;
  readonly isTokenOwned: boolean;
  readonly asTokenOwned: Ticker;
}

/** @name LinkedKeyInfo */
export interface LinkedKeyInfo extends Enum {
  readonly isUnique: boolean;
  readonly asUnique: IdentityId;
  readonly isGroup: boolean;
  readonly asGroup: Vec<IdentityId>;
}

/** @name Memo */
export interface Memo extends U8aFixed {}

/** @name MIP */
export interface MIP extends Struct {
  readonly index: MipsIndex;
  readonly proposal: Call;
}

/** @name MipDescription */
export interface MipDescription extends Text {}

/** @name MipsIndex */
export interface MipsIndex extends u32 {}

/** @name MipsMetadata */
export interface MipsMetadata extends Struct {
  readonly index: u32;
  readonly end: u64;
  readonly proposal_hash: Hash;
  readonly url: Option<Url>;
}

/** @name MipsPriority */
export interface MipsPriority extends Enum {
  readonly isHigh: boolean;
  readonly isNormal: boolean;
}

/** @name Motion */
export interface Motion extends Struct {
  readonly title: MotionTitle;
  readonly info_link: MotionInfoLink;
  readonly choices: Vec<MotionTitle>;
}

/** @name MotionInfoLink */
export interface MotionInfoLink extends Text {}

/** @name MotionTitle */
export interface MotionTitle extends Text {}

/** @name OffChainSignature */
export interface OffChainSignature extends H512 {}

/** @name OfflineSlashingParams */
export interface OfflineSlashingParams extends Struct {
  readonly max_offline_percent: u32;
  readonly constant: u32;
  readonly max_slash_percent: u32;
}

/** @name PendingTx */
export interface PendingTx extends Struct {
  readonly did: IdentityId;
  readonly bridge_tx: BridgeTx;
}

/** @name Permission */
export interface Permission extends Enum {
  readonly isFull: boolean;
  readonly isAdmin: boolean;
  readonly isOperator: boolean;
  readonly isSpendFunds: boolean;
}

/** @name PermissionedValidator */
export interface PermissionedValidator extends Struct {
  readonly compliance: Compliance;
}

/** @name PolymeshReferendumInfo */
export interface PolymeshReferendumInfo extends Struct {
  readonly index: MipsIndex;
  readonly priority: MipsPriority;
  readonly proposal_hash: Hash;
}

/** @name PolymeshVotes */
export interface PolymeshVotes extends Struct {
  readonly index: u32;
  readonly ayes: Vec<ITuple<[IdentityId, Balance]>>;
  readonly nays: Vec<ITuple<[IdentityId, Balance]>>;
}

/** @name PreAuthorizedKeyInfo */
export interface PreAuthorizedKeyInfo extends Struct {
  readonly target_id: IdentityId;
  readonly signing_item: SigningItem;
}

/** @name ProportionMatch */
export interface ProportionMatch extends Enum {
  readonly isAtLeast: boolean;
  readonly isMoreThan: boolean;
}

/** @name RestrictionResult */
export interface RestrictionResult extends Enum {
  readonly isValid: boolean;
  readonly isInvalid: boolean;
  readonly isForceValid: boolean;
}

/** @name RuleData */
export interface RuleData extends Struct {
  readonly claim: IdentityClaimData;
  readonly trusted_issuers: Vec<IdentityId>;
  readonly rule_type: RuleType;
}

/** @name RuleType */
export interface RuleType extends Enum {
  readonly isClaimIsPresent: boolean;
  readonly isClaimIsAbsent: boolean;
}

/** @name SecurityToken */
export interface SecurityToken extends Struct {
  readonly name: TokenName;
  readonly total_supply: Balance;
  readonly owner_did: IdentityId;
  readonly divisible: bool;
  readonly asset_type: AssetType;
  readonly link_id: u64;
}

/** @name Signatory */
export interface Signatory extends Enum {
  readonly isIdentity: boolean;
  readonly asIdentity: IdentityId;
  readonly isAccountKey: boolean;
  readonly asAccountKey: AccountKey;
}

/** @name SignatoryType */
export interface SignatoryType extends Enum {
  readonly isExternal: boolean;
  readonly isIdentity: boolean;
  readonly isMultiSig: boolean;
  readonly isRelayer: boolean;
}

/** @name SignData */
export interface SignData extends Struct {
  readonly custodian_did: IdentityId;
  readonly holder_did: IdentityId;
  readonly ticker: Ticker;
  readonly value: Balance;
  readonly nonce: u16;
}

/** @name SigningItem */
export interface SigningItem extends Struct {
  readonly signer: Signatory;
  readonly signer_type: SignatoryType;
  readonly permissions: Vec<Permission>;
}

/** @name SigningItemWithAuth */
export interface SigningItemWithAuth extends Struct {
  readonly signing_item: SigningItem;
  readonly auth_signature: Signature;
}

/** @name SimpleTokenRecord */
export interface SimpleTokenRecord extends Struct {
  readonly ticker: Ticker;
  readonly total_supply: Balance;
  readonly owner_did: IdentityId;
}

/** @name SmartExtension */
export interface SmartExtension extends Struct {
  readonly extension_type: SmartExtensionType;
  readonly extension_name: SmartExtensionName;
  readonly extension_id: IdentityId;
  readonly is_archive: bool;
}

/** @name SmartExtensionName */
export interface SmartExtensionName extends Text {}

/** @name SmartExtensionType */
export interface SmartExtensionType extends Enum {
  readonly isTransferManager: boolean;
  readonly isOfferings: boolean;
  readonly isCustom: boolean;
  readonly asCustom: Bytes;
}

/** @name STO */
export interface STO extends Struct {
  readonly beneficiary_did: IdentityId;
  readonly cap: Balance;
  readonly sold: Balance;
  readonly rate: u64;
  readonly start_date: Moment;
  readonly end_date: Moment;
  readonly active: bool;
}

/** @name TargetIdAuthorization */
export interface TargetIdAuthorization extends Struct {
  readonly target_id: IdentityId;
  readonly nonce: u64;
  readonly expires_at: Moment;
}

/** @name Ticker */
export interface Ticker extends U8aFixed {}

/** @name TickerRegistration */
export interface TickerRegistration extends Struct {
  readonly owner: IdentityId;
  readonly expiry: Option<Moment>;
  readonly link_id: u64;
}

/** @name TickerRegistrationConfig */
export interface TickerRegistrationConfig extends Struct {
  readonly max_ticker_length: u8;
  readonly registration_length: Option<Moment>;
}

/** @name TickerTransferApproval */
export interface TickerTransferApproval extends Struct {
  readonly authorized_by: IdentityId;
  readonly next_ticker: Option<Ticker>;
  readonly previous_ticker: Option<Ticker>;
}

/** @name TokenName */
export interface TokenName extends Text {}

/** @name Url */
export interface Url extends Text {}