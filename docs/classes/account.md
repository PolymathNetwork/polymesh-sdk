# Class: Account

Represents an account in the Polymesh blockchain. Accounts can hold POLYX, control Identities and vote on proposals (among other things)

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **Account**

  ↳ [CurrentAccount](currentaccount.md)

## Index

### Properties

* [address](account.md#address)
* [authorizations](account.md#authorizations)
* [context](account.md#protected-context)
* [key](account.md#key)
* [uuid](account.md#uuid)

### Methods

* [getBalance](account.md#getbalance)
* [getIdentity](account.md#getidentity)
* [getTransactionHistory](account.md#gettransactionhistory)
* [generateUuid](account.md#static-generateuuid)
* [unserialize](account.md#static-unserialize)

## Properties

###  address

• **address**: *string*

*Defined in [src/api/entities/Account.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Account.ts#L45)*

Polymesh-specific address of the account. Serves as an identifier

___

###  authorizations

• **authorizations**: *[Authorizations](authorizations.md)‹[Account](account.md)›*

*Defined in [src/api/entities/Account.ts:53](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Account.ts#L53)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L48)*

___

###  key

• **key**: *string*

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

*Defined in [src/api/entities/Account.ts:73](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Account.ts#L73)*

Get the free/locked POLYX balance of the account

**`note`** can be subscribed to

**Returns:** *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

▸ **getBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Account.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Account.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getIdentity

▸ **getIdentity**(): *Promise‹[Identity](identity.md) | null›*

*Defined in [src/api/entities/Account.ts:92](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Account.ts#L92)*

Retrieve the Identity associated to this Account (null if there is none)

**Returns:** *Promise‹[Identity](identity.md) | null›*

___

###  getTransactionHistory

▸ **getTransactionHistory**(`filters`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ExtrinsicData](../interfaces/extrinsicdata.md)››*

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
