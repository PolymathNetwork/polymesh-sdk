# Class: SecurityToken

Class used to manage all the Security Token functionality

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **SecurityToken**

## Index

### Properties

* [checkpoints](securitytoken.md#checkpoints)
* [compliance](securitytoken.md#compliance)
* [context](securitytoken.md#protected-context)
* [controllerTransfer](securitytoken.md#controllertransfer)
* [did](securitytoken.md#did)
* [documents](securitytoken.md#documents)
* [freeze](securitytoken.md#freeze)
* [issuance](securitytoken.md#issuance)
* [modify](securitytoken.md#modify)
* [modifyPrimaryIssuanceAgent](securitytoken.md#modifyprimaryissuanceagent)
* [offerings](securitytoken.md#offerings)
* [redeem](securitytoken.md#redeem)
* [removePrimaryIssuanceAgent](securitytoken.md#removeprimaryissuanceagent)
* [settlements](securitytoken.md#settlements)
* [ticker](securitytoken.md#ticker)
* [tokenHolders](securitytoken.md#tokenholders)
* [transferOwnership](securitytoken.md#transferownership)
* [transferRestrictions](securitytoken.md#transferrestrictions)
* [unfreeze](securitytoken.md#unfreeze)
* [uuid](securitytoken.md#uuid)

### Methods

* [createdAt](securitytoken.md#createdat)
* [currentFundingRound](securitytoken.md#currentfundinground)
* [details](securitytoken.md#details)
* [getIdentifiers](securitytoken.md#getidentifiers)
* [investorCount](securitytoken.md#investorcount)
* [isFrozen](securitytoken.md#isfrozen)
* [generateUuid](securitytoken.md#static-generateuuid)
* [unserialize](securitytoken.md#static-unserialize)

## Properties

###  checkpoints

• **checkpoints**: *[Checkpoints](checkpoints.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:92](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L92)*

___

###  compliance

• **compliance**: *Compliance*

*Defined in [src/api/entities/SecurityToken/index.ts:89](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L89)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L48)*

___

###  controllerTransfer

• **controllerTransfer**: *ProcedureMethod‹[ControllerTransferParams](../interfaces/controllertransferparams.md), void›*

*Defined in [src/api/entities/SecurityToken/index.ts:459](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L459)*

Force a transfer from a given Portfolio to the PIA’s default Portfolio

**`param`** portfolio (or portfolio ID) from which tokens will be transferred

**`param`** amount of tokens to transfer

**`note`** required role:
  - Security Token Primary Issuance Agent

___

###  did

• **did**: *string*

*Defined in [src/api/entities/SecurityToken/index.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L77)*

identity id of the Security Token

___

###  documents

• **documents**: *[Documents](documents.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:85](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L85)*

___

###  freeze

• **freeze**: *ProcedureMethod‹void, [SecurityToken](securitytoken.md)›*

*Defined in [src/api/entities/SecurityToken/index.ts:331](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L331)*

Freezes transfers and minting of the Security Token

**`note`** required role:
  - Security Token Owner

___

###  issuance

• **issuance**: *[Issuance](issuance.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:88](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L88)*

___

###  modify

• **modify**: *ProcedureMethod‹[ModifyTokenParams](../globals.md#modifytokenparams), [SecurityToken](securitytoken.md)›*

*Defined in [src/api/entities/SecurityToken/index.ts:166](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L166)*

Modify some properties of the Security Token

**`param`** makes an indivisible token divisible

**`throws`** if the passed values result in no changes being made to the token

**`note`** required role:
  - Security Token Owner

___

###  modifyPrimaryIssuanceAgent

• **modifyPrimaryIssuanceAgent**: *ProcedureMethod‹[ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md), void›*

*Defined in [src/api/entities/SecurityToken/index.ts:387](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L387)*

Assign a new primary issuance agent for the Security Token

**`param`** identity to be set as primary issuance agent

**`param`** date at which the authorization request to modify the primary issuance agent expires (optional, never expires if a date is not provided)

**`note`** this may create AuthorizationRequest which have to be accepted by
  the corresponding Account. An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:
  - Security Token Owner

___

###  offerings

• **offerings**: *[Offerings](offerings.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L91)*

___

###  redeem

• **redeem**: *ProcedureMethod‹[RedeemTokenParams](../interfaces/redeemtokenparams.md), void›*

*Defined in [src/api/entities/SecurityToken/index.ts:409](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L409)*

Redeem (burn) an amount of this Security Token

**`note`** Tokens are removed from the Primary Issuance Agent's Default Portfolio.
  If the Security Token has no Primary Issuance Agent, funds are removed from the owner's
  Default Portfolio instead

**`note`** required role:
  - Security Token Primary Issuance Agent

___

###  removePrimaryIssuanceAgent

• **removePrimaryIssuanceAgent**: *ProcedureMethod‹void, void›*

*Defined in [src/api/entities/SecurityToken/index.ts:397](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L397)*

Remove the primary issuance agent of the Security Token

**`note`** if primary issuance agent is not set, Security Token owner would be used by default

**`note`** required role:
  - Security Token Owner

___

###  settlements

• **settlements**: *[Settlements](settlements.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L86)*

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/SecurityToken/index.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L82)*

ticker of the Security Token

___

###  tokenHolders

• **tokenHolders**: *[TokenHolders](tokenholders.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L87)*

___

###  transferOwnership

• **transferOwnership**: *ProcedureMethod‹[TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md), [SecurityToken](securitytoken.md)›*

*Defined in [src/api/entities/SecurityToken/index.ts:155](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L155)*

Transfer ownership of the Security Token to another Identity. This generates an authorization request that must be accepted
  by the destinatary

**`param`** date at which the authorization request for transfer expires (optional)

**`note`** this will create [Authorization Requests](authorizationrequest.md) which have to be accepted by
  the corresponding [Accounts](account.md) and/or [Identities](../enums/scopetype.md#identity). An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:
  - Security Token Owner

___

###  transferRestrictions

• **transferRestrictions**: *[TransferRestrictions](transferrestrictions.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:90](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L90)*

___

###  unfreeze

• **unfreeze**: *ProcedureMethod‹void, [SecurityToken](securitytoken.md)›*

*Defined in [src/api/entities/SecurityToken/index.ts:339](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L339)*

Unfreeze transfers and minting of the Security Token

**`note`** required role:
  - Security Token Owner

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L46)*

## Methods

###  createdAt

▸ **createdAt**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/SecurityToken/index.ts:301](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L301)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  currentFundingRound

▸ **currentFundingRound**(): *Promise‹string›*

*Defined in [src/api/entities/SecurityToken/index.ts:231](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L231)*

Retrieve the Security Token's funding round

**`note`** can be subscribed to

**Returns:** *Promise‹string›*

▸ **currentFundingRound**(`callback`: [SubCallback](../globals.md#subcallback)‹string›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:232](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L232)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  details

▸ **details**(): *Promise‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›*

*Defined in [src/api/entities/SecurityToken/index.ts:173](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L173)*

Retrieve the Security Token's name, total supply, whether it is divisible or not and the Identity of the owner

**`note`** can be subscribed to

**Returns:** *Promise‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›*

▸ **details**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:174](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L174)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getIdentifiers

▸ **getIdentifiers**(): *Promise‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›*

*Defined in [src/api/entities/SecurityToken/index.ts:265](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L265)*

Retrive the Security Token's asset identifiers list

**`note`** can be subscribed to

**Returns:** *Promise‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›*

▸ **getIdentifiers**(`callback?`: [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:266](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L266)*

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  investorCount

▸ **investorCount**(): *Promise‹number›*

*Defined in [src/api/entities/SecurityToken/index.ts:420](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L420)*

Retrieve the amount of unique investors that hold this Security Token

**`note`** this takes into account the Scope ID of Investor Uniqueness Claims. If an investor holds balances
  of this token in two or more different Identities, but they all have Investor Uniqueness Claims with the same
  Scope ID, then they will only be counted once for the purposes of this result

**`note`** can be subscribed to

**Returns:** *Promise‹number›*

▸ **investorCount**(`callback`: [SubCallback](../globals.md#subcallback)‹number›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:421](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L421)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹number› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  isFrozen

▸ **isFrozen**(): *Promise‹boolean›*

*Defined in [src/api/entities/SecurityToken/index.ts:346](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L346)*

Check whether transfers are frozen for the Security Token

**`note`** can be subscribed to

**Returns:** *Promise‹boolean›*

▸ **isFrozen**(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:347](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/index.ts#L347)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [Entity](entity.md).[unserialize](entity.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*
