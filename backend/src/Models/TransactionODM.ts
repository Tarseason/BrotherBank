import { Schema } from 'mongoose';
import ITransaction from '../Interfaces/ITransaction';
import AbstractODM from './AbstractODM';

class TransactionODM extends AbstractODM<ITransaction> {
  constructor() {
    const schema = new Schema<ITransaction>({
      payingUserId: { type: String, required: true },
      payingUserName: { type: String },
      receivingUserId: { type: String, required: true },
      receivingUserName: { type: String },
      amountPaid: { type: Number, required: true },
      description: { type: String },
    });
    super(schema, 'Transaction');
  }
}

export default TransactionODM;