# Enumeration: TransactionQueueStatus

## Index

### Enumeration members

* [Failed](transactionqueuestatus.md#failed)
* [Idle](transactionqueuestatus.md#idle)
* [Running](transactionqueuestatus.md#running)
* [Succeeded](transactionqueuestatus.md#succeeded)

## Enumeration members

###  Failed

• **Failed**: = "Failed"

*Defined in [src/types/index.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/types/index.ts#L72)*

a critical transaction's execution failed.
This might mean the transaction was rejected,
failed due to a revert or never entered a block

___

###  Idle

• **Idle**: = "Idle"

*Defined in [src/types/index.ts:62](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/types/index.ts#L62)*

the queue is prepped to run

___

###  Running

• **Running**: = "Running"

*Defined in [src/types/index.ts:66](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/types/index.ts#L66)*

transactions in the queue are being executed

___

###  Succeeded

• **Succeeded**: = "Succeeded"

*Defined in [src/types/index.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/types/index.ts#L77)*

the queue finished running all of its transactions. Non-critical transactions
might still have failed
