# Interface: Permissions

Permissions a Secondary Key has over the Identity. A null value means the key has
  all permissions of that type (i.e. if `tokens` is null, the key has permissions over all
  of the Identity's Security Tokens)

## Hierarchy

* **Permissions**

## Index

### Properties

* [portfolios](permissions.md#portfolios)
* [tokens](permissions.md#tokens)
* [transactionGroups](permissions.md#transactiongroups)
* [transactions](permissions.md#transactions)

## Properties

###  portfolios

• **portfolios**: *([DefaultPortfolio](../classes/defaultportfolio.md)‹› | [NumberedPortfolio](../classes/numberedportfolio.md)‹›)[] | null*

*Defined in [src/types/index.ts:558](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/types/index.ts#L558)*

___

###  tokens

• **tokens**: *[SecurityToken](../classes/securitytoken.md)[] | null*

*Defined in [src/types/index.ts:546](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/types/index.ts#L546)*

list of Security Tokens over which this key has permissions

___

###  transactionGroups

• **transactionGroups**: *[TxGroup](../enums/txgroup.md)[]*

*Defined in [src/types/index.ts:556](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/types/index.ts#L556)*

list of Transaction Groups this key can execute. Having permissions over a TxGroup
  means having permissions over every TxTag in said group. Transaction permissions are the result of
  combining these with the `transactions` array. If `transactions` is null, then this value is redundant

___

###  transactions

• **transactions**: *TxTag[] | null*

*Defined in [src/types/index.ts:550](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/types/index.ts#L550)*

list of Transactions this key can execute
