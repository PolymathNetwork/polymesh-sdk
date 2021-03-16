# Class: TokenHolders

Handles all Security Token Holders related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **TokenHolders**

## Index

### Properties

* [context](tokenholders.md#protected-context)
* [parent](tokenholders.md#protected-parent)

### Methods

* [get](tokenholders.md#get)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Namespace.ts#L9)*

## Methods

###  get

▸ **get**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityBalance](../interfaces/identitybalance.md)››*

*Defined in [src/api/entities/SecurityToken/TokenHolders.ts:17](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/TokenHolders.ts#L17)*

Retrieve all the token holders with their respective balance

**`note`** supports pagination

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityBalance](../interfaces/identitybalance.md)››*
