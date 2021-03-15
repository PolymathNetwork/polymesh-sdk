# Class: Polymesh

Main entry point of the Polymesh SDK

## Hierarchy

* **Polymesh**

## Index

### Properties

* [claims](polymesh.md#claims)
* [middleware](polymesh.md#middleware)
* [registerIdentity](polymesh.md#registeridentity)
* [reserveTicker](polymesh.md#reserveticker)
* [transferPolyX](polymesh.md#transferpolyx)

### Accessors

* [_polkadotApi](polymesh.md#_polkadotapi)

### Methods

* [getAccount](polymesh.md#getaccount)
* [getAccountBalance](polymesh.md#getaccountbalance)
* [getCurrentIdentity](polymesh.md#getcurrentidentity)
* [getIdentity](polymesh.md#getidentity)
* [getLatestBlock](polymesh.md#getlatestblock)
* [getNetworkProperties](polymesh.md#getnetworkproperties)
* [getSecurityToken](polymesh.md#getsecuritytoken)
* [getSecurityTokens](polymesh.md#getsecuritytokens)
* [getTickerReservation](polymesh.md#gettickerreservation)
* [getTickerReservations](polymesh.md#gettickerreservations)
* [getTransactionFees](polymesh.md#gettransactionfees)
* [getTreasuryAccount](polymesh.md#gettreasuryaccount)
* [getTreasuryBalance](polymesh.md#gettreasurybalance)
* [isIdentityValid](polymesh.md#isidentityvalid)
* [isTickerAvailable](polymesh.md#istickeravailable)
* [onConnectionError](polymesh.md#onconnectionerror)
* [onDisconnect](polymesh.md#ondisconnect)
* [connect](polymesh.md#static-connect)

## Properties

###  claims

• **claims**: *[Claims](claims.md)*

*Defined in [src/Polymesh.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L74)*

___

###  middleware

• **middleware**: *[Middleware](middleware.md)*

*Defined in [src/Polymesh.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L75)*

___

###  registerIdentity

• **registerIdentity**: *ProcedureMethod‹[RegisterIdentityParams](../interfaces/registeridentityparams.md), [Identity](identity.md)›*

*Defined in [src/Polymesh.ts:628](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L628)*

Register an Identity

**`note`** must be a CDD provider

**`note`** this may create [Authorization Requests](authorizationrequest.md) which have to be accepted by
  the corresponding [Accounts](account.md) and/or [Identities](../enums/scopetype.md#identity). An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:
  - Customer Due Diligence Provider

___

###  reserveTicker

• **reserveTicker**: *ProcedureMethod‹[ReserveTickerParams](../interfaces/reservetickerparams.md), [TickerReservation](tickerreservation.md)›*

*Defined in [src/Polymesh.ts:319](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L319)*

Reserve a ticker symbol to later use in the creation of a Security Token.
  The ticker will expire after a set amount of time, after which other users can reserve it

**`param`** ticker symbol to reserve

**`note`** required role:
  - Ticker Owner

___

###  transferPolyX

• **transferPolyX**: *ProcedureMethod‹[TransferPolyXParams](../interfaces/transferpolyxparams.md), void›*

*Defined in [src/Polymesh.ts:258](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L258)*

Transfer an amount of POLYX to a specified Account

**`param`** account that will receive the POLYX

**`param`** amount of POLYX to be transferred

**`param`** identifier string to help differentiate transfers

## Accessors

###  _polkadotApi

• **get _polkadotApi**(): *ApiPromise*

*Defined in [src/Polymesh.ts:642](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L642)*

Polkadot client

**Returns:** *ApiPromise*

## Methods

###  getAccount

▸ **getAccount**(): *[CurrentAccount](currentaccount.md)*

*Defined in [src/Polymesh.ts:432](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L432)*

Create an Account instance from an address. If no address is passed, the current Account is returned

**Returns:** *[CurrentAccount](currentaccount.md)*

▸ **getAccount**(`args`: object): *[Account](account.md)*

*Defined in [src/Polymesh.ts:433](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L433)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *[Account](account.md)*

___

###  getAccountBalance

▸ **getAccountBalance**(`args?`: undefined | object): *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

*Defined in [src/Polymesh.ts:267](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L267)*

Get the free/locked POLYX balance of an Account

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

▸ **getAccountBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:268](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L268)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

▸ **getAccountBalance**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:269](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L269)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`account` | string &#124; [Account](account.md) |

▪ **callback**: *[SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›*

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getCurrentIdentity

▸ **getCurrentIdentity**(): *Promise‹[CurrentIdentity](currentidentity.md) | null›*

*Defined in [src/Polymesh.ts:425](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L425)*

Retrieve the Identity associated to the current Account (null if there is none)

**Returns:** *Promise‹[CurrentIdentity](currentidentity.md) | null›*

___

###  getIdentity

▸ **getIdentity**(`args`: object): *[Identity](identity.md)*

*Defined in [src/Polymesh.ts:418](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L418)*

Create an Identity instance from a DID

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`did` | string |

**Returns:** *[Identity](identity.md)*

___

###  getLatestBlock

▸ **getLatestBlock**(): *Promise‹BigNumber›*

*Defined in [src/Polymesh.ts:633](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L633)*

Retrieve the number of the latest block in the chain

**Returns:** *Promise‹BigNumber›*

___

###  getNetworkProperties

▸ **getNetworkProperties**(): *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

*Defined in [src/Polymesh.ts:574](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L574)*

Retrieve information for the current network

**Returns:** *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

___

###  getSecurityToken

▸ **getSecurityToken**(`args`: object): *Promise‹[SecurityToken](securitytoken.md)›*

*Defined in [src/Polymesh.ts:548](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L548)*

Retrieve a Security Token

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ticker` | string | Security Token ticker  |

**Returns:** *Promise‹[SecurityToken](securitytoken.md)›*

___

###  getSecurityTokens

▸ **getSecurityTokens**(`args?`: undefined | object): *Promise‹[SecurityToken](securitytoken.md)[]›*

*Defined in [src/Polymesh.ts:516](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L516)*

Retrieve all the Security Tokens owned by an Identity

**`note`** tokens with unreadable characters in their tickers will be left out

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[SecurityToken](securitytoken.md)[]›*

___

###  getTickerReservation

▸ **getTickerReservation**(`args`: object): *Promise‹[TickerReservation](tickerreservation.md)›*

*Defined in [src/Polymesh.ts:392](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L392)*

Retrieve a Ticker Reservation

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ticker` | string | Security Token ticker  |

**Returns:** *Promise‹[TickerReservation](tickerreservation.md)›*

___

###  getTickerReservations

▸ **getTickerReservations**(`args?`: undefined | object): *Promise‹[TickerReservation](tickerreservation.md)[]›*

*Defined in [src/Polymesh.ts:358](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L358)*

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include tokens that
  have already been launched

**`note`** reservations with unreadable characters in their tickers will be left out

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[TickerReservation](tickerreservation.md)[]›*

___

###  getTransactionFees

▸ **getTransactionFees**(`args`: object): *Promise‹BigNumber›*

*Defined in [src/Polymesh.ts:460](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L460)*

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`tag` | TxTag | transaction tag (i.e. TxTags.asset.CreateAsset or "asset.createAsset")  |

**Returns:** *Promise‹BigNumber›*

___

###  getTreasuryAccount

▸ **getTreasuryAccount**(): *[Account](account.md)*

*Defined in [src/Polymesh.ts:467](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L467)*

Get the treasury wallet address

**Returns:** *[Account](account.md)*

___

###  getTreasuryBalance

▸ **getTreasuryBalance**(): *Promise‹BigNumber›*

*Defined in [src/Polymesh.ts:598](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L598)*

Get the Treasury POLYX balance

**`note`** can be subscribed to

**Returns:** *Promise‹BigNumber›*

▸ **getTreasuryBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:599](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L599)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  isIdentityValid

▸ **isIdentityValid**(`args`: object): *Promise‹boolean›*

*Defined in [src/Polymesh.ts:449](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L449)*

Return whether the supplied Identity/DID exists

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`identity` | [Identity](identity.md) &#124; string |

**Returns:** *Promise‹boolean›*

___

###  isTickerAvailable

▸ **isTickerAvailable**(`args`: object): *Promise‹boolean›*

*Defined in [src/Polymesh.ts:326](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L326)*

Check if a ticker hasn't been reserved

**`note`** can be subscribed to

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

**Returns:** *Promise‹boolean›*

▸ **isTickerAvailable**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:327](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L327)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

▪ **callback**: *[SubCallback](../globals.md#subcallback)‹boolean›*

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  onConnectionError

▸ **onConnectionError**(`callback`: function): *function*

*Defined in [src/Polymesh.ts:480](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L480)*

Handle connection errors

**Parameters:**

▪ **callback**: *function*

▸ (...`args`: unknown[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | unknown[] |

**Returns:** *function*

an unsubscribe callback

▸ (): *void*

___

###  onDisconnect

▸ **onDisconnect**(`callback`: function): *function*

*Defined in [src/Polymesh.ts:497](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L497)*

Handle disconnection

**Parameters:**

▪ **callback**: *function*

▸ (...`args`: unknown[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | unknown[] |

**Returns:** *function*

an unsubscribe callback

▸ (): *void*

___

### `Static` connect

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:103](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L103)*

Create the instance and connect to the Polymesh node using an account seed

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:113](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L113)*

Create the instance and connect to the Polymesh node using a keyring

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:127](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L127)*

Create the instance and connect to the Polymesh node using an account URI

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:137](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L137)*

Create the instance and connect to the Polymesh node using an account mnemonic

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md)): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:146](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/Polymesh.ts#L146)*

Create the instance and connect to the Polymesh node without an account

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*
