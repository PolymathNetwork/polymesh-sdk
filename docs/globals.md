# @polymathnetwork/polymesh-sdk

## Index

### Enumerations

* [AffirmationStatus](enums/affirmationstatus.md)
* [AuthorizationType](enums/authorizationtype.md)
* [CalendarUnit](enums/calendarunit.md)
* [ClaimType](enums/claimtype.md)
* [ConditionTarget](enums/conditiontarget.md)
* [ConditionType](enums/conditiontype.md)
* [CountryCode](enums/countrycode.md)
* [ErrorCode](enums/errorcode.md)
* [InstructionStatus](enums/instructionstatus.md)
* [InstructionType](enums/instructiontype.md)
* [KnownTokenType](enums/knowntokentype.md)
* [ProposalStage](enums/proposalstage.md)
* [RoleType](enums/roletype.md)
* [ScopeType](enums/scopetype.md)
* [StoBalanceStatus](enums/stobalancestatus.md)
* [StoSaleStatus](enums/stosalestatus.md)
* [StoTimingStatus](enums/stotimingstatus.md)
* [TickerReservationStatus](enums/tickerreservationstatus.md)
* [TokenIdentifierType](enums/tokenidentifiertype.md)
* [TransactionArgumentType](enums/transactionargumenttype.md)
* [TransactionQueueStatus](enums/transactionqueuestatus.md)
* [TransactionStatus](enums/transactionstatus.md)
* [TransferStatus](enums/transferstatus.md)
* [TxGroup](enums/txgroup.md)
* [VenueType](enums/venuetype.md)

### Classes

* [Account](classes/account.md)
* [AuthorizationRequest](classes/authorizationrequest.md)
* [Authorizations](classes/authorizations.md)
* [Checkpoint](classes/checkpoint.md)
* [CheckpointSchedule](classes/checkpointschedule.md)
* [Checkpoints](classes/checkpoints.md)
* [Claims](classes/claims.md)
* [Compliance](classes/compliance.md)
* [Context](classes/context.md)
* [Count](classes/count.md)
* [CurrentAccount](classes/currentaccount.md)
* [CurrentIdentity](classes/currentidentity.md)
* [DefaultPortfolio](classes/defaultportfolio.md)
* [DefaultTrustedClaimIssuer](classes/defaulttrustedclaimissuer.md)
* [Documents](classes/documents.md)
* [Entity](classes/entity.md)
* [Identity](classes/identity.md)
* [IdentityAuthorizations](classes/identityauthorizations.md)
* [Instruction](classes/instruction.md)
* [Issuance](classes/issuance.md)
* [Middleware](classes/middleware.md)
* [NumberedPortfolio](classes/numberedportfolio.md)
* [Offerings](classes/offerings.md)
* [Percentage](classes/percentage.md)
* [Polymesh](classes/polymesh.md)
* [PolymeshError](classes/polymesherror.md)
* [PolymeshTransaction](classes/polymeshtransaction.md)
* [PolymeshTransactionBase](classes/polymeshtransactionbase.md)
* [PolymeshTransactionBatch](classes/polymeshtransactionbatch.md)
* [Portfolio](classes/portfolio.md)
* [Portfolios](classes/portfolios.md)
* [Requirements](classes/requirements.md)
* [SecurityToken](classes/securitytoken.md)
* [Settlements](classes/settlements.md)
* [Sto](classes/sto.md)
* [TickerReservation](classes/tickerreservation.md)
* [TokenHolders](classes/tokenholders.md)
* [TransactionQueue](classes/transactionqueue.md)
* [TransferRestrictionBase](classes/transferrestrictionbase.md)
* [TransferRestrictions](classes/transferrestrictions.md)
* [TrustedClaimIssuers](classes/trustedclaimissuers.md)
* [Venue](classes/venue.md)

### Interfaces

* [AccountBalance](interfaces/accountbalance.md)
* [AccountData](interfaces/accountdata.md)
* [ActiveTransferRestrictions](interfaces/activetransferrestrictions.md)
* [AddBatchTransactionOpts](interfaces/addbatchtransactionopts.md)
* [AddClaimsParams](interfaces/addclaimsparams.md)
* [AddInstructionParams](interfaces/addinstructionparams.md)
* [AddInvestorUniquenessClaimParams](interfaces/addinvestoruniquenessclaimparams.md)
* [AddTransactionOpts](interfaces/addtransactionopts.md)
* [AddTransactionOptsBase](interfaces/addtransactionoptsbase.md)
* [ArrayTransactionArgument](interfaces/arraytransactionargument.md)
* [CalendarPeriod](interfaces/calendarperiod.md)
* [CddProviderRole](interfaces/cddproviderrole.md)
* [CheckpointWithCreationDate](interfaces/checkpointwithcreationdate.md)
* [ClaimData](interfaces/claimdata.md)
* [ClaimScope](interfaces/claimscope.md)
* [ClaimTarget](interfaces/claimtarget.md)
* [ComplexTransactionArgument](interfaces/complextransactionargument.md)
* [ConditionCompliance](interfaces/conditioncompliance.md)
* [ConnectParamsBase](interfaces/connectparamsbase.md)
* [ConstructorParams](interfaces/constructorparams.md)
* [ConsumeParams](interfaces/consumeparams.md)
* [ControllerTransferParams](interfaces/controllertransferparams.md)
* [CountTransferRestriction](interfaces/counttransferrestriction.md)
* [CountTransferRestrictionInput](interfaces/counttransferrestrictioninput.md)
* [CreateCheckpointScheduleParams](interfaces/createcheckpointscheduleparams.md)
* [CreateSecurityTokenParams](interfaces/createsecuritytokenparams.md)
* [CreateVenueParams](interfaces/createvenueparams.md)
* [DeletePortfolioParams](interfaces/deleteportfolioparams.md)
* [EditClaimsParams](interfaces/editclaimsparams.md)
* [EventIdentifier](interfaces/eventidentifier.md)
* [ExtrinsicData](interfaces/extrinsicdata.md)
* [Fees](interfaces/fees.md)
* [HistoricSettlement](interfaces/historicsettlement.md)
* [IdentityBalance](interfaces/identitybalance.md)
* [IdentityWithClaims](interfaces/identitywithclaims.md)
* [InstructionAffirmation](interfaces/instructionaffirmation.md)
* [InvestInStoParams](interfaces/investinstoparams.md)
* [Investment](interfaces/investment.md)
* [InviteAccountParams](interfaces/inviteaccountparams.md)
* [IssueTokensParams](interfaces/issuetokensparams.md)
* [KeyringPair](interfaces/keyringpair.md)
* [Leg](interfaces/leg.md)
* [MiddlewareConfig](interfaces/middlewareconfig.md)
* [ModifyInstructionAffirmationParams](interfaces/modifyinstructionaffirmationparams.md)
* [ModifyPrimaryIssuanceAgentParams](interfaces/modifyprimaryissuanceagentparams.md)
* [ModifySignerPermissionsParams](interfaces/modifysignerpermissionsparams.md)
* [ModifyTokenTrustedClaimIssuersAddSetParams](interfaces/modifytokentrustedclaimissuersaddsetparams.md)
* [ModifyTokenTrustedClaimIssuersRemoveParams](interfaces/modifytokentrustedclaimissuersremoveparams.md)
* [MoveFundsParams](interfaces/movefundsparams.md)
* [NetworkProperties](interfaces/networkproperties.md)
* [PaginationOptions](interfaces/paginationoptions.md)
* [PercentageTransferRestriction](interfaces/percentagetransferrestriction.md)
* [PercentageTransferRestrictionInput](interfaces/percentagetransferrestrictioninput.md)
* [Permissions](interfaces/permissions.md)
* [PermissionsLike](interfaces/permissionslike.md)
* [PlainTransactionArgument](interfaces/plaintransactionargument.md)
* [PortfolioBalance](interfaces/portfoliobalance.md)
* [PortfolioCustodianRole](interfaces/portfoliocustodianrole.md)
* [PortfolioMovement](interfaces/portfoliomovement.md)
* [ProcedureAuthorizationStatus](interfaces/procedureauthorizationstatus.md)
* [ProposalDetails](interfaces/proposaldetails.md)
* [ProposalTimeFrames](interfaces/proposaltimeframes.md)
* [ProposalVote](interfaces/proposalvote.md)
* [RedeemTokenParams](interfaces/redeemtokenparams.md)
* [RegisterIdentityParams](interfaces/registeridentityparams.md)
* [RemoveCheckpointScheduleParams](interfaces/removecheckpointscheduleparams.md)
* [RemoveSecondaryKeysParams](interfaces/removesecondarykeysparams.md)
* [RenamePortfolioParams](interfaces/renameportfolioparams.md)
* [Requirement](interfaces/requirement.md)
* [RequirementCompliance](interfaces/requirementcompliance.md)
* [ReserveTickerParams](interfaces/reservetickerparams.md)
* [ResultSet](interfaces/resultset.md)
* [RevokeClaimsParams](interfaces/revokeclaimsparams.md)
* [Scope](interfaces/scope.md)
* [SecondaryKey](interfaces/secondarykey.md)
* [SecurityTokenDetails](interfaces/securitytokendetails.md)
* [SetAssetRequirementsParams](interfaces/setassetrequirementsparams.md)
* [SetCountTransferRestrictionsParams](interfaces/setcounttransferrestrictionsparams.md)
* [SetCustodianParams](interfaces/setcustodianparams.md)
* [SetPercentageTransferRestrictionsParams](interfaces/setpercentagetransferrestrictionsparams.md)
* [SetTokenDocumentsParams](interfaces/settokendocumentsparams.md)
* [SettlementLeg](interfaces/settlementleg.md)
* [SimpleEnumTransactionArgument](interfaces/simpleenumtransactionargument.md)
* [StoDetails](interfaces/stodetails.md)
* [StoStatus](interfaces/stostatus.md)
* [StoTier](interfaces/stotier.md)
* [StoWithDetails](interfaces/stowithdetails.md)
* [TickerOwnerRole](interfaces/tickerownerrole.md)
* [TickerReservationDetails](interfaces/tickerreservationdetails.md)
* [Tier](interfaces/tier.md)
* [ToggleFreezeStoParams](interfaces/togglefreezestoparams.md)
* [ToggleFreezeTransfersParams](interfaces/togglefreezetransfersparams.md)
* [TogglePauseRequirementsParams](interfaces/togglepauserequirementsparams.md)
* [TokenDocument](interfaces/tokendocument.md)
* [TokenHolderOptions](interfaces/tokenholderoptions.md)
* [TokenHolderProperties](interfaces/tokenholderproperties.md)
* [TokenIdentifier](interfaces/tokenidentifier.md)
* [TokenOwnerRole](interfaces/tokenownerrole.md)
* [TokenPiaRole](interfaces/tokenpiarole.md)
* [TransferPolyXParams](interfaces/transferpolyxparams.md)
* [TransferRestrictionInputBase](interfaces/transferrestrictioninputbase.md)
* [TransferTokenOwnershipParams](interfaces/transfertokenownershipparams.md)
* [TrustedClaimIssuer](interfaces/trustedclaimissuer.md)
* [UiKeyring](interfaces/uikeyring.md)
* [UniqueIdentifiers](interfaces/uniqueidentifiers.md)
* [VenueDetails](interfaces/venuedetails.md)
* [VenueOwnerRole](interfaces/venueownerrole.md)

### Type aliases

* [AddCountTransferRestrictionParams](globals.md#addcounttransferrestrictionparams)
* [AddPercentageTransferRestrictionParams](globals.md#addpercentagetransferrestrictionparams)
* [AddRestrictionParams](globals.md#addrestrictionparams)
* [Authorization](globals.md#authorization)
* [CddClaim](globals.md#cddclaim)
* [Claim](globals.md#claim)
* [CommonKeyring](globals.md#commonkeyring)
* [Condition](globals.md#condition)
* [ConditionBase](globals.md#conditionbase)
* [Ensured](globals.md#ensured)
* [GetReturnType](globals.md#getreturntype)
* [IdentityCondition](globals.md#identitycondition)
* [InstructionDetails](globals.md#instructiondetails)
* [InvestorUniquenessClaim](globals.md#investoruniquenessclaim)
* [ModifyClaimsParams](globals.md#modifyclaimsparams)
* [ModifyStoTimesParams](globals.md#modifystotimesparams)
* [ModifyTokenParams](globals.md#modifytokenparams)
* [MultiClaimCondition](globals.md#multiclaimcondition)
* [Mutable](globals.md#mutable)
* [NextKey](globals.md#nextkey)
* [PortfolioLike](globals.md#portfoliolike)
* [PrimaryIssuanceAgentCondition](globals.md#primaryissuanceagentcondition)
* [Role](globals.md#role)
* [ScopedClaim](globals.md#scopedclaim)
* [SetRestrictionsParams](globals.md#setrestrictionsparams)
* [SetTransferRestrictionsParams](globals.md#settransferrestrictionsparams)
* [Signer](globals.md#signer)
* [SingleClaimCondition](globals.md#singleclaimcondition)
* [SubCallback](globals.md#subcallback)
* [TokenType](globals.md#tokentype)
* [TransactionArgument](globals.md#transactionargument)
* [UnionOfProcedures](globals.md#unionofprocedures)
* [UnscopedClaim](globals.md#unscopedclaim)
* [UnsubCallback](globals.md#unsubcallback)

### Variables

* [notExistsMessage](globals.md#const-notexistsmessage)

### Functions

* [areSameClaimIssuers](globals.md#const-aresameclaimissuers)
* [areSameClaims](globals.md#const-aresameclaims)
* [convertArgsToRaw](globals.md#const-convertargstoraw)
* [createProcedureMethod](globals.md#createproceduremethod)
* [findClaimsByOtherIssuers](globals.md#const-findclaimsbyotherissuers)
* [findPositiveBalanceIuClaims](globals.md#const-findpositivebalanceiuclaims)
* [tickerToDid](globals.md#tickertodid)
* [tuple](globals.md#const-tuple)
* [txGroupToTxTags](globals.md#txgrouptotxtags)

### Object literals

* [ErrorMessagesPerCode](globals.md#const-errormessagespercode)

## Type aliases

###  AddCountTransferRestrictionParams

Ƭ **AddCountTransferRestrictionParams**: *[CountTransferRestrictionInput](interfaces/counttransferrestrictioninput.md) & object*

*Defined in [src/api/procedures/addTransferRestriction.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/procedures/addTransferRestriction.ts#L24)*

___

###  AddPercentageTransferRestrictionParams

Ƭ **AddPercentageTransferRestrictionParams**: *[PercentageTransferRestrictionInput](interfaces/percentagetransferrestrictioninput.md) & object*

*Defined in [src/api/procedures/addTransferRestriction.ts:28](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/procedures/addTransferRestriction.ts#L28)*

___

###  AddRestrictionParams

Ƭ **AddRestrictionParams**: *Omit‹T extends Count ? AddCountTransferRestrictionParams : AddPercentageTransferRestrictionParams, "type"›*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:29](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L29)*

___

###  Authorization

Ƭ **Authorization**: *object | object | object | object*

*Defined in [src/types/index.ts:233](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L233)*

Authorization request data corresponding to type

___

###  CddClaim

Ƭ **CddClaim**: *object*

*Defined in [src/types/index.ts:279](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L279)*

#### Type declaration:

* **id**: *string*

* **type**: *[CustomerDueDiligence](enums/claimtype.md#customerduediligence)*

___

###  Claim

Ƭ **Claim**: *[ScopedClaim](globals.md#scopedclaim) | [UnscopedClaim](globals.md#unscopedclaim)*

*Defined in [src/types/index.ts:304](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L304)*

___

###  CommonKeyring

Ƭ **CommonKeyring**: *Pick‹Keyring, "getPair" | "getPairs" | "addFromSeed" | "addFromUri" | "addFromMnemonic"›*

*Defined in [src/types/index.ts:488](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L488)*

___

###  Condition

Ƭ **Condition**: *[SingleClaimCondition](globals.md#singleclaimcondition) | [MultiClaimCondition](globals.md#multiclaimcondition) | [IdentityCondition](globals.md#identitycondition) | [PrimaryIssuanceAgentCondition](globals.md#primaryissuanceagentcondition)*

*Defined in [src/types/index.ts:390](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L390)*

___

###  ConditionBase

Ƭ **ConditionBase**: *object*

*Defined in [src/types/index.ts:369](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L369)*

#### Type declaration:

* **target**: *[ConditionTarget](enums/conditiontarget.md)*

* **trustedClaimIssuers**? : *[TrustedClaimIssuer](interfaces/trustedclaimissuer.md)[]*

___

###  Ensured

Ƭ **Ensured**: *Required‹Pick‹T, K››*

*Defined in [src/types/index.ts:481](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L481)*

___

###  GetReturnType

Ƭ **GetReturnType**: *[ActiveTransferRestrictions](interfaces/activetransferrestrictions.md)‹T extends Count ? CountTransferRestriction : PercentageTransferRestriction›*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:43](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L43)*

___

###  IdentityCondition

Ƭ **IdentityCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:381](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L381)*

___

###  InstructionDetails

Ƭ **InstructionDetails**: *object & object | object*

*Defined in [src/api/entities/Instruction/types.ts:15](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Instruction/types.ts#L15)*

___

###  InvestorUniquenessClaim

Ƭ **InvestorUniquenessClaim**: *object*

*Defined in [src/types/index.ts:281](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L281)*

#### Type declaration:

* **cddId**: *string*

* **scope**: *[Scope](interfaces/scope.md)*

* **scopeId**: *string*

* **type**: *[InvestorUniqueness](enums/claimtype.md#investoruniqueness)*

___

###  ModifyClaimsParams

Ƭ **ModifyClaimsParams**: *[AddClaimsParams](interfaces/addclaimsparams.md) | [EditClaimsParams](interfaces/editclaimsparams.md) | [RevokeClaimsParams](interfaces/revokeclaimsparams.md)*

*Defined in [src/api/procedures/modifyClaims.ts:54](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/procedures/modifyClaims.ts#L54)*

___

###  ModifyStoTimesParams

Ƭ **ModifyStoTimesParams**: *object | object | object*

*Defined in [src/api/procedures/modifyStoTimes.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/procedures/modifyStoTimes.ts#L9)*

___

###  ModifyTokenParams

Ƭ **ModifyTokenParams**: *object | object | object | object*

*Defined in [src/api/procedures/modifyToken.ts:13](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/procedures/modifyToken.ts#L13)*

___

###  MultiClaimCondition

Ƭ **MultiClaimCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:376](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L376)*

___

###  Mutable

Ƭ **Mutable**: *object*

*Defined in [src/types/utils/index.ts:3](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/utils/index.ts#L3)*

#### Type declaration:

___

###  NextKey

Ƭ **NextKey**: *string | number | null*

*Defined in [src/types/index.ts:517](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L517)*

___

###  PortfolioLike

Ƭ **PortfolioLike**: *string | [Identity](classes/identity.md) | [NumberedPortfolio](classes/numberedportfolio.md) | [DefaultPortfolio](classes/defaultportfolio.md) | object*

*Defined in [src/types/index.ts:722](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L722)*

___

###  PrimaryIssuanceAgentCondition

Ƭ **PrimaryIssuanceAgentCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:386](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L386)*

___

###  Role

Ƭ **Role**: *[TickerOwnerRole](interfaces/tickerownerrole.md) | [TokenOwnerRole](interfaces/tokenownerrole.md) | [TokenPiaRole](interfaces/tokenpiarole.md) | [CddProviderRole](interfaces/cddproviderrole.md) | [VenueOwnerRole](interfaces/venueownerrole.md) | [PortfolioCustodianRole](interfaces/portfoliocustodianrole.md)*

*Defined in [src/types/index.ts:160](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L160)*

___

###  ScopedClaim

Ƭ **ScopedClaim**: *object | [InvestorUniquenessClaim](globals.md#investoruniquenessclaim) | object*

*Defined in [src/types/index.ts:288](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L288)*

___

###  SetRestrictionsParams

Ƭ **SetRestrictionsParams**: *Omit‹T extends Count ? SetCountTransferRestrictionsParams : SetPercentageTransferRestrictionsParams, "type"›*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L36)*

___

###  SetTransferRestrictionsParams

Ƭ **SetTransferRestrictionsParams**: *object & [SetCountTransferRestrictionsParams](interfaces/setcounttransferrestrictionsparams.md) | [SetPercentageTransferRestrictionsParams](interfaces/setpercentagetransferrestrictionsparams.md)*

*Defined in [src/api/procedures/setTransferRestrictions.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/procedures/setTransferRestrictions.ts#L36)*

___

###  Signer

Ƭ **Signer**: *[Identity](classes/identity.md) | [Account](classes/account.md)*

*Defined in [src/types/index.ts:616](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L616)*

___

###  SingleClaimCondition

Ƭ **SingleClaimCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:371](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L371)*

___

###  SubCallback

Ƭ **SubCallback**: *function*

*Defined in [src/types/index.ts:477](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L477)*

#### Type declaration:

▸ (`result`: T): *void | Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`result` | T |

___

###  TokenType

Ƭ **TokenType**: *[KnownTokenType](enums/knowntokentype.md) | object*

*Defined in [src/types/index.ts:183](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L183)*

Type of security that the token represents

___

###  TransactionArgument

Ƭ **TransactionArgument**: *object & [PlainTransactionArgument](interfaces/plaintransactionargument.md) | [ArrayTransactionArgument](interfaces/arraytransactionargument.md) | [SimpleEnumTransactionArgument](interfaces/simpleenumtransactionargument.md) | [ComplexTransactionArgument](interfaces/complextransactionargument.md)*

*Defined in [src/types/index.ts:605](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L605)*

___

###  UnionOfProcedures

Ƭ **UnionOfProcedures**: *Args extends unknown ? Procedure‹Args, ReturnValue, Storage› : never*

*Defined in [src/types/utils/index.ts:7](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/utils/index.ts#L7)*

___

###  UnscopedClaim

Ƭ **UnscopedClaim**: *object | [CddClaim](globals.md#cddclaim)*

*Defined in [src/types/index.ts:302](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L302)*

___

###  UnsubCallback

Ƭ **UnsubCallback**: *function*

*Defined in [src/types/index.ts:479](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L479)*

#### Type declaration:

▸ (): *void*

## Variables

### `Const` notExistsMessage

• **notExistsMessage**: *"Instruction no longer exists. This means it was already executed/rejected (execution might have failed)"* = "Instruction no longer exists. This means it was already executed/rejected (execution might have failed)"

*Defined in [src/api/entities/Instruction/index.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Instruction/index.ts#L40)*

## Functions

### `Const` areSameClaimIssuers

▸ **areSameClaimIssuers**(`currentClaimIssuers`: [TrustedClaimIssuer](interfaces/trustedclaimissuer.md)[], `claimIssuers`: ModifyTokenTrustedClaimIssuersAddSetParams["claimIssuers"]): *boolean*

*Defined in [src/api/procedures/modifyTokenTrustedClaimIssuers.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/procedures/modifyTokenTrustedClaimIssuers.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`currentClaimIssuers` | [TrustedClaimIssuer](interfaces/trustedclaimissuer.md)[] |
`claimIssuers` | ModifyTokenTrustedClaimIssuersAddSetParams["claimIssuers"] |

**Returns:** *boolean*

___

### `Const` areSameClaims

▸ **areSameClaims**(`claim`: [Claim](globals.md#claim), `__namedParameters`: object): *boolean*

*Defined in [src/api/procedures/modifyClaims.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/procedures/modifyClaims.ts#L65)*

**Parameters:**

▪ **claim**: *[Claim](globals.md#claim)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`scope` | Falsyable‹[Scope](interfaces/scope.md)› |
`type` | ClaimTypeEnum |

**Returns:** *boolean*

___

### `Const` convertArgsToRaw

▸ **convertArgsToRaw**(`claimIssuers`: ModifyTokenTrustedClaimIssuersAddSetParams["claimIssuers"], `rawTicker`: Ticker, `context`: [Context](classes/context.md)): *object*

*Defined in [src/api/procedures/modifyTokenTrustedClaimIssuers.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/procedures/modifyTokenTrustedClaimIssuers.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`claimIssuers` | ModifyTokenTrustedClaimIssuersAddSetParams["claimIssuers"] |
`rawTicker` | Ticker |
`context` | [Context](classes/context.md) |

**Returns:** *object*

* **claimIssuersToAdd**: *[Ticker, TrustedIssuer][]*

* **inputDids**: *string[]*

___

###  createProcedureMethod

▸ **createProcedureMethod**‹**MethodArgs**, **ProcedureArgs**, **ReturnValue**, **Storage**›(`getProcedureAndArgs`: function, `context`: [Context](classes/context.md)): *ProcedureMethod‹MethodArgs, ReturnValue›*

*Defined in [src/utils/internal.ts:377](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/utils/internal.ts#L377)*

Create a method that prepares a procedure

**Type parameters:**

▪ **MethodArgs**

▪ **ProcedureArgs**: *unknown*

▪ **ReturnValue**

▪ **Storage**

**Parameters:**

▪ **getProcedureAndArgs**: *function*

▸ (`args`: MethodArgs): *[[UnionOfProcedures](globals.md#unionofprocedures)‹ProcedureArgs, ReturnValue, Storage› | Procedure‹ProcedureArgs, ReturnValue, Storage›, ProcedureArgs]*

**Parameters:**

Name | Type |
------ | ------ |
`args` | MethodArgs |

▪ **context**: *[Context](classes/context.md)*

**Returns:** *ProcedureMethod‹MethodArgs, ReturnValue›*

___

### `Const` findClaimsByOtherIssuers

▸ **findClaimsByOtherIssuers**(`claims`: [ClaimTarget](interfaces/claimtarget.md)[], `claimsByDid`: Record‹string, MiddlewareClaim[]›): *[Claim](globals.md#claim)[]*

*Defined in [src/api/procedures/modifyClaims.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/procedures/modifyClaims.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`claims` | [ClaimTarget](interfaces/claimtarget.md)[] |
`claimsByDid` | Record‹string, MiddlewareClaim[]› |

**Returns:** *[Claim](globals.md#claim)[]*

___

### `Const` findPositiveBalanceIuClaims

▸ **findPositiveBalanceIuClaims**(`claims`: [ClaimTarget](interfaces/claimtarget.md)[], `context`: [Context](classes/context.md)): *Promise‹[Claim](globals.md#claim)[]›*

*Defined in [src/api/procedures/modifyClaims.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/procedures/modifyClaims.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`claims` | [ClaimTarget](interfaces/claimtarget.md)[] |
`context` | [Context](classes/context.md) |

**Returns:** *Promise‹[Claim](globals.md#claim)[]›*

___

###  tickerToDid

▸ **tickerToDid**(`ticker`: string): *string*

*Defined in [src/utils/conversion.ts:187](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/utils/conversion.ts#L187)*

Generate a Security Token's DID from a ticker

**Parameters:**

Name | Type |
------ | ------ |
`ticker` | string |

**Returns:** *string*

___

### `Const` tuple

▸ **tuple**‹**T**›(...`args`: T): *T*

*Defined in [src/types/utils/index.ts:16](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/utils/index.ts#L16)*

Create a literal tuple type from a list of arguments

**Type parameters:**

▪ **T**: *unknown[]*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | T | values to turn into a tuple  |

**Returns:** *T*

___

###  txGroupToTxTags

▸ **txGroupToTxTags**(`group`: [TxGroup](enums/txgroup.md)): *TxTag[]*

*Defined in [src/utils/conversion.ts:531](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/utils/conversion.ts#L531)*

Retrieve every Transaction Tag associated to a Transaction Group

**Parameters:**

Name | Type |
------ | ------ |
`group` | [TxGroup](enums/txgroup.md) |

**Returns:** *TxTag[]*

## Object literals

### `Const` ErrorMessagesPerCode

### ▪ **ErrorMessagesPerCode**: *object*

*Defined in [src/base/PolymeshError.ts:3](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshError.ts#L3)*

###  [ErrorCode.TransactionAborted]

• **[ErrorCode.TransactionAborted]**: *string* = "The transaction was removed from the transaction pool. This might mean that it was malformed (nonce too large/nonce too small/duplicated or invalid transaction)"

*Defined in [src/base/PolymeshError.ts:7](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshError.ts#L7)*

###  [ErrorCode.TransactionRejectedByUser]

• **[ErrorCode.TransactionRejectedByUser]**: *string* = "The user canceled the transaction signature"

*Defined in [src/base/PolymeshError.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshError.ts#L9)*

###  [ErrorCode.TransactionReverted]

• **[ErrorCode.TransactionReverted]**: *string* = "The transaction execution reverted due to an error"

*Defined in [src/base/PolymeshError.ts:6](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshError.ts#L6)*
