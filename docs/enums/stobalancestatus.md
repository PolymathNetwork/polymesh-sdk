# Enumeration: StoBalanceStatus

## Index

### Enumeration members

* [Available](stobalancestatus.md#available)
* [Residual](stobalancestatus.md#residual)
* [SoldOut](stobalancestatus.md#soldout)

## Enumeration members

###  Available

• **Available**: = "Available"

*Defined in [src/api/entities/Sto/types.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Sto/types.ts#L24)*

There still are Security Tokens available for purchase

___

###  Residual

• **Residual**: = "Residual"

*Defined in [src/api/entities/Sto/types.ts:34](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Sto/types.ts#L34)*

There are remaining tokens, but their added value is lower than the Offering's
  minimum investment, so they cannot be purchased. The offering should be manually closed
  to retrieve them

___

###  SoldOut

• **SoldOut**: = "SoldOut"

*Defined in [src/api/entities/Sto/types.ts:28](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Sto/types.ts#L28)*

All Security Tokens in the offering have been sold
