# Class: CheckpointSchedule

Represents a Schedule in which Checkpoints are created for a specific
 Security Token. Schedules can be set up to create checkpoints

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **CheckpointSchedule**

## Index

### Properties

* [context](checkpointschedule.md#protected-context)
* [expiryDate](checkpointschedule.md#expirydate)
* [id](checkpointschedule.md#id)
* [period](checkpointschedule.md#period)
* [start](checkpointschedule.md#start)
* [ticker](checkpointschedule.md#ticker)
* [uuid](checkpointschedule.md#uuid)

### Methods

* [details](checkpointschedule.md#details)
* [exists](checkpointschedule.md#exists)
* [generateUuid](checkpointschedule.md#static-generateuuid)
* [unserialize](checkpointschedule.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L48)*

___

###  expiryDate

• **expiryDate**: *Date | null*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CheckpointSchedule/index.ts#L60)*

date at which the last Checkpoint will be created with this Schedule.
  A null value means that this Schedule never expires

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:38](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CheckpointSchedule/index.ts#L38)*

schedule identifier number

___

###  period

• **period**: *[CalendarPeriod](../interfaces/calendarperiod.md) | null*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:49](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CheckpointSchedule/index.ts#L49)*

how often this Schedule creates a Checkpoint. A null value means this Schedule
  creates a single Checkpoint and then expires

___

###  start

• **start**: *Date*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:54](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CheckpointSchedule/index.ts#L54)*

first Checkpoint creation date

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:43](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CheckpointSchedule/index.ts#L43)*

ticker of the Security Token for which Checkpoints are scheduled

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L46)*

## Methods

###  details

▸ **details**(): *Promise‹[ScheduleDetails](../interfaces/scheduledetails.md)›*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:95](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CheckpointSchedule/index.ts#L95)*

Retrieve information specific to this Schedule

**Returns:** *Promise‹[ScheduleDetails](../interfaces/scheduledetails.md)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:123](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/CheckpointSchedule/index.ts#L123)*

Retrieve whether the Checkpoint Schedule still exists on chain

**Returns:** *Promise‹boolean›*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L14)*

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

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*
