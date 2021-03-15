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

*Defined in [src/types/index.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L70)*

a critical transaction's execution failed.
This might mean the transaction was rejected,
failed due to a revert or never entered a block

___

###  Idle

• **Idle**: = "Idle"

*Defined in [src/types/index.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L60)*

the queue is prepped to run

___

###  Running

• **Running**: = "Running"

*Defined in [src/types/index.ts:64](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L64)*

transactions in the queue are being executed

___

###  Succeeded

• **Succeeded**: = "Succeeded"

*Defined in [src/types/index.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/types/index.ts#L75)*

the queue finished running all of its transactions. Non-critical transactions
might still have failed
