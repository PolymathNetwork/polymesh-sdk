# Class: AuthorizationRequest

Represents a request made by an Identity to another Identity (or account) for some sort of authorization. This has multiple uses. For example, if Alice
  wants to transfer ownership of her asset ALICETOKEN to Bob, an authorization request gets emitted to Bob,
  who then has to accept it in order for the ownership transfer to be complete

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **AuthorizationRequest**

## Index

### Properties

* [accept](authorizationrequest.md#accept)
* [authId](authorizationrequest.md#authid)
* [context](authorizationrequest.md#protected-context)
* [data](authorizationrequest.md#data)
* [expiry](authorizationrequest.md#expiry)
* [issuer](authorizationrequest.md#issuer)
* [remove](authorizationrequest.md#remove)
* [target](authorizationrequest.md#target)
* [uuid](authorizationrequest.md#uuid)

### Methods

* [isExpired](authorizationrequest.md#isexpired)
* [generateUuid](authorizationrequest.md#static-generateuuid)
* [unserialize](authorizationrequest.md#static-unserialize)

## Properties

###  accept

• **accept**: *ProcedureMethod‹void, void›*

*Defined in [src/api/entities/AuthorizationRequest.ts:125](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/AuthorizationRequest.ts#L125)*

Accept the authorization request. You must be the target of the request to be able to accept it

___

###  authId

• **authId**: *BigNumber*

*Defined in [src/api/entities/AuthorizationRequest.ts:79](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/AuthorizationRequest.ts#L79)*

internal identifier for the request (used to accept/reject/cancel)

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Entity.ts#L48)*

___

###  data

• **data**: *[Authorization](../globals.md#authorization)*

*Defined in [src/api/entities/AuthorizationRequest.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/AuthorizationRequest.ts#L68)*

authorization request data corresponding to type of authorization

| Type                        | Data      |
|-----------------------------|-----------|
| Attest Primary Key Rotation | DID       |
| Rotate Primary Key          | DID       |
| Transfer Ticker             | Ticker    |
| Add MultiSig Signer         | Account   |
| Transfer Token Ownership    | Ticker    |
| Join Identity               | DID       |
| Portfolio Custody           | Portfolio |
| Custom                      | Custom    |
| No Data                     | N/A       |

___

###  expiry

• **expiry**: *Date | null*

*Defined in [src/api/entities/AuthorizationRequest.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/AuthorizationRequest.ts#L74)*

date at which the authorization request expires and can no longer be accepted.
  At this point, a new authorization request must be emitted. Null if the request never expires

___

###  issuer

• **issuer**: *[Identity](identity.md)*

*Defined in [src/api/entities/AuthorizationRequest.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/AuthorizationRequest.ts#L51)*

Identity that emitted the request

___

###  remove

• **remove**: *ProcedureMethod‹void, void›*

*Defined in [src/api/entities/AuthorizationRequest.ts:133](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/AuthorizationRequest.ts#L133)*

Remove the authorization request

- If you are the request issuer, this will cancel the authorization
- If you are the request target, this will reject the authorization

___

###  target

• **target**: *[Signer](../globals.md#signer)*

*Defined in [src/api/entities/AuthorizationRequest.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/AuthorizationRequest.ts#L46)*

Identity or Account to which the request was emitted

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Entity.ts#L46)*

## Methods

###  isExpired

▸ **isExpired**(): *boolean*

*Defined in [src/api/entities/AuthorizationRequest.ts:138](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/AuthorizationRequest.ts#L138)*

Returns whether the Authorization Request has expired

**Returns:** *boolean*

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
