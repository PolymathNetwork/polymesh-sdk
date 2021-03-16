# Class: PolymeshTransactionBase ‹**Args, Values**›

Wrapper class for a Polymesh Transaction

## Type parameters

▪ **Args**: *unknown[]*

▪ **Values**: *unknown[]*

## Hierarchy

* **PolymeshTransactionBase**

  ↳ [PolymeshTransaction](polymeshtransaction.md)

  ↳ [PolymeshTransactionBatch](polymeshtransactionbatch.md)

## Index

### Properties

* [blockHash](polymeshtransactionbase.md#optional-blockhash)
* [context](polymeshtransactionbase.md#protected-context)
* [error](polymeshtransactionbase.md#optional-error)
* [isCritical](polymeshtransactionbase.md#iscritical)
* [paidByThirdParty](polymeshtransactionbase.md#paidbythirdparty)
* [receipt](polymeshtransactionbase.md#optional-receipt)
* [status](polymeshtransactionbase.md#status)
* [txHash](polymeshtransactionbase.md#optional-txhash)

### Accessors

* [tag](polymeshtransactionbase.md#tag)

### Methods

* [getFees](polymeshtransactionbase.md#getfees)
* [onStatusChange](polymeshtransactionbase.md#onstatuschange)
* [run](polymeshtransactionbase.md#run)

## Properties

### `Optional` blockHash

• **blockHash**? : *undefined | string*

*Defined in [src/base/PolymeshTransactionBase.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/PolymeshTransactionBase.ts#L55)*

hash of the block where this transaction resides (status: `Succeeded`, `Failed`)

___

### `Protected` context

• **context**: *[Context](context.md)*

*Defined in [src/base/PolymeshTransactionBase.ts:119](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/PolymeshTransactionBase.ts#L119)*

___

### `Optional` error

• **error**? : *[PolymeshError](polymesherror.md)*

*Defined in [src/base/PolymeshTransactionBase.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/PolymeshTransactionBase.ts#L40)*

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

___

###  isCritical

• **isCritical**: *boolean*

*Defined in [src/base/PolymeshTransactionBase.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/PolymeshTransactionBase.ts#L60)*

whether this tx failing makes the entire tx queue fail or not

___

###  paidByThirdParty

• **paidByThirdParty**: *boolean*

*Defined in [src/base/PolymeshTransactionBase.ts:66](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/PolymeshTransactionBase.ts#L66)*

whether the fees for this tx are paid by a third party.
  For example, when accepting/rejecting a request to join an Identity, fees are paid by the Identity that sent the request

___

### `Optional` receipt

• **receipt**? : *ISubmittableResult*

*Defined in [src/base/PolymeshTransactionBase.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/PolymeshTransactionBase.ts#L45)*

stores the transaction receipt (if successful)

___

###  status

• **status**: *[TransactionStatus](../enums/transactionstatus.md)* = TransactionStatus.Idle

*Defined in [src/base/PolymeshTransactionBase.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/PolymeshTransactionBase.ts#L35)*

current status of the transaction

___

### `Optional` txHash

• **txHash**? : *undefined | string*

*Defined in [src/base/PolymeshTransactionBase.ts:50](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/PolymeshTransactionBase.ts#L50)*

transaction hash (status: `Running`, `Succeeded`, `Failed`)

## Accessors

###  tag

• **get tag**(): *TxTag*

*Defined in [src/base/PolymeshTransactionBase.ts:309](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/PolymeshTransactionBase.ts#L309)*

type of transaction represented by this instance for display purposes.
If the transaction isn't defined at design time, the tag won't be set (will be empty string) until the transaction is about to be run

**Returns:** *TxTag*

## Methods

###  getFees

▸ **getFees**(): *Promise‹[Fees](../interfaces/fees.md) | null›*

*Defined in [src/base/PolymeshTransactionBase.ts:281](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/PolymeshTransactionBase.ts#L281)*

Get all (protocol and gas) fees associated with this transaction. Returns null
if the transaction is not ready yet (this can happen if it depends on the execution of a
previous transaction in the queue)

**Returns:** *Promise‹[Fees](../interfaces/fees.md) | null›*

___

###  onStatusChange

▸ **onStatusChange**(`listener`: function): *function*

*Defined in [src/base/PolymeshTransactionBase.ts:268](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/PolymeshTransactionBase.ts#L268)*

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

*Defined in [src/base/PolymeshTransactionBase.ts:153](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/PolymeshTransactionBase.ts#L153)*

Run the poly transaction and update the transaction status

**Returns:** *Promise‹void›*
