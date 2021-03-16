# Class: Checkpoint

Represents a snapshot of the Security Token's holders and their respective balances
  at a certain point in time

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **Checkpoint**

## Index

### Properties

* [context](checkpoint.md#protected-context)
* [id](checkpoint.md#id)
* [ticker](checkpoint.md#ticker)
* [uuid](checkpoint.md#uuid)

### Methods

* [allBalances](checkpoint.md#allbalances)
* [balance](checkpoint.md#balance)
* [createdAt](checkpoint.md#createdat)
* [totalSupply](checkpoint.md#totalsupply)
* [generateUuid](checkpoint.md#static-generateuuid)
* [unserialize](checkpoint.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/Checkpoint.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Checkpoint.ts#L39)*

checkpoint identifier number

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/Checkpoint.ts:44](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Checkpoint.ts#L44)*

ticker of the Security Token whose balances are being recorded

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L46)*

## Methods

###  allBalances

▸ **allBalances**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityBalance](../interfaces/identitybalance.md)››*

*Defined in [src/api/entities/Checkpoint.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Checkpoint.ts#L91)*

Retrieve all Tokenholder balances at this Checkpoint

**`note`** supports pagination

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityBalance](../interfaces/identitybalance.md)››*

___

###  balance

▸ **balance**(`args?`: undefined | object): *Promise‹BigNumber›*

*Defined in [src/api/entities/Checkpoint.ts:120](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Checkpoint.ts#L120)*

Retrieve the balance of a specific Tokenholder Identity at this Checkpoint

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹BigNumber›*

___

###  createdAt

▸ **createdAt**(): *Promise‹Date›*

*Defined in [src/api/entities/Checkpoint.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Checkpoint.ts#L75)*

Retrieve this Checkpoint's creation date

**Returns:** *Promise‹Date›*

___

###  totalSupply

▸ **totalSupply**(): *Promise‹BigNumber›*

*Defined in [src/api/entities/Checkpoint.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Checkpoint.ts#L61)*

Retrieve the Security Token's total supply at this checkpoint

**Returns:** *Promise‹BigNumber›*

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
