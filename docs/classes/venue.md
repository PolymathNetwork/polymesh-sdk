# Class: Venue

Represents a Venue through which settlements are handled

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **Venue**

## Index

### Properties

* [addInstruction](venue.md#addinstruction)
* [context](venue.md#protected-context)
* [id](venue.md#id)
* [uuid](venue.md#uuid)

### Methods

* [details](venue.md#details)
* [exists](venue.md#exists)
* [getPendingInstructions](venue.md#getpendinginstructions)
* [generateUuid](venue.md#static-generateuuid)
* [unserialize](venue.md#static-unserialize)

## Properties

###  addInstruction

• **addInstruction**: *ProcedureMethod‹[AddInstructionParams](../interfaces/addinstructionparams.md), [Instruction](instruction.md)›*

*Defined in [src/api/entities/Venue/index.ts:173](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Venue/index.ts#L173)*

Creates a settlement Instruction in this Venue

**`param`** array of token movements (amount, from, to, token)

**`param`** date at which the trade was agreed upon (optional, for offchain trades)

**`param`** date at which the trade was executed (optional, for offchain trades)

**`param`** block at which the Instruction will be executed automatically (optional, the Instruction will be executed when all participants have authorized it if not supplied)

**`note`** required role:
  - Venue Owner

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/Venue/index.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Venue/index.ts#L47)*

Identifier number of the venue

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Entity.ts#L46)*

## Methods

###  details

▸ **details**(): *Promise‹[VenueDetails](../interfaces/venuedetails.md)›*

*Defined in [src/api/entities/Venue/index.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Venue/index.ts#L87)*

Retrieve information specific to this venue

**Returns:** *Promise‹[VenueDetails](../interfaces/venuedetails.md)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Defined in [src/api/entities/Venue/index.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Venue/index.ts#L68)*

Retrieve whether the Venue exists

**Returns:** *Promise‹boolean›*

___

###  getPendingInstructions

▸ **getPendingInstructions**(): *Promise‹[Instruction](instruction.md)[]›*

*Defined in [src/api/entities/Venue/index.ts:121](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Venue/index.ts#L121)*

Retrieve all pending Instructions in this Venue

**Returns:** *Promise‹[Instruction](instruction.md)[]›*

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
