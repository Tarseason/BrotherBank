import ITransaction from '../Interfaces/ITransaction';

class Transaction {
  protected id?: string;
  protected payingUserId: string;
  protected payingUserName?: string;
  protected receivingUserId: string;
  protected receivingUserName?: string;
  protected amountPaid: number;
  protected description?: string;

  constructor(trans: ITransaction) {
    this.id = trans.id;
    this.payingUserId = trans.payingUserId;
    this.payingUserName = trans.payingUserName;
    this.receivingUserId = trans.receivingUserId;
    this.receivingUserName = trans.receivingUserName;
    this.amountPaid = trans.amountPaid;
    this.description = trans.description;
  }
}

export default Transaction;