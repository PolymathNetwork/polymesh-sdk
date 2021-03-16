# Class: IdentityAuthorizations

Handles all Identity Authorization related functionality

## Hierarchy

  ↳ [Authorizations](authorizations.md)‹[Identity](identity.md)›

  ↳ **IdentityAuthorizations**

## Index

### Properties

* [context](identityauthorizations.md#protected-context)
* [parent](identityauthorizations.md#protected-parent)

### Methods

* [getReceived](identityauthorizations.md#getreceived)
* [getSent](identityauthorizations.md#getsent)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[Identity](identity.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Namespace.ts#L9)*

## Methods

###  getReceived

▸ **getReceived**(`opts?`: undefined | object): *Promise‹[AuthorizationRequest](authorizationrequest.md)[]›*

*Inherited from [Authorizations](authorizations.md).[getReceived](authorizations.md#getreceived)*

*Defined in [src/api/entities/common/namespaces/Authorizations.ts:28](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/common/namespaces/Authorizations.ts#L28)*

Fetch all pending authorization requests for which this identity is the target

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | undefined &#124; object |

**Returns:** *Promise‹[AuthorizationRequest](authorizationrequest.md)[]›*

___

###  getSent

▸ **getSent**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[AuthorizationRequest](authorizationrequest.md)››*

*Defined in [src/api/entities/Identity/IdentityAuthorizations.ts:18](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Identity/IdentityAuthorizations.ts#L18)*

Fetch all pending authorization requests issued by this Identity

**`note`** supports pagination

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[AuthorizationRequest](authorizationrequest.md)››*
