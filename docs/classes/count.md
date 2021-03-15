# Class: Count

Handles all Count Transfer Restriction related functionality

## Hierarchy

* TransferRestrictionBase‹Count›

  ↳ **Count**

## Index

### Properties

* [addRestriction](count.md#addrestriction)
* [context](count.md#protected-context)
* [get](count.md#get)
* [parent](count.md#protected-parent)
* [removeRestrictions](count.md#removerestrictions)
* [setRestrictions](count.md#setrestrictions)
* [type](count.md#protected-type)

## Properties

###  addRestriction

• **addRestriction**: *ProcedureMethod‹Omit‹[AddCountTransferRestrictionParams](../globals.md#addcounttransferrestrictionparams), "type"›, number›*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[addRestriction](transferrestrictionbase.md#addrestriction)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Count.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L24)*

Add a Count Transfer Restriction to this Security Token

**`param`** limit on the amount of different (unique) investors that can hold this Security Token at once

**`param`** array of Scope IDs that are exempted from the Restriction

**`param`** array of Identities (or DIDs) that are exempted from the Restriction

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:
  - Security Token Owner

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Namespace.ts#L11)*

___

###  get

• **get**: *function*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[get](transferrestrictionbase.md#get)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Count.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L55)*

Retrieve all active Count Transfer Restrictions

**`note`** there is a maximum number of restrictions allowed accross all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

#### Type declaration:

▸ (): *Promise‹[ActiveTransferRestrictions](../interfaces/activetransferrestrictions.md)‹[CountTransferRestriction](../interfaces/counttransferrestriction.md)››*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Namespace.ts#L9)*

___

###  removeRestrictions

• **removeRestrictions**: *ProcedureMethod‹void, number›*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[removeRestrictions](transferrestrictionbase.md#removerestrictions)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Count.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L46)*

Removes all Count Transfer Restrictions from this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

___

###  setRestrictions

• **setRestrictions**: *ProcedureMethod‹Omit‹[SetCountTransferRestrictionsParams](../interfaces/setcounttransferrestrictionsparams.md), "type"›, number›*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[setRestrictions](transferrestrictionbase.md#setrestrictions)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Count.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L36)*

Sets all Count Transfer Restrictions on this Security Token

**`param`** array of Count Transfer Restrictions with their corresponding exemptions (if applicable)

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:
  - Security Token Owner

___

### `Protected` type

• **type**: *Count* = TransferRestrictionType.Count as const

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[type](transferrestrictionbase.md#protected-abstract-type)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Count.ts:10](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L10)*
