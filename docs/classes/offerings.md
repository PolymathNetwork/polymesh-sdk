# Class: Offerings

Handles all Security Token Offering related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Offerings**

## Index

### Properties

* [context](offerings.md#protected-context)
* [launch](offerings.md#launch)
* [parent](offerings.md#protected-parent)

### Methods

* [get](offerings.md#get)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Namespace.ts#L11)*

___

###  launch

• **launch**: *ProcedureMethod‹LaunchStoParams, [Sto](sto.md)›*

*Defined in [src/api/entities/SecurityToken/Offerings.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Offerings.ts#L46)*

Launch a Security Token Offering

**`param`** portfolio in which the Tokens to be sold are stored
  (optional, defaults to the default portfolio of the Security Token's Primary Issuance Agent)

**`param`** portfolio in which the raised funds will be stored

**`param`** ticker symbol of the currency in which the funds are being raised (i.e. 'USD' or 'CAD').
  Other Security Tokens can be used as currency as well

**`param`** venue through which all offering related trades will be settled
  (optional, defaults to the first `Sto` type Venue owned by the owner of the Offering Portfolio.
  If passed, it must be of type `Sto`)

**`param`** start date of the Offering (optional, defaults to right now)

**`param`** end date of the Offering (optional, defaults to never)

**`param`** array of sale tiers. Each tier consists of an amount of Tokens to be sold at a certain price.
  Tokens in a tier can only be bought when all Tokens in previous tiers have been bought

**`param`** minimum amount that can be spent on this offering

**`note`** required roles:
  - Security Token Primary Issuance Agent
  - Offering Portfolio Custodian
  - Raising Portfolio Custodian

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Namespace.ts#L9)*

## Methods

###  get

▸ **get**(`opts`: object): *Promise‹[StoWithDetails](../interfaces/stowithdetails.md)[]›*

*Defined in [src/api/entities/SecurityToken/Offerings.ts:53](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Offerings.ts#L53)*

Retrieve all of the Token's Offerings. Can be filtered using parameters

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`status?` | Partial‹[StoStatus](../interfaces/stostatus.md)› | status of the offerings to fetch. If defined, only STOs that have all passed statuses will be returned  |

**Returns:** *Promise‹[StoWithDetails](../interfaces/stowithdetails.md)[]›*
