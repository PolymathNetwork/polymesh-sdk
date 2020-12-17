# NumberedPortfolio

Represents a numbered \(non-default\) Portfolio for an Identity

## Hierarchy

↳ [Portfolio](portfolio.md)

↳ **NumberedPortfolio**

## Index

### Properties

* [\_id](numberedportfolio.md#protected-optional-_id)
* [context](numberedportfolio.md#protected-context)
* [id](numberedportfolio.md#id)
* [owner](numberedportfolio.md#owner)
* [uuid](numberedportfolio.md#uuid)

### Methods

* [createdAt](numberedportfolio.md#createdat)
* [delete](numberedportfolio.md#delete)
* [exists](numberedportfolio.md#exists)
* [getCustodian](numberedportfolio.md#getcustodian)
* [getName](numberedportfolio.md#getname)
* [getTokenBalances](numberedportfolio.md#gettokenbalances)
* [isCustodiedBy](numberedportfolio.md#iscustodiedby)
* [isOwnedBy](numberedportfolio.md#isownedby)
* [modifyName](numberedportfolio.md#modifyname)
* [moveFunds](numberedportfolio.md#movefunds)
* [setCustodian](numberedportfolio.md#setcustodian)
* [generateUuid](numberedportfolio.md#static-generateuuid)
* [unserialize](numberedportfolio.md#static-unserialize)

## Properties

### `Protected` `Optional` \_id

• **\_id**? : _BigNumber_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_\_id_](portfolio.md#protected-optional-_id)

_Defined in_ [_src/api/entities/Portfolio/index.ts:53_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L53)

internal Portfolio identifier \(unused for default Portfolio\)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L48)

### id

• **id**: _BigNumber_

_Defined in_ [_src/api/entities/NumberedPortfolio.ts:38_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/NumberedPortfolio.ts#L38)

portfolio identifier number

### owner

• **owner**: [_Identity_](identity.md)

_Inherited from_ [_Portfolio_](portfolio.md)_._[_owner_](portfolio.md#owner)

_Defined in_ [_src/api/entities/Portfolio/index.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L48)

identity of the Portfolio's owner

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L46)

## Methods

### createdAt

▸ **createdAt**\(\): _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

_Defined in_ [_src/api/entities/NumberedPortfolio.ts:102_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/NumberedPortfolio.ts#L102)

Retrieve the identifier data \(block number, date and event index\) of the event that was emitted when this portfolio was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

### delete

▸ **delete**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/NumberedPortfolio.ts:54_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/NumberedPortfolio.ts#L54)

Delete this Portfolio

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### exists

▸ **exists**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/NumberedPortfolio.ts:135_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/NumberedPortfolio.ts#L135)

Return whether this Portfolio exists

**Returns:** _Promise‹boolean›_

### getCustodian

▸ **getCustodian**\(\): _Promise‹_[_Identity_](identity.md)_›_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_getCustodian_](portfolio.md#getcustodian)

_Defined in_ [_src/api/entities/Portfolio/index.ts:199_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L199)

Retrieve the custodian Identity of this Portfolio

**`note`** if no custodian is set, the owner Identity is returned

**Returns:** _Promise‹_[_Identity_](identity.md)_›_

### getName

▸ **getName**\(\): _Promise‹string›_

_Defined in_ [_src/api/entities/NumberedPortfolio.ts:79_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/NumberedPortfolio.ts#L79)

Return the Portfolio name

**Returns:** _Promise‹string›_

### getTokenBalances

▸ **getTokenBalances**\(`args?`: undefined \| object\): _Promise‹_[_PortfolioBalance_](../interfaces/portfoliobalance.md)_\[\]›_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_getTokenBalances_](portfolio.md#gettokenbalances)

_Defined in_ [_src/api/entities/Portfolio/index.ts:104_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L104)

Retrieve the balances of all assets in this Portfolio

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_PortfolioBalance_](../interfaces/portfoliobalance.md)_\[\]›_

### isCustodiedBy

▸ **isCustodiedBy**\(`args?`: undefined \| object\): _Promise‹boolean›_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_isCustodiedBy_](portfolio.md#iscustodiedby)

_Defined in_ [_src/api/entities/Portfolio/index.ts:88_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L88)

Return whether an Identity is the Portfolio custodian

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹boolean›_

### isOwnedBy

▸ **isOwnedBy**\(`args?`: undefined \| object\): _Promise‹boolean›_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_isOwnedBy_](portfolio.md#isownedby)

_Defined in_ [_src/api/entities/Portfolio/index.ts:72_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L72)

Return whether an Identity is the Portfolio owner

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹boolean›_

### modifyName

▸ **modifyName**\(`args`: [RenamePortfolioParams](../interfaces/renameportfolioparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_NumberedPortfolio_](numberedportfolio.md)_››_

_Defined in_ [_src/api/entities/NumberedPortfolio.ts:65_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/NumberedPortfolio.ts#L65)

Rename portfolio

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [RenamePortfolioParams](../interfaces/renameportfolioparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_NumberedPortfolio_](numberedportfolio.md)_››_

### moveFunds

▸ **moveFunds**\(`args`: [MoveFundsParams](../interfaces/movefundsparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_moveFunds_](portfolio.md#movefunds)

_Defined in_ [_src/api/entities/Portfolio/index.ts:190_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L190)

Moves funds from this Portfolio to another one owned by the same Identity

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [MoveFundsParams](../interfaces/movefundsparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### setCustodian

▸ **setCustodian**\(`args`: [SetCustodianParams](../interfaces/setcustodianparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_setCustodian_](portfolio.md#setcustodian)

_Defined in_ [_src/api/entities/Portfolio/index.ts:174_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L174)

Send an invitation to an Identity to assign it as custodian for this Portfolio

**`note`** this may create an AuthorizationRequest which has to be accepted by the corresponding Identity. An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [SetCustodianParams](../interfaces/setcustodianparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_
