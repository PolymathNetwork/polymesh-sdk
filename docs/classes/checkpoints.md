# Class: Checkpoints

Handles all Security Token Checkpoints related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Checkpoints**

## Index

### Properties

* [context](checkpoints.md#protected-context)
* [create](checkpoints.md#create)
* [createSchedule](checkpoints.md#createschedule)
* [parent](checkpoints.md#protected-parent)
* [removeSchedule](checkpoints.md#removeschedule)

### Methods

* [get](checkpoints.md#get)
* [getSchedules](checkpoints.md#getschedules)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Namespace.ts#L11)*

___

###  create

• **create**: *ProcedureMethod‹void, [Checkpoint](checkpoint.md)›*

*Defined in [src/api/entities/SecurityToken/Checkpoints.ts:54](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Checkpoints.ts#L54)*

Create a snapshot of Security Token holders and their respective balances at this moment

**`note`** required role:
  - Security Token Owner

___

###  createSchedule

• **createSchedule**: *ProcedureMethod‹[CreateCheckpointScheduleParams](../interfaces/createcheckpointscheduleparams.md), [CheckpointSchedule](checkpointschedule.md)›*

*Defined in [src/api/entities/SecurityToken/Checkpoints.ts:66](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Checkpoints.ts#L66)*

Create a schedule for Checkpoint creation (i.e. "Create a checkpoint every week for 5 weeks, starting next tuesday")

**`note`** due to chain limitations, schedules are advanced and (if appropriate) executed whenever the Security Token is
  redeemed, issued or transferred between portfolios. This means that on a Security Token without much movement, there may be disparities between intended Checkpoint creation dates
  and the actual date when they are created. This, however, has no effect on the Checkpoint's accuracy regarding to balances

**`note`** required role:
  - Security Token Owner

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Namespace.ts#L9)*

___

###  removeSchedule

• **removeSchedule**: *ProcedureMethod‹[RemoveCheckpointScheduleParams](../interfaces/removecheckpointscheduleparams.md), void›*

*Defined in [src/api/entities/SecurityToken/Checkpoints.ts:76](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Checkpoints.ts#L76)*

Remove the supplied Checkpoint Schedule for a given Security Token

**`param`** Schedule (or ID) of the schedule to be removed

**`note`** required role:
  - Security Token Owner

## Methods

###  get

▸ **get**(): *Promise‹[CheckpointWithCreationDate](../interfaces/checkpointwithcreationdate.md)[]›*

*Defined in [src/api/entities/SecurityToken/Checkpoints.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Checkpoints.ts#L81)*

Retrieve all Checkpoints created on this Security Token, together with their corresponding creation Date

**Returns:** *Promise‹[CheckpointWithCreationDate](../interfaces/checkpointwithcreationdate.md)[]›*

___

###  getSchedules

▸ **getSchedules**(): *Promise‹[ScheduleWithDetails](../interfaces/schedulewithdetails.md)[]›*

*Defined in [src/api/entities/SecurityToken/Checkpoints.ts:106](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Checkpoints.ts#L106)*

Retrieve all active Checkpoint Schedules

**Returns:** *Promise‹[ScheduleWithDetails](../interfaces/schedulewithdetails.md)[]›*
