# TickerReservationDetails

## Hierarchy

* **TickerReservationDetails**

## Index

### Properties

* [expiryDate](tickerreservationdetails.md#expirydate)
* [owner](tickerreservationdetails.md#owner)
* [status](tickerreservationdetails.md#status)

## Properties

### expiryDate

• **expiryDate**: _Date \| null_

_Defined in_ [_src/api/entities/TickerReservation/types.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/TickerReservation/types.ts#L11)

date at which the reservation expires, null if it never expires \(permanent reservation or token already launched\)

### owner

• **owner**: [_Identity_](../classes/identity.md) _\| null_

_Defined in_ [_src/api/entities/TickerReservation/types.ts:7_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/TickerReservation/types.ts#L7)

identity ID of the owner of the ticker, null if it hasn't been reserved

### status

• **status**: [_TickerReservationStatus_](../enums/tickerreservationstatus.md)

_Defined in_ [_src/api/entities/TickerReservation/types.ts:12_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/TickerReservation/types.ts#L12)
