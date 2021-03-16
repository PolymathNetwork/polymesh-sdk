# Class: Issuance

Handles all Security Token Issuance related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Issuance**

## Index

### Properties

* [context](issuance.md#protected-context)
* [issue](issuance.md#issue)
* [parent](issuance.md#protected-parent)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Namespace.ts#L11)*

___

###  issue

• **issue**: *ProcedureMethod‹object, [SecurityToken](securitytoken.md)›*

*Defined in [src/api/entities/SecurityToken/Issuance.ts:30](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/SecurityToken/Issuance.ts#L30)*

Issue a certain amount of tokens to the primary issuance agent

**`param`** amount of tokens to be issued to primary issuance agent

**`note`** required role:
  - Security Token Primary Issuance Agent

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/c77f6a3e/src/api/entities/Namespace.ts#L9)*
