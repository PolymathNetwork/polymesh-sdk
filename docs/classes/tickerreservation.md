# Class: TickerReservation

Represents a reserved token symbol in the Polymesh chain. Ticker reservations expire
  after a set length of time, after which they can be reserved by another Identity.
  A Ticker must be previously reserved by an Identity for that Identity to be able create a Security Token with it

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **TickerReservation**

## Index

### Properties

* [context](tickerreservation.md#protected-context)
* [createToken](tickerreservation.md#createtoken)
* [extend](tickerreservation.md#extend)
* [ticker](tickerreservation.md#ticker)
* [uuid](tickerreservation.md#uuid)

### Methods

* [details](tickerreservation.md#details)
* [generateUuid](tickerreservation.md#static-generateuuid)
* [unserialize](tickerreservation.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Entity.ts#L48)*

___

###  createToken

• **createToken**: *ProcedureMethod‹[CreateSecurityTokenParams](../interfaces/createsecuritytokenparams.md), [SecurityToken](securitytoken.md)›*

*Defined in [src/api/entities/TickerReservation/index.ts:174](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/TickerReservation/index.ts#L174)*

Create a Security Token using the reserved ticker

**`note`** the issuer DID will be set as the primary issuance agent

**`param`** amount of tokens that will be minted on creation

**`param`** whether a single token can be divided into decimal parts

**`param`** type of security that the token represents (i.e. Equity, Debt, Commodity, etc)

**`param`** domestic or international alphanumeric security identifiers for the token (ISIN, CUSIP, etc)

**`param`** (optional) funding round in which the token currently is (Series A, Series B, etc)

**`note`** required role:
  - Ticker Owner

___

###  extend

• **extend**: *ProcedureMethod‹void, [TickerReservation](tickerreservation.md)›*

*Defined in [src/api/entities/TickerReservation/index.ts:158](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/TickerReservation/index.ts#L158)*

Extend the Reservation time period of the ticker for 60 days from now
to later use it in the creation of a Security Token.

**`note`** required role:
  - Ticker Owner

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/TickerReservation/index.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/TickerReservation/index.ts#L46)*

reserved ticker

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/Entity.ts#L46)*

## Methods

###  details

▸ **details**(): *Promise‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›*

*Defined in [src/api/entities/TickerReservation/index.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/TickerReservation/index.ts#L74)*

Retrieve the Reservation's owner, expiry date and status

**`note`** can be subscribed to

**Returns:** *Promise‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›*

▸ **details**(`callback`: [SubCallback](../globals.md#subcallback)‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/TickerReservation/index.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/05b527a2/src/api/entities/TickerReservation/index.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

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
