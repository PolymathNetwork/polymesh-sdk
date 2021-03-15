# Class: CheckpointSchedule

Represents a Schedule in which Checkpoints are created for a specific
 Security Token. Schedules can be set up to create checkpoints

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **CheckpointSchedule**

## Index

### Properties

* [context](checkpointschedule.md#protected-context)
* [id](checkpointschedule.md#id)
* [isInfinite](checkpointschedule.md#isinfinite)
* [period](checkpointschedule.md#period)
* [start](checkpointschedule.md#start)
* [ticker](checkpointschedule.md#ticker)
* [uuid](checkpointschedule.md#uuid)

### Methods

* [expiryDate](checkpointschedule.md#expirydate)
* [generateUuid](checkpointschedule.md#static-generateuuid)
* [unserialize](checkpointschedule.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/CheckpointSchedule.ts:37](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/CheckpointSchedule.ts#L37)*

schedule identifier number

___

###  isInfinite

• **isInfinite**: *boolean*

*Defined in [src/api/entities/CheckpointSchedule.ts:58](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/CheckpointSchedule.ts#L58)*

if true, the Schedule never expires

___

###  period

• **period**: *[CalendarPeriod](../interfaces/calendarperiod.md) | null*

*Defined in [src/api/entities/CheckpointSchedule.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/CheckpointSchedule.ts#L48)*

how often this Schedule creates a Checkpoint. A null value means this Schedule
  creates a single Checkpoint and then expires

___

###  start

• **start**: *Date*

*Defined in [src/api/entities/CheckpointSchedule.ts:53](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/CheckpointSchedule.ts#L53)*

first Checkpoint creation date

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/CheckpointSchedule.ts:42](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/CheckpointSchedule.ts#L42)*

ticker of the Security Token for which Checkpoints are scheduled

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Entity.ts#L46)*

## Methods

###  expiryDate

▸ **expiryDate**(): *Promise‹Date | null›*

*Defined in [src/api/entities/CheckpointSchedule.ts:88](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/CheckpointSchedule.ts#L88)*

Retrieve the date at which the last Checkpoint will be created with this Schedule.
  A null value means that this Schedule never expires

**Returns:** *Promise‹Date | null›*

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
