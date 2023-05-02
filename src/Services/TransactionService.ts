import Transaction from '../Domains/Transaction';
import ITransaction from '../Interfaces/ITransaction';
import TransactionODM from '../Models/TransactionODM';

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
    return this.createTransactionDomain(newTrans)
  }
}

export default TransactionService;