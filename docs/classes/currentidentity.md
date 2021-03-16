# Class: CurrentIdentity

Represents the Identity associated to the current [Account](account.md)

## Hierarchy

  ↳ [Identity](identity.md)

  ↳ **CurrentIdentity**

## Index

### Constructors

* [constructor](currentidentity.md#constructor)

### Properties

* [authorizations](currentidentity.md#authorizations)
* [context](currentidentity.md#protected-context)
* [createVenue](currentidentity.md#createvenue)
* [did](currentidentity.md#did)
* [inviteAccount](currentidentity.md#inviteaccount)
* [modifyPermissions](currentidentity.md#modifypermissions)
* [portfolios](currentidentity.md#portfolios)
* [removeSecondaryKeys](currentidentity.md#removesecondarykeys)
* [revokePermissions](currentidentity.md#revokepermissions)
* [uuid](currentidentity.md#uuid)

### Methods

* [getHeldTokens](currentidentity.md#getheldtokens)
* [getPendingInstructions](currentidentity.md#getpendinginstructions)
* [getPrimaryKey](currentidentity.md#getprimarykey)
* [getScopeId](currentidentity.md#getscopeid)
* [getSecondaryKeys](currentidentity.md#getsecondarykeys)
* [getTokenBalance](currentidentity.md#gettokenbalance)
* [getTrustingTokens](currentidentity.md#gettrustingtokens)
* [getVenues](currentidentity.md#getvenues)
* [hasRole](currentidentity.md#hasrole)
* [hasRoles](currentidentity.md#hasroles)
* [hasValidCdd](currentidentity.md#hasvalidcdd)
* [isCddProvider](currentidentity.md#iscddprovider)
* [isGcMember](currentidentity.md#isgcmember)
* [generateUuid](currentidentity.md#static-generateuuid)
* [unserialize](currentidentity.md#static-unserialize)

## Constructors

###  constructor

\+ **new CurrentIdentity**(`identifiers`: [UniqueIdentifiers](../interfaces/uniqueidentifiers.md), `context`: [Context](context.md)): *[CurrentIdentity](currentidentity.md)*

*Overrides [Identity](identity.md).[constructor](identity.md#constructor)*

*Defined in [src/api/entities/CurrentIdentity.ts:34](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CurrentIdentity.ts#L34)*

Create a CurrentIdentity entity

**Parameters:**

Name | Type |
------ | ------ |
`identifiers` | [UniqueIdentifiers](../interfaces/uniqueidentifiers.md) |
`context` | [Context](context.md) |

**Returns:** *[CurrentIdentity](currentidentity.md)*

## Properties

###  authorizations

• **authorizations**: *[IdentityAuthorizations](identityauthorizations.md)*

*Inherited from [Identity](identity.md).[authorizations](identity.md#authorizations)*

*Defined in [src/api/entities/Identity/index.ts:73](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L73)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L48)*

___

###  createVenue

• **createVenue**: *ProcedureMethod‹[CreateVenueParams](../interfaces/createvenueparams.md), [Venue](venue.md)›*

*Defined in [src/api/entities/CurrentIdentity.ts:122](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CurrentIdentity.ts#L122)*

Create a Venue

___

###  did

• **did**: *string*

*Inherited from [Identity](identity.md).[did](identity.md#did)*

*Defined in [src/api/entities/Identity/index.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L70)*

identity ID as stored in the blockchain

___

###  inviteAccount

• **inviteAccount**: *ProcedureMethod‹[InviteAccountParams](../interfaces/inviteaccountparams.md), void›*

*Defined in [src/api/entities/CurrentIdentity.ts:117](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CurrentIdentity.ts#L117)*

Send an invitation to an Account to join this Identity

**`note`** this may create AuthorizationRequest which have to be accepted by
  the corresponding Account. An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`param`** list of allowed permissions (optional, defaults to no permissions)

**`param`** array of Security Tokens (or tickers) for which to allow permission. Set null to allow all (optional, no permissions if not passed)

**`param`** array of tags associated with the transaction that will be executed for which to allow permission. Set null to allow all (optional, no permissions if not passed)

**`param`** array of portfolios for which to allow permission. Set null to allow all (optional, no permissions if not passed)

___

###  modifyPermissions

• **modifyPermissions**: *ProcedureMethod‹[ModifySignerPermissionsParams](../interfaces/modifysignerpermissionsparams.md), void›*

*Defined in [src/api/entities/CurrentIdentity.ts:103](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CurrentIdentity.ts#L103)*

Modify all permissions of a list of secondary keys associated with the Identity

**`param`** list of permissions

**`param`** array of Security Tokens on which to grant permissions. A null value represents full permissions

**`param`** array of transaction tags that the Secondary Key has permission to execute. A null value represents full permissions

**`param`** array of Portfolios for which to grant permissions. A null value represents full permissions

___

###  portfolios

• **portfolios**: *[Portfolios](portfolios.md)*

*Inherited from [Identity](identity.md).[portfolios](identity.md#portfolios)*

*Defined in [src/api/entities/Identity/index.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L74)*

___

###  removeSecondaryKeys

• **removeSecondaryKeys**: *ProcedureMethod‹[RemoveSecondaryKeysParams](../interfaces/removesecondarykeysparams.md), void›*

*Defined in [src/api/entities/CurrentIdentity.ts:88](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CurrentIdentity.ts#L88)*

Remove a list of secondary keys associated with the Identity

___

###  revokePermissions

• **revokePermissions**: *ProcedureMethod‹object, void›*

*Defined in [src/api/entities/CurrentIdentity.ts:93](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CurrentIdentity.ts#L93)*

Revoke all permissions of a list of secondary keys associated with the Identity

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L46)*

## Methods

###  getHeldTokens

▸ **getHeldTokens**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[SecurityToken](securitytoken.md)››*

*Inherited from [Identity](identity.md).[getHeldTokens](identity.md#getheldtokens)*

*Defined in [src/api/entities/Identity/index.ts:290](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L290)*

Retrieve a list of all tokens which were held at one point by this Identity

**`note`** uses the middleware

**`note`** supports pagination

**Parameters:**

▪`Default value`  **opts**: *object*= { order: Order.Asc }

Name | Type |
------ | ------ |
`order?` | Order |
`size?` | undefined &#124; number |
`start?` | undefined &#124; number |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[SecurityToken](securitytoken.md)››*

___

###  getPendingInstructions

▸ **getPendingInstructions**(): *Promise‹[Instruction](instruction.md)[]›*

*Defined in [src/api/entities/CurrentIdentity.ts:127](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CurrentIdentity.ts#L127)*

Retrieve all pending Instructions involving the Current Identity

**Returns:** *Promise‹[Instruction](instruction.md)[]›*

___

###  getPrimaryKey

▸ **getPrimaryKey**(): *Promise‹string›*

*Inherited from [Identity](identity.md).[getPrimaryKey](identity.md#getprimarykey)*

*Defined in [src/api/entities/Identity/index.ts:255](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L255)*

Retrieve the primary key associated with the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹string›*

▸ **getPrimaryKey**(`callback`: [SubCallback](../globals.md#subcallback)‹string›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getPrimaryKey](identity.md#getprimarykey)*

*Defined in [src/api/entities/Identity/index.ts:256](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L256)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getScopeId

▸ **getScopeId**(`args`: object): *Promise‹string›*

*Inherited from [Identity](identity.md).[getScopeId](identity.md#getscopeid)*

*Defined in [src/api/entities/Identity/index.ts:396](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L396)*

Retrieve the Scope ID associated to this Identity's Investor Uniqueness Claim for a specific Security Token

**`note`** more on Investor Uniqueness: https://developers.polymesh.live/confidential_identity

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`token` | [SecurityToken](securitytoken.md) &#124; string |

**Returns:** *Promise‹string›*

___

###  getSecondaryKeys

▸ **getSecondaryKeys**(): *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

*Defined in [src/api/entities/CurrentIdentity.ts:69](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CurrentIdentity.ts#L69)*

Get the list of secondary keys related to the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

▸ **getSecondaryKeys**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/CurrentIdentity.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CurrentIdentity.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTokenBalance

▸ **getTokenBalance**(`args`: object): *Promise‹BigNumber›*

*Inherited from [Identity](identity.md).[getTokenBalance](identity.md#gettokenbalance)*

*Defined in [src/api/entities/Identity/index.ts:155](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L155)*

Retrieve the balance of a particular Security Token

**`note`** can be subscribed to

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

**Returns:** *Promise‹BigNumber›*

▸ **getTokenBalance**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getTokenBalance](identity.md#gettokenbalance)*

*Defined in [src/api/entities/Identity/index.ts:156](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L156)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

▪ **callback**: *[SubCallback](../globals.md#subcallback)‹BigNumber›*

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTrustingTokens

▸ **getTrustingTokens**(`args`: object): *Promise‹[SecurityToken](securitytoken.md)[]›*

*Inherited from [Identity](identity.md).[getTrustingTokens](identity.md#gettrustingtokens)*

*Defined in [src/api/entities/Identity/index.ts:341](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L341)*

Get the list of tokens for which this Identity is a trusted claim issuer

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **args**: *object*= { order: Order.Asc }

Name | Type |
------ | ------ |
`order` | Order |

**Returns:** *Promise‹[SecurityToken](securitytoken.md)[]›*

___

###  getVenues

▸ **getVenues**(): *Promise‹[Venue](venue.md)[]›*

*Inherited from [Identity](identity.md).[getVenues](identity.md#getvenues)*

*Defined in [src/api/entities/Identity/index.ts:362](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L362)*

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[Venue](venue.md)[]›*

▸ **getVenues**(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getVenues](identity.md#getvenues)*

*Defined in [src/api/entities/Identity/index.ts:363](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L363)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  hasRole

▸ **hasRole**(`role`: [Role](../globals.md#role)): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[hasRole](identity.md#hasrole)*

*Defined in [src/api/entities/Identity/index.ts:92](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L92)*

Check whether this Identity possesses the specified Role

**Parameters:**

Name | Type |
------ | ------ |
`role` | [Role](../globals.md#role) |

**Returns:** *Promise‹boolean›*

___

###  hasRoles

▸ **hasRoles**(`roles`: [Role](../globals.md#role)[]): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[hasRoles](identity.md#hasroles)*

*Defined in [src/api/entities/Identity/index.ts:330](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L330)*

Check whether this Identity possesses all specified roles

**Parameters:**

Name | Type |
------ | ------ |
`roles` | [Role](../globals.md#role)[] |

**Returns:** *Promise‹boolean›*

___

###  hasValidCdd

▸ **hasValidCdd**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[hasValidCdd](identity.md#hasvalidcdd)*

*Defined in [src/api/entities/Identity/index.ts:203](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L203)*

Check whether this Identity has a valid CDD claim

**Returns:** *Promise‹boolean›*

___

###  isCddProvider

▸ **isCddProvider**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[isCddProvider](identity.md#iscddprovider)*

*Defined in [src/api/entities/Identity/index.ts:236](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L236)*

Check whether this Identity is a CDD provider

**Returns:** *Promise‹boolean›*

___

###  isGcMember

▸ **isGcMember**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[isGcMember](identity.md#isgcmember)*

*Defined in [src/api/entities/Identity/index.ts:219](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/index.ts#L219)*

Check whether this Identity is Governance Committee member

**Returns:** *Promise‹boolean›*

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
