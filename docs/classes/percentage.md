# Class: Percentage

Handles all Percentage Transfer Restriction related functionality

## Hierarchy

* TransferRestrictionBase‹Percentage›

  ↳ **Percentage**

## Index

### Properties

* [addRestriction](percentage.md#addrestriction)
* [context](percentage.md#protected-context)
* [get](percentage.md#get)
* [parent](percentage.md#protected-parent)
* [removeRestrictions](percentage.md#removerestrictions)
* [setRestrictions](percentage.md#setrestrictions)
* [type](percentage.md#protected-type)

## Properties

###  addRestriction

• **addRestriction**: *ProcedureMethod‹Omit‹[AddPercentageTransferRestrictionParams](../globals.md#addpercentagetransferrestrictionparams), "type"›, number›*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[addRestriction](transferrestrictionbase.md#addrestriction)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:27](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L27)*

Add a Percentage Transfer Restriction to this Security Token

**`param`** limit on the proportion of the total supply of this Security Token that can be held by a single investor at once

**`param`** array of Scope IDs that are exempted from the Restriction

**`param`** array of Identities (or DIDs) that are exempted from the Restriction

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:
  - Security Token Owner

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Namespace.ts#L11)*

___

###  get

• **get**: *function*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[get](transferrestrictionbase.md#get)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L61)*

Retrieve all active Percentage Transfer Restrictions

**`note`** there is a maximum number of restrictions allowed accross all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

#### Type declaration:

▸ (): *Promise‹[ActiveTransferRestrictions](../interfaces/activetransferrestrictions.md)‹[PercentageTransferRestriction](../interfaces/percentagetransferrestriction.md)››*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Namespace.ts#L9)*

___

###  removeRestrictions

• **removeRestrictions**: *ProcedureMethod‹void, number›*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[removeRestrictions](transferrestrictionbase.md#removerestrictions)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:52](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L52)*

Removes all Percentage Transfer Restrictions from this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

___

###  setRestrictions

• **setRestrictions**: *ProcedureMethod‹Omit‹[SetPercentageTransferRestrictionsParams](../interfaces/setpercentagetransferrestrictionsparams.md), "type"›, number›*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[setRestrictions](transferrestrictionbase.md#setrestrictions)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:42](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L42)*

Sets all Percentage Transfer Restrictions on this Security Token

**`param`** array of Percentage Transfer Restrictions with their corresponding exemptions (if applicable)

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:
  - Security Token Owner

___

### `Protected` type

• **type**: *Percentage* = TransferRestrictionType.Percentage as const

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[type](transferrestrictionbase.md#protected-abstract-type)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:13](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L13)*
