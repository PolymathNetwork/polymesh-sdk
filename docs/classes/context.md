# Class: Context

Context in which the SDK is being used

- Holds the current low level API
- Holds the current keyring pair
- Holds the current Identity

## Hierarchy

* **Context**

## Index

### Properties

* [currentPair](context.md#optional-currentpair)
* [isArchiveNode](context.md#isarchivenode)
* [polymeshApi](context.md#polymeshapi)
* [ss58Format](context.md#ss58format)

### Accessors

* [middlewareApi](context.md#middlewareapi)

### Methods

* [accountBalance](context.md#accountbalance)
* [getAccounts](context.md#getaccounts)
* [getCurrentAccount](context.md#getcurrentaccount)
* [getCurrentIdentity](context.md#getcurrentidentity)
* [getCurrentPair](context.md#getcurrentpair)
* [getInvalidDids](context.md#getinvaliddids)
* [getLatestBlock](context.md#getlatestblock)
* [getSecondaryKeys](context.md#getsecondarykeys)
* [getSigner](context.md#getsigner)
* [getTransactionArguments](context.md#gettransactionarguments)
* [getTransactionFees](context.md#gettransactionfees)
* [isMiddlewareAvailable](context.md#ismiddlewareavailable)
* [isMiddlewareEnabled](context.md#ismiddlewareenabled)
* [issuedClaims](context.md#issuedclaims)
* [queryMiddleware](context.md#querymiddleware)
* [setPair](context.md#setpair)
* [create](context.md#static-create)

## Properties

### `Optional` currentPair

• **currentPair**? : *[KeyringPair](../interfaces/keyringpair.md)*

*Defined in [src/base/Context.ts:84](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L84)*

___

###  isArchiveNode

• **isArchiveNode**: *boolean* = false

*Defined in [src/base/Context.ts:89](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L89)*

Whether the current node is an archive node (contains a full history from genesis onward) or not

___

###  polymeshApi

• **polymeshApi**: *ApiPromise*

*Defined in [src/base/Context.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L82)*

___

###  ss58Format

• **ss58Format**: *number* = DEFAULT_SS58_FORMAT

*Defined in [src/base/Context.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L91)*

## Accessors

###  middlewareApi

• **get middlewareApi**(): *ApolloClient‹NormalizedCacheObject›*

*Defined in [src/base/Context.ts:790](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L790)*

Retrieve the middleware client

**`throws`** if the middleware is not enabled

**Returns:** *ApolloClient‹NormalizedCacheObject›*

## Methods

###  accountBalance

▸ **accountBalance**(`account?`: string | [Account](account.md)): *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

*Defined in [src/base/Context.ts:239](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L239)*

Retrieve the account level POLYX balance

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`account?` | string &#124; [Account](account.md) |

**Returns:** *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

▸ **accountBalance**(`account`: string | [Account](account.md) | undefined, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/base/Context.ts:240](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L240)*

Retrieve the account level POLYX balance

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`account` | string &#124; [Account](account.md) &#124; undefined |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getAccounts

▸ **getAccounts**(): *Array‹[AccountData](../interfaces/accountdata.md)›*

*Defined in [src/base/Context.ts:212](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L212)*

Retrieve a list of addresses associated with the account

**Returns:** *Array‹[AccountData](../interfaces/accountdata.md)›*

___

###  getCurrentAccount

▸ **getCurrentAccount**(): *[CurrentAccount](currentaccount.md)*

*Defined in [src/base/Context.ts:298](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L298)*

Retrieve current Account

**`throws`** if there is no current account associated to the SDK instance

**Returns:** *[CurrentAccount](currentaccount.md)*

___

###  getCurrentIdentity

▸ **getCurrentIdentity**(): *Promise‹[CurrentIdentity](currentidentity.md)›*

*Defined in [src/base/Context.ts:318](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L318)*

Retrieve current Identity

**`throws`** if there is no Identity associated to the current Account (or there is no current Account associated to the SDK instance)

**Returns:** *Promise‹[CurrentIdentity](currentidentity.md)›*

___

###  getCurrentPair

▸ **getCurrentPair**(): *[KeyringPair](../interfaces/keyringpair.md)*

*Defined in [src/base/Context.ts:338](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L338)*

Retrieve current Keyring Pair

**`throws`** if there is no Account associated to the SDK instance

**Returns:** *[KeyringPair](../interfaces/keyringpair.md)*

___

###  getInvalidDids

▸ **getInvalidDids**(`identities`: (string | [Identity](identity.md)‹›)[]): *Promise‹string[]›*

*Defined in [src/base/Context.ts:366](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L366)*

Check whether Identities exist

**Parameters:**

Name | Type |
------ | ------ |
`identities` | (string &#124; [Identity](identity.md)‹›)[] |

**Returns:** *Promise‹string[]›*

___

###  getLatestBlock

▸ **getLatestBlock**(): *Promise‹BigNumber›*

*Defined in [src/base/Context.ts:848](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L848)*

Retrieve the latest block number

**Returns:** *Promise‹BigNumber›*

___

###  getSecondaryKeys

▸ **getSecondaryKeys**(): *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

*Defined in [src/base/Context.ts:564](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L564)*

Retrieve the list of secondary keys related to the Account

**`note`** can be subscribed to

**Returns:** *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

▸ **getSecondaryKeys**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/base/Context.ts:565](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L565)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getSigner

▸ **getSigner**(): *AddressOrPair*

*Defined in [src/base/Context.ts:353](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L353)*

Retrieve the signer address (or keyring pair)

**Returns:** *AddressOrPair*

___

###  getTransactionArguments

▸ **getTransactionArguments**(`args`: object): *[TransactionArgument](../globals.md#transactionargument)[]*

*Defined in [src/base/Context.ts:416](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L416)*

Retrieve the types of arguments that a certain transaction requires to be run

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`tag` | TxTag | tag associated with the transaction that will be executed if the proposal passes  |

**Returns:** *[TransactionArgument](../globals.md#transactionargument)[]*

___

###  getTransactionFees

▸ **getTransactionFees**(`tag`: TxTag): *Promise‹BigNumber›*

*Defined in [src/base/Context.ts:389](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L389)*

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tag` | TxTag | transaction tag (i.e. TxTags.asset.CreateAsset or "asset.createAsset")  |

**Returns:** *Promise‹BigNumber›*

___

###  isMiddlewareAvailable

▸ **isMiddlewareAvailable**(): *Promise‹boolean›*

*Defined in [src/base/Context.ts:835](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L835)*

Return whether the middleware is enabled and online

**Returns:** *Promise‹boolean›*

___

###  isMiddlewareEnabled

▸ **isMiddlewareEnabled**(): *boolean*

*Defined in [src/base/Context.ts:828](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L828)*

Return whether the middleware was enabled at startup

**Returns:** *boolean*

___

###  issuedClaims

▸ **issuedClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

*Defined in [src/base/Context.ts:739](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L739)*

Retrieve a list of claims. Can be filtered using parameters

**`note`** uses the middleware (optional)

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`claimTypes?` | [ClaimType](../enums/claimtype.md)[] | types of the claims to fetch. Defaults to any type |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`targets?` | (string &#124; [Identity](identity.md)‹›)[] | identities (or Identity IDs) for which to fetch claims (targets). Defaults to all targets |
`trustedClaimIssuers?` | (string &#124; [Identity](identity.md)‹›)[] | identity IDs of claim issuers. Defaults to all claim issuers |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

___

###  queryMiddleware

▸ **queryMiddleware**‹**Result**›(`query`: GraphqlQuery‹unknown›): *Promise‹ApolloQueryResult‹Result››*

*Defined in [src/base/Context.ts:806](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L806)*

Make a query to the middleware server using the apollo client

**Type parameters:**

▪ **Result**: *Partial‹Query›*

**Parameters:**

Name | Type |
------ | ------ |
`query` | GraphqlQuery‹unknown› |

**Returns:** *Promise‹ApolloQueryResult‹Result››*

___

###  setPair

▸ **setPair**(`address`: string): *Promise‹void›*

*Defined in [src/base/Context.ts:222](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L222)*

Set a pair as the current account keyring pair

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *Promise‹void›*

___

### `Static` create

▸ **create**(`params`: object): *Promise‹[Context](context.md)›*

*Defined in [src/base/Context.ts:125](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/base/Context.ts#L125)*

Create the Context instance

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`accountMnemonic?` | undefined &#124; string |
`accountSeed?` | undefined &#124; string |
`accountUri?` | undefined &#124; string |
`keyring?` | [CommonKeyring](../globals.md#commonkeyring) &#124; [UiKeyring](../interfaces/uikeyring.md) |
`middlewareApi` | ApolloClient‹NormalizedCacheObject› &#124; null |
`polymeshApi` | ApiPromise |

**Returns:** *Promise‹[Context](context.md)›*
