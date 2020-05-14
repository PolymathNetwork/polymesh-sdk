import { AddressOrPair } from '@polkadot/api/types';
import { stringUpperFirst } from '@polkadot/util';
import BigNumber from 'bignumber.js';
import P from 'bluebird';
import { reduce } from 'lodash';

import { TransactionQueue } from '~/base';
import { PolymeshError } from '~/base/PolymeshError';
import { PostTransactionValue } from '~/base/PostTransactionValue';
import { Context } from '~/context';
import { ErrorCode, Role } from '~/types';
import {
  MapMaybePostTransactionValue,
  MaybePostTransactionValue,
  PolymeshTx,
  PostTransactionValueArray,
  ResolverFunctionArray,
  TransactionSpec,
} from '~/types/internal';
import { balanceToBigNumber, posRatioToBigNumber, stringToProtocolOp } from '~/utils';

interface AddTransactionOpts<Values extends unknown[]> {
  fee?: BigNumber;
  resolvers?: ResolverFunctionArray<Values>;
  isCritical?: boolean;
  signer?: AddressOrPair;
}

/**
 * @hidden
 * Represents an operation performed on the Polymesh blockchain.
 * A Procedure can be prepared to yield a [[TransactionQueue]] that can be run
 */
export class Procedure<Args extends unknown = void, ReturnValue extends unknown = void> {
  private prepareTransactions: (
    this: Procedure<Args, ReturnValue>,
    args: Args
  ) => Promise<MaybePostTransactionValue<ReturnValue>>;

  private checkRoles: (
    this: Procedure<Args, ReturnValue>,
    args: Args
  ) => Promise<boolean> | boolean | Role[];

  private transactions: (Omit<TransactionSpec, 'fee'> & { fee: BigNumber | null })[] = [];

  public context = {} as Context;

  /**
   * @hidden
   *
   * @param prepareTransactions - function that prepares the transaction queue
   * @param checkRoles - can be an array of roles, a function that returns an array of roles, or a function that returns a boolean that determines whether the procedure can be executed by the current user
   */
  constructor(
    prepareTransactions: (
      this: Procedure<Args, ReturnValue>,
      args: Args
    ) => Promise<MaybePostTransactionValue<ReturnValue>>,
    checkRoles:
      | Role[]
      | ((
          this: Procedure<Args, ReturnValue>,
          args: Args
        ) => Promise<boolean> | boolean | Role[]) = async (): Promise<boolean> => true
  ) {
    this.prepareTransactions = prepareTransactions;

    if (Array.isArray(checkRoles)) {
      this.checkRoles = (): Role[] => checkRoles;
    } else {
      this.checkRoles = checkRoles;
    }
  }

  /**
   * @hidden
   * Reset the procedure
   */
  private cleanup(): void {
    this.transactions = [];
    this.context = {} as Context;
  }

  /**
   * Build a [[TransactionQueue]] that can be run
   *
   * @param args - arguments required to prepare the queue
   * @param context - context in which the resulting queue will run
   */
  public async prepare(args: Args, context: Context): Promise<TransactionQueue<ReturnValue>> {
    const {
      polymeshApi: {
        query: { protocolFee },
      },
    } = context;

    this.context = context;

    const checkRolesResult = await this.checkRoles(args);
    let allowed: boolean;

    if (typeof checkRolesResult !== 'boolean') {
      allowed = await context.getCurrentIdentity().hasRoles(checkRolesResult);
    } else {
      allowed = checkRolesResult;
    }

    if (!allowed) {
      throw new PolymeshError({
        code: ErrorCode.NotAuthorized,
        message: 'Current account is not authorized to execute this procedure',
      });
    }

    const [returnValue, rawCoefficient, currentBalance] = await Promise.all([
      this.prepareTransactions(args),
      protocolFee.coefficient(),
      context.accountBalance(),
    ]);
    const coefficient = posRatioToBigNumber(rawCoefficient);
    const transactionsWithFees: TransactionSpec[] = await P.map(
      this.transactions,
      async transactionSpec => {
        let { fee } = transactionSpec;
        const { tx } = transactionSpec;

        if (!fee) {
          const transaction = tx as PolymeshTx<unknown[]>; // can't be a PostTransactionValue because othewise fee would be already set manually
          const protocolOp = `${stringUpperFirst(transaction.section)}${stringUpperFirst(
            transaction.method
          )}`;

          try {
            const rawFee = await protocolFee.baseFees(stringToProtocolOp(protocolOp, context));
            fee = balanceToBigNumber(rawFee).multipliedBy(coefficient);
          } catch (err) {
            fee = new BigNumber(0);
          }
        }

        return { ...transactionSpec, fee };
      }
    );

    const fees = reduce(transactionsWithFees, (sum, { fee }) => sum.plus(fee), new BigNumber(0));

    if (currentBalance.lt(fees)) {
      throw new PolymeshError({
        code: ErrorCode.ValidationError,
        message: `Not enough POLYX balance to pay for this procedure's fees. Balance: ${currentBalance.toFormat()}, fees: ${fees.toFormat()}`,
      });
    }

    const transactionQueue = new TransactionQueue(transactionsWithFees, fees, returnValue);

    this.cleanup();

    return transactionQueue;
  }

  public addTransaction<TxArgs extends unknown[], Values extends unknown[] = []>(
    tx: PolymeshTx<TxArgs>,
    options: AddTransactionOpts<Values>,
    ...args: MapMaybePostTransactionValue<TxArgs>
  ): PostTransactionValueArray<Values>;

  public addTransaction<TxArgs extends unknown[], Values extends unknown[] = []>(
    tx: PostTransactionValue<PolymeshTx<TxArgs>>,
    options: Omit<AddTransactionOpts<Values>, 'fee'> & {
      fee: BigNumber; // fee must be provided by hand if the transaction is a future value
    },
    ...args: MapMaybePostTransactionValue<TxArgs>
  ): PostTransactionValueArray<Values>;

  /**
   * Appends a method (or [[PostTransactionValue]] that resolves to a method) into the TransactionQueue's queue. This defines
   * what will be run by the TransactionQueue when it is started.
   *
   * @param method - a method that will be run in the Procedure's TransactionQueue.
   * A future method is a transaction that doesn't exist at prepare time
   * (for example a transaction on a module that hasn't been attached but will be by the time the previous transactions are run)
   * @param options.fee - value in POLYX of the transaction (should only be set manually if the transaction is a future value or other special cases, otherwise it is fetched automatically from the chain)
   * @param options.resolvers - asynchronous calslbacks used to return runtime data after
   * the added transaction has finished successfully
   * @param options.isCritical - whether this transaction failing should make the entire queue fail or not. Defaults to true
   * @param options.signer - address or keyring pair of the account that will sign this transaction. Defaults to the current pair in the context
   * @param args - arguments to be passed to the transaction method
   *
   * @returns an array of [[PostTransactionValue]]. Each element corresponds to whatever is returned by one of the resolver functions passed as options
   */
  public addTransaction<TxArgs extends unknown[], Values extends unknown[] = []>(
    tx: MaybePostTransactionValue<PolymeshTx<TxArgs>>,
    options: AddTransactionOpts<Values>,
    ...args: MapMaybePostTransactionValue<TxArgs>
  ): PostTransactionValueArray<Values> {
    const {
      fee = null,
      resolvers = ([] as unknown) as ResolverFunctionArray<Values>,
      isCritical = true,
      signer = this.context.getCurrentPair(),
    } = options;
    const postTransactionValues = resolvers.map(
      resolver => new PostTransactionValue(resolver)
    ) as PostTransactionValueArray<Values>;

    const transaction = {
      tx: tx as PolymeshTx<unknown[]>,
      args,
      postTransactionValues,
      isCritical,
      signer,
      fee,
    };

    this.transactions.push(transaction);

    return postTransactionValues;
  }

  public async addProcedure<ProcArgs extends unknown, ReturnValue extends unknown>(
    procedure: Procedure<ProcArgs, ReturnValue>,
    args: ProcArgs
  ): Promise<MaybePostTransactionValue<ReturnValue>>;

  public async addProcedure<ReturnValue extends unknown>(
    procedure: Procedure<void, ReturnValue>
  ): Promise<MaybePostTransactionValue<ReturnValue>>;

  /**
   * Appends a Procedure into this Procedure's queue. This defines
   * what will be run by the Transaction Queue when it is started.
   *
   * @param proc - a Procedure that will be run as part of this Procedure's Transaction Queue
   * @param args - arguments to be passed to the procedure
   *
   * @returns whichever value is returned by the passed Procedure
   */
  public async addProcedure<ProcArgs extends unknown, ReturnValue extends unknown>(
    procedure: Procedure<void | ProcArgs, ReturnValue>,
    args: ProcArgs = {} as ProcArgs
  ): Promise<MaybePostTransactionValue<ReturnValue>> {
    try {
      procedure.context = this.context;
      const returnValue = await procedure.prepareTransactions(args);

      const { transactions } = procedure;
      this.transactions = [...this.transactions, ...transactions];

      return returnValue;
    } catch (err) {
      throw new PolymeshError({ code: err.code || ErrorCode.FatalError, message: err.message });
    } finally {
      procedure.cleanup();
    }
  }
}
