# Class: Documents

Handles all Security Token Document related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Documents**

## Index

### Properties

* [context](documents.md#protected-context)
* [parent](documents.md#protected-parent)
* [set](documents.md#set)

### Methods

* [get](documents.md#get)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Namespace.ts#L9)*

___

###  set

• **set**: *ProcedureMethod‹[SetTokenDocumentsParams](../interfaces/settokendocumentsparams.md), [SecurityToken](securitytoken.md)›*

*Defined in [src/api/entities/SecurityToken/Documents.ts:38](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/SecurityToken/Documents.ts#L38)*

Assign a new list of documents to the Security Token by replacing the existing list of documents with the one passed in the parameters

This requires two transactions

**`param`** new list of documents

**`note`** required role:
  - Security Token Owner

## Methods

###  get

▸ **get**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[TokenDocument](../interfaces/tokendocument.md)››*

*Defined in [src/api/entities/SecurityToken/Documents.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/SecurityToken/Documents.ts#L45)*

Retrieve all documents linked to the Security Token

**`note`** supports pagination

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[TokenDocument](../interfaces/tokendocument.md)››*
