import Transaction from '../Domains/Transaction';
import ITransaction from '../Interfaces/ITransaction';
import IUser from '../Interfaces/IUser';
import ErrorHTTP from '../Middlewares/Helpers/ErrorHTTP';
import TransactionODM from '../Models/TransactionODM';
import HTTPCodes from '../Utils/HTTPCodes';

class TransactionService {
  private transactionODM = new TransactionODM();
  private createTransactionDomain(trans: ITransaction | null): Transaction | null {
    if (trans) {
      return new Transaction(trans);
    }
    return null;
  }

  public async createTransaction(trans: ITransaction) {
    const newTrans = await this.transactionODM.create(trans);
    return this.createTransactionDomain(newTrans);
  }

  public async getAllTransaction() {
    const result = await this.transactionODM.getAll();
    const transactions = result.map((trans) => this.createTransactionDomain(trans));
    return transactions;
  }

  public async byIdTransaction(id: string) {
    const result = await this.transactionODM.byIdTransaction(id);
    const transactions = result.map((trans) => this.createTransactionDomain(trans));
    return transactions;
  }

  public async balanceMoneyUser(user: IUser, obj: ITransaction) {
    if (user.id === obj.payingUserId) {
      if (user.amountMoney < obj.amountPaid) {
        throw new ErrorHTTP(HTTPCodes.NOT_AUTHORIZATED, 'Saldo insuficiente');
      }
      const balanceMoney = {
        ...user,
        amountMoney: user.amountMoney - obj.amountPaid,
      };
      return balanceMoney;
    }

    const balanceMoney = {
      ...user,
      amountMoney: user.amountMoney + obj.amountPaid,
    };
    return balanceMoney;
  }
}

export default TransactionService;