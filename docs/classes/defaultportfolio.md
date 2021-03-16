# Class: DefaultPortfolio

Represents the default Portfolio for an Identity

## Hierarchy

  ↳ [Portfolio](portfolio.md)

  ↳ **DefaultPortfolio**

## Index

### Properties

* [_id](defaultportfolio.md#protected-optional-_id)
* [context](defaultportfolio.md#protected-context)
* [moveFunds](defaultportfolio.md#movefunds)
* [owner](defaultportfolio.md#owner)
* [setCustodian](defaultportfolio.md#setcustodian)
* [uuid](defaultportfolio.md#uuid)

### Methods

* [getCustodian](defaultportfolio.md#getcustodian)
* [getTokenBalances](defaultportfolio.md#gettokenbalances)
* [getTransactionHistory](defaultportfolio.md#gettransactionhistory)
* [isCustodiedBy](defaultportfolio.md#iscustodiedby)
* [isOwnedBy](defaultportfolio.md#isownedby)
* [generateUuid](defaultportfolio.md#static-generateuuid)
* [unserialize](defaultportfolio.md#static-unserialize)

## Properties

### `Protected` `Optional` _id

• **_id**? : *BigNumber*

*Inherited from [Portfolio](portfolio.md).[_id](portfolio.md#protected-optional-_id)*

*Defined in [src/api/entities/Portfolio/index.ts:59](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Portfolio/index.ts#L59)*

internal Portfolio identifier (unused for default Portfolio)

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L48)*

___

###  moveFunds

• **moveFunds**: *ProcedureMethod‹[MoveFundsParams](../interfaces/movefundsparams.md), void›*

*Inherited from [Portfolio](portfolio.md).[moveFunds](portfolio.md#movefunds)*

*Defined in [src/api/entities/Portfolio/index.ts:202](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Portfolio/index.ts#L202)*

Moves funds from this Portfolio to another one owned by the same Identity

**`param`** portfolio (or portfolio ID) that will receive the funds. Optional, if no value is passed, the funds will be moved to the default Portfolio of this Portfolio's owner

**`param`** list of tokens (and their corresponding amounts) that will be moved

**`note`** required role:
  - Portfolio Custodian

___

###  owner

• **owner**: *[Identity](identity.md)*

*Inherited from [Portfolio](portfolio.md).[owner](portfolio.md#owner)*

*Defined in [src/api/entities/Portfolio/index.ts:54](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Portfolio/index.ts#L54)*

identity of the Portfolio's owner

___

###  setCustodian

• **setCustodian**: *ProcedureMethod‹[SetCustodianParams](../interfaces/setcustodianparams.md), void›*

*Inherited from [Portfolio](portfolio.md).[setCustodian](portfolio.md#setcustodian)*

*Defined in [src/api/entities/Portfolio/index.ts:190](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Portfolio/index.ts#L190)*

Send an invitation to an Identity to assign it as custodian for this Portfolio

**`note`** this may create an AuthorizationRequest which has to be accepted by
  the corresponding Identity. An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:
  - Portfolio Custodian

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L46)*

## Methods

###  getCustodian

▸ **getCustodian**(): *Promise‹[Identity](identity.md)›*

*Inherited from [Portfolio](portfolio.md).[getCustodian](portfolio.md#getcustodian)*

*Defined in [src/api/entities/Portfolio/index.ts:209](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Portfolio/index.ts#L209)*

Retrieve the custodian Identity of this Portfolio

**`note`** if no custodian is set, the owner Identity is returned

**Returns:** *Promise‹[Identity](identity.md)›*

___

###  getTokenBalances

▸ **getTokenBalances**(`args?`: undefined | object): *Promise‹[PortfolioBalance](../interfaces/portfoliobalance.md)[]›*

*Inherited from [Portfolio](portfolio.md).[getTokenBalances](portfolio.md#gettokenbalances)*

*Defined in [src/api/entities/Portfolio/index.ts:116](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Portfolio/index.ts#L116)*

Retrieve the balances of all assets in this Portfolio

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[PortfolioBalance](../interfaces/portfoliobalance.md)[]›*

___

###  getTransactionHistory

▸ **getTransactionHistory**(`filters`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[HistoricSettlement](../interfaces/historicsettlement.md)››*

*Inherited from [Portfolio](portfolio.md).[getTransactionHistory](portfolio.md#gettransactionhistory)*

*Defined in [src/api/entities/Portfolio/index.ts:244](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Portfolio/index.ts#L244)*

Retrieve a list of transactions where this portfolio was involved. Can be filtered using parameters

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **filters**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`account?` | undefined &#124; string | account involved in the settlement |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`ticker?` | undefined &#124; string | ticker involved in the transaction |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[HistoricSettlement](../interfaces/historicsettlement.md)››*

___

###  isCustodiedBy

▸ **isCustodiedBy**(`args?`: undefined | object): *Promise‹boolean›*

*Inherited from [Portfolio](portfolio.md).[isCustodiedBy](portfolio.md#iscustodiedby)*

*Defined in [src/api/entities/Portfolio/index.ts:100](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Portfolio/index.ts#L100)*

Return whether an Identity is the Portfolio custodian

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹boolean›*

___

###  isOwnedBy

▸ **isOwnedBy**(`args?`: undefined | object): *Promise‹boolean›*

*Inherited from [Portfolio](portfolio.md).[isOwnedBy](portfolio.md#isownedby)*

*Defined in [src/api/entities/Portfolio/index.ts:84](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Portfolio/index.ts#L84)*

Return whether an Identity is the Portfolio owner

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹boolean›*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L14)*

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

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*
