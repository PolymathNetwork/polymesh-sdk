# Class: Sto

Represents a Security Token Offering in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **Sto**

## Index

### Properties

* [close](sto.md#close)
* [context](sto.md#protected-context)
* [freeze](sto.md#freeze)
* [id](sto.md#id)
* [invest](sto.md#invest)
* [modifyTimes](sto.md#modifytimes)
* [ticker](sto.md#ticker)
* [unfreeze](sto.md#unfreeze)
* [uuid](sto.md#uuid)

### Methods

* [details](sto.md#details)
* [getInvestments](sto.md#getinvestments)
* [generateUuid](sto.md#static-generateuuid)
* [unserialize](sto.md#static-unserialize)

## Properties

###  close

• **close**: *ProcedureMethod‹void, void›*

*Defined in [src/api/entities/Sto/index.ts:137](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Sto/index.ts#L137)*

Close the STO

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L48)*

___

###  freeze

• **freeze**: *ProcedureMethod‹void, [Sto](sto.md)›*

*Defined in [src/api/entities/Sto/index.ts:145](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Sto/index.ts#L145)*

Freeze the STO

**`note`** required role:
  - Security Token Primary Issuance Agent

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/Sto/index.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Sto/index.ts#L48)*

identifier number of the Offering

___

###  invest

• **invest**: *ProcedureMethod‹[InvestInStoParams](../interfaces/investinstoparams.md), void›*

*Defined in [src/api/entities/Sto/index.ts:183](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Sto/index.ts#L183)*

Invest in the STO

**`param`** portfolio in which the purchased Tokens will be stored

**`param`** portfolio from which funds will be withdrawn to pay for the Tokens

**`param`** amount of tokens to purchase

**`param`** maximum price to pay per Token (optional)

**`note`** required roles:
  - Purchase Portfolio Custodian
  - Funding Portfolio Custodian

___

###  modifyTimes

• **modifyTimes**: *ProcedureMethod‹[ModifyStoTimesParams](../globals.md#modifystotimesparams), void›*

*Defined in [src/api/entities/Sto/index.ts:169](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Sto/index.ts#L169)*

Modify the start/end time of the STO

**`param`** new start time (optional, will be left the same if not passed)

**`param`** new end time (optional, will be left th same if not passed). A null value means the STO doesn't end

**`throws`** if:
  - Trying to modify the start time on an STO that already started
  - Trying to modify anything on an STO that already ended
  - Trying to change start or end time to a past date

**`note`** required role:
  - Security Token Primary Issuance Agent

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/Sto/index.ts:53](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Sto/index.ts#L53)*

ticker of the Security Token being offered

___

###  unfreeze

• **unfreeze**: *ProcedureMethod‹void, [Sto](sto.md)›*

*Defined in [src/api/entities/Sto/index.ts:153](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Sto/index.ts#L153)*

Unfreeze the STO

**`note`** required role:
  - Security Token Primary Issuance Agent

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Entity.ts#L46)*

## Methods

###  details

▸ **details**(): *Promise‹[StoDetails](../interfaces/stodetails.md)›*

*Defined in [src/api/entities/Sto/index.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Sto/index.ts#L87)*

Retrieve the STO's details

**`note`** can be subscribed to

**Returns:** *Promise‹[StoDetails](../interfaces/stodetails.md)›*

▸ **details**(`callback`: [SubCallback](../globals.md#subcallback)‹[StoDetails](../interfaces/stodetails.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Sto/index.ts:88](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Sto/index.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[StoDetails](../interfaces/stodetails.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getInvestments

▸ **getInvestments**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[Investment](../interfaces/investment.md)››*

*Defined in [src/api/entities/Sto/index.ts:194](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Sto/index.ts#L194)*

Retrieve all investments made on this STO

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[Investment](../interfaces/investment.md)››*

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
