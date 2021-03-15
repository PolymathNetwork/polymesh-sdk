# Class: Authorizations ‹**Parent**›

Handles all Authorization related functionality

## Type parameters

▪ **Parent**: *[Signer](../globals.md#signer)*

## Hierarchy

* Namespace‹Parent›

  ↳ **Authorizations**

  ↳ [IdentityAuthorizations](identityauthorizations.md)

## Index

### Properties

* [context](authorizations.md#protected-context)
* [parent](authorizations.md#protected-parent)

### Methods

* [getReceived](authorizations.md#getreceived)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *Parent*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Namespace.ts#L9)*

## Methods

###  getReceived

▸ **getReceived**(`opts?`: undefined | object): *Promise‹[AuthorizationRequest](authorizationrequest.md)[]›*

*Defined in [src/api/entities/common/namespaces/Authorizations.ts:28](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/common/namespaces/Authorizations.ts#L28)*

Fetch all pending authorization requests for which this identity is the target

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | undefined &#124; object |

**Returns:** *Promise‹[AuthorizationRequest](authorizationrequest.md)[]›*
