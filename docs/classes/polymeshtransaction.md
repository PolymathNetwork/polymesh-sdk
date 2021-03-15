# Class: PolymeshTransaction ‹**Args, Values**›

Wrapper class for a Polymesh Transaction

## Type parameters

▪ **Args**: *unknown[]*

▪ **Values**: *unknown[]*

## Hierarchy

* [PolymeshTransactionBase](polymeshtransactionbase.md)‹Args, Values›

  ↳ **PolymeshTransaction**

## Index

### Properties

* [blockHash](polymeshtransaction.md#optional-blockhash)
* [context](polymeshtransaction.md#protected-context)
* [error](polymeshtransaction.md#optional-error)
* [inputArgs](polymeshtransaction.md#inputargs)
* [isCritical](polymeshtransaction.md#iscritical)
* [paidByThirdParty](polymeshtransaction.md#paidbythirdparty)
* [receipt](polymeshtransaction.md#optional-receipt)
* [status](polymeshtransaction.md#status)
* [txHash](polymeshtransaction.md#optional-txhash)

### Accessors

* [args](polymeshtransaction.md#args)
* [tag](polymeshtransaction.md#tag)

### Methods

* [getFees](polymeshtransaction.md#getfees)
* [onStatusChange](polymeshtransaction.md#onstatuschange)
* [run](polymeshtransaction.md#run)

## Properties

### `Optional` blockHash

• **blockHash**? : *undefined | string*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[blockHash](polymeshtransaction.md#optional-blockhash)*

*Defined in [src/base/PolymeshTransactionBase.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshTransactionBase.ts#L55)*

hash of the block where this transaction resides (status: `Succeeded`, `Failed`)

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[context](polymeshtransaction.md#protected-context)*

*Defined in [src/base/PolymeshTransactionBase.ts:119](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshTransactionBase.ts#L119)*

___

### `Optional` error

• **error**? : *[PolymeshError](polymesherror.md)*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[error](polymeshtransaction.md#optional-error)*

*Defined in [src/base/PolymeshTransactionBase.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshTransactionBase.ts#L40)*

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

___

###  inputArgs

• **inputArgs**: *MapMaybePostTransactionValue‹Args›*

*Defined in [src/base/PolymeshTransaction.ts:26](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshTransaction.ts#L26)*

arguments for the transaction. Available after the transaction starts running
(may be Post Transaction Values from a previous transaction in the queue that haven't resolved yet)

___

###  isCritical

• **isCritical**: *boolean*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[isCritical](polymeshtransaction.md#iscritical)*

*Defined in [src/base/PolymeshTransactionBase.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshTransactionBase.ts#L60)*

whether this tx failing makes the entire tx queue fail or not

___

###  paidByThirdParty

• **paidByThirdParty**: *boolean*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[paidByThirdParty](polymeshtransaction.md#paidbythirdparty)*

*Defined in [src/base/PolymeshTransactionBase.ts:66](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshTransactionBase.ts#L66)*

whether the fees for this tx are paid by a third party.
  For example, when accepting/rejecting a request to join an Identity, fees are paid by the Identity that sent the request

___

### `Optional` receipt

• **receipt**? : *ISubmittableResult*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[receipt](polymeshtransaction.md#optional-receipt)*

*Defined in [src/base/PolymeshTransactionBase.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshTransactionBase.ts#L45)*

stores the transaction receipt (if successful)

___

###  status

• **status**: *[TransactionStatus](../enums/transactionstatus.md)* = TransactionStatus.Idle

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[status](polymeshtransaction.md#status)*

*Defined in [src/base/PolymeshTransactionBase.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshTransactionBase.ts#L35)*

current status of the transaction

___

### `Optional` txHash

• **txHash**? : *undefined | string*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[txHash](polymeshtransaction.md#optional-txhash)*

*Defined in [src/base/PolymeshTransactionBase.ts:50](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshTransactionBase.ts#L50)*

transaction hash (status: `Running`, `Succeeded`, `Failed`)

## Accessors

###  args

• **get args**(): *Args*

*Defined in [src/base/PolymeshTransaction.ts:43](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshTransaction.ts#L43)*

Arguments for the transaction

**Returns:** *Args*

___

###  tag

• **get tag**(): *TxTag*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[tag](polymeshtransaction.md#tag)*

*Defined in [src/base/PolymeshTransactionBase.ts:309](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshTransactionBase.ts#L309)*

type of transaction represented by this instance for display purposes.
If the transaction isn't defined at design time, the tag won't be set (will be empty string) until the transaction is about to be run

**Returns:** *TxTag*

## Methods

###  getFees

▸ **getFees**(): *Promise‹[Fees](../interfaces/fees.md) | null›*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[getFees](polymeshtransaction.md#getfees)*

*Defined in [src/base/PolymeshTransactionBase.ts:281](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshTransactionBase.ts#L281)*

Get all (protocol and gas) fees associated with this transaction. Returns null
if the transaction is not ready yet (this can happen if it depends on the execution of a
previous transaction in the queue)

**Returns:** *Promise‹[Fees](../interfaces/fees.md) | null›*

___

###  onStatusChange

▸ **onStatusChange**(`listener`: function): *function*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[onStatusChange](polymeshtransaction.md#onstatuschange)*

*Defined in [src/base/PolymeshTransactionBase.ts:268](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshTransactionBase.ts#L268)*

Subscribe to status changes

**Parameters:**

▪ **listener**: *function*

callback function that will be called whenever the status changes

▸ (`transaction`: this): *void*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | this |

**Returns:** *function*

unsubscribe function

▸ (): *void*

___

###  run

▸ **run**(): *Promise‹void›*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[run](polymeshtransaction.md#run)*

*Defined in [src/base/PolymeshTransactionBase.ts:153](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/base/PolymeshTransactionBase.ts#L153)*

Run the poly transaction and update the transaction status

**Returns:** *Promise‹void›*
