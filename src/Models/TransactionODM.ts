import { Schema } from 'mongoose';
import ITransaction from '../Interfaces/ITransaction';
import AbstractODM from './AbstractODM';

class TransactionODM extends AbstractODM<ITransaction> {
  constructor() {
    const schema = new Schema<ITransaction>({
      payingUserId: { type: String, required: true },
      payingUserName: { type: String, required: true },
      receivingUserId: { type: String, required: true },
      receivingUserName: { type: String, required: true },
      amountPaid: { type: Number, required: true },
      description: { type: String },
    });
    super(schema, 'Transaction');
  }
}

export default TransactionODM;