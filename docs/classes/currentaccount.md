# Class: CurrentAccount

Represents the current account that is bound to the SDK instance

## Hierarchy

  ↳ [Account](account.md)

  ↳ **CurrentAccount**

## Index

### Properties

* [address](currentaccount.md#address)
* [authorizations](currentaccount.md#authorizations)
* [context](currentaccount.md#protected-context)
* [key](currentaccount.md#key)
* [uuid](currentaccount.md#uuid)

### Methods

* [getBalance](currentaccount.md#getbalance)
* [getIdentity](currentaccount.md#getidentity)
* [getPermissions](currentaccount.md#getpermissions)
* [getTransactionHistory](currentaccount.md#gettransactionhistory)
* [hasPermissions](currentaccount.md#haspermissions)
* [generateUuid](currentaccount.md#static-generateuuid)
* [unserialize](currentaccount.md#static-unserialize)

## Properties

###  address

• **address**: *string*

*Inherited from [Account](account.md).[address](account.md#address)*

*Defined in [src/api/entities/Account.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Account.ts#L45)*

Polymesh-specific address of the account. Serves as an identifier

___

###  authorizations

• **authorizations**: *[Authorizations](authorizations.md)‹[Account](account.md)›*

*Inherited from [Account](account.md).[authorizations](account.md#authorizations)*

*Defined in [src/api/entities/Account.ts:53](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Account.ts#L53)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L48)*

___

###  key

• **key**: *string*

*Inherited from [Account](account.md).[key](account.md#key)*

*Defined in [src/api/entities/Account.ts:50](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Account.ts#L50)*

public key of the account. This is a hex representation of the address that is transversal to any Substrate chain

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L46)*

## Methods

###  getBalance

▸ **getBalance**(): *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

*Inherited from [Account](account.md).[getBalance](account.md#getbalance)*

*Defined in [src/api/entities/Account.ts:73](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Account.ts#L73)*

Get the free/locked POLYX balance of the account

**`note`** can be subscribed to

**Returns:** *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

▸ **getBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Account](account.md).[getBalance](account.md#getbalance)*

*Defined in [src/api/entities/Account.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Account.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getIdentity

▸ **getIdentity**(): *Promise‹[CurrentIdentity](currentidentity.md) | null›*

*Overrides [Account](account.md).[getIdentity](account.md#getidentity)*

*Defined in [src/api/entities/CurrentAccount.ts:18](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CurrentAccount.ts#L18)*

Retrieve the current Identity (null if there is none)

**Returns:** *Promise‹[CurrentIdentity](currentidentity.md) | null›*

___

###  getPermissions

▸ **getPermissions**(): *Promise‹[Permissions](../interfaces/permissions.md)›*

*Defined in [src/api/entities/CurrentAccount.ts:27](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CurrentAccount.ts#L27)*

Retrieve the Permissions this Signer has as a Signing Key for its corresponding Identity

**Returns:** *Promise‹[Permissions](../interfaces/permissions.md)›*

___

###  getTransactionHistory

▸ **getTransactionHistory**(`filters`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ExtrinsicData](../interfaces/extrinsicdata.md)››*

*Inherited from [Account](account.md).[getTransactionHistory](account.md#gettransactionhistory)*

*Defined in [src/api/entities/Account.ts:124](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Account.ts#L124)*

Retrieve a list of transactions signed by this account. Can be filtered using parameters

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **filters**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`blockNumber?` | BigNumber | - |
`orderBy?` | TransactionOrderByInput | - |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`success?` | undefined &#124; false &#124; true | whether the transaction was successful or not |
`tag?` | TxTag | tag associated with the transaction |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ExtrinsicData](../interfaces/extrinsicdata.md)››*

___

###  hasPermissions

▸ **hasPermissions**(`permissions`: [PermissionsLike](../interfaces/permissionslike.md)): *Promise‹boolean›*

*Defined in [src/api/entities/CurrentAccount.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CurrentAccount.ts#L55)*

Check if this Account possesses certain Permissions for its corresponding Identity

**Parameters:**

Name | Type |
------ | ------ |
`permissions` | [PermissionsLike](../interfaces/permissionslike.md) |

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
