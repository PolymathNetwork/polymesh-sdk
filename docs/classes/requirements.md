# Class: Requirements

Handles all Security Token Compliance Requirements related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Requirements**

## Index

### Properties

* [context](requirements.md#protected-context)
* [parent](requirements.md#protected-parent)
* [pause](requirements.md#pause)
* [reset](requirements.md#reset)
* [set](requirements.md#set)
* [unpause](requirements.md#unpause)

### Methods

* [arePaused](requirements.md#arepaused)
* [checkSettle](requirements.md#checksettle)
* [get](requirements.md#get)

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

___

###  pause

• **pause**: *ProcedureMethod‹void, [SecurityToken](securitytoken.md)›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:160](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Compliance/Requirements.ts#L160)*

Pause all the Security Token's requirements. This means that all transfers will be allowed until requirements are unpaused

**`note`** required role:
  - Security Token Owner

___

###  reset

• **reset**: *ProcedureMethod‹void, [SecurityToken](securitytoken.md)›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:152](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Compliance/Requirements.ts#L152)*

Detele all the current requirements for the Security Token.

**`note`** required role:
  - Security Token Owner

___

###  set

• **set**: *ProcedureMethod‹[SetAssetRequirementsParams](../interfaces/setassetrequirementsparams.md), [SecurityToken](securitytoken.md)›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Compliance/Requirements.ts#L68)*

Configure asset compliance requirements for the Security Token. This operation will replace all existing requirements with a new requirement set

This requires two transactions

**`param`** array of array of conditions. For a transfer to be successful, it must comply with all the conditions of at least one of the arrays. In other words, higher level arrays are *OR* between them,
while conditions inside each array are *AND* between them

**`example`** Say A, B, C, D and E are requirements and we arrange them as `[[A, B], [C, D], [E]]`.
For a transfer to succeed, it must either comply with A AND B, C AND D, OR E.

**`note`** required role:
  - Security Token Owner

___

###  unpause

• **unpause**: *ProcedureMethod‹void, [SecurityToken](securitytoken.md)›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:165](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Compliance/Requirements.ts#L165)*

Un-pause all the Security Token's current requirements

## Methods

###  arePaused

▸ **arePaused**(): *Promise‹boolean›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:204](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Compliance/Requirements.ts#L204)*

Check whether asset compliance requirements are paused or not

**Returns:** *Promise‹boolean›*

___

###  checkSettle

▸ **checkSettle**(`args`: object): *Promise‹[Compliance](compliance.md)›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:175](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Compliance/Requirements.ts#L175)*

Check whether the sender and receiver Identities in a transfer comply with all the requirements of this asset

**`note`** this does not take balances into account

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`from?` | string &#124; [Identity](identity.md) | sender Identity (optional, defaults to the current Identity) |
`to` | string &#124; [Identity](identity.md) | receiver Identity  |

**Returns:** *Promise‹[Compliance](compliance.md)›*

___

###  get

▸ **get**(): *Promise‹[Requirement](../interfaces/requirement.md)[]›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Compliance/Requirements.ts#L75)*

Retrieve all of the Security Token's requirements

**`note`** can be subscribed to

**Returns:** *Promise‹[Requirement](../interfaces/requirement.md)[]›*

▸ **get**(`callback`: [SubCallback](../globals.md#subcallback)‹[Requirement](../interfaces/requirement.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:76](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Compliance/Requirements.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[Requirement](../interfaces/requirement.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*
