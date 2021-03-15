# Class: TransferRestrictionBase ‹**T**›

Base class for managing Transfer Restrictions

## Type parameters

▪ **T**: *TransferRestrictionType*

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **TransferRestrictionBase**

  ↳ [CountTransferRestriction](../interfaces/counttransferrestriction.md)

  ↳ [PercentageTransferRestriction](../interfaces/percentagetransferrestriction.md)

## Index

### Properties

* [addRestriction](transferrestrictionbase.md#addrestriction)
* [context](transferrestrictionbase.md#protected-context)
* [exemptedScopeIds](transferrestrictionbase.md#optional-exemptedscopeids)
* [parent](transferrestrictionbase.md#protected-parent)
* [removeRestrictions](transferrestrictionbase.md#removerestrictions)
* [setRestrictions](transferrestrictionbase.md#setrestrictions)
* [type](transferrestrictionbase.md#protected-abstract-type)

### Methods

* [get](transferrestrictionbase.md#get)

## Properties

###  addRestriction

• **addRestriction**: *ProcedureMethod‹[AddRestrictionParams](../globals.md#addrestrictionparams)‹T›, number›*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:112](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L112)*

Add a Transfer Restriction of the corresponding type to this Security Token

**`param`** array of Scope IDs that are exempted from the Restriction

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:
  - Security Token Owner

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Namespace.ts#L11)*

___

### `Optional` exemptedScopeIds

• **exemptedScopeIds**? : *string[]*

*Defined in [src/types/index.ts:740](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L740)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Namespace.ts#L9)*

___

###  removeRestrictions

• **removeRestrictions**: *ProcedureMethod‹void, number›*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:134](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L134)*

Removes all Transfer Restrictions of the corresponding type from this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:
  - Security Token Owner

___

###  setRestrictions

• **setRestrictions**: *ProcedureMethod‹[SetRestrictionsParams](../globals.md#setrestrictionsparams)‹T›, number›*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:124](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L124)*

Sets all Transfer Restrictions of the corresponding type on this Security Token

**`param`** array of Transfer Restrictions with their corresponding exemptions (if applicable)

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:
  - Security Token Owner

___

### `Protected` `Abstract` type

• **type**: *T*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:53](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L53)*

## Methods

###  get

▸ **get**(): *Promise‹[GetReturnType](../globals.md#getreturntype)‹T››*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:143](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L143)*

Retrieve all active Transfer Restrictions of the corresponding type

**`note`** there is a maximum number of restrictions allowed accross all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

**Returns:** *Promise‹[GetReturnType](../globals.md#getreturntype)‹T››*
