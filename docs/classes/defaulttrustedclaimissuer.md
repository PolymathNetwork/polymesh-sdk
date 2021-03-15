# Class: DefaultTrustedClaimIssuer

Represents a default trusted claim issuer for a specific token in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **DefaultTrustedClaimIssuer**

## Index

### Properties

* [context](defaulttrustedclaimissuer.md#protected-context)
* [identity](defaulttrustedclaimissuer.md#identity)
* [ticker](defaulttrustedclaimissuer.md#ticker)
* [trustedFor](defaulttrustedclaimissuer.md#optional-trustedfor)
* [uuid](defaulttrustedclaimissuer.md#uuid)

### Methods

* [addedAt](defaulttrustedclaimissuer.md#addedat)
* [generateUuid](defaulttrustedclaimissuer.md#static-generateuuid)
* [unserialize](defaulttrustedclaimissuer.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Entity.ts#L48)*

___

###  identity

• **identity**: *[Identity](identity.md)*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/DefaultTrustedClaimIssuer.ts#L36)*

identity of the Trusted Claim Issuer

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/DefaultTrustedClaimIssuer.ts#L46)*

ticker of the Security Token

___

### `Optional` trustedFor

• **trustedFor**? : *[ClaimType](../enums/claimtype.md)[]*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:41](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/DefaultTrustedClaimIssuer.ts#L41)*

claim types for which this Claim Issuer is trusted. An undefined value means that the issuer is trusted for all claim types

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Entity.ts#L46)*

## Methods

###  addedAt

▸ **addedAt**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:69](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/DefaultTrustedClaimIssuer.ts#L69)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the trusted claim issuer was added

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Entity.ts#L14)*

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

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*
