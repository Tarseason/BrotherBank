import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IFavor from '../Interfaces/IFavors';

class FavorAcceptedODM extends AbstractODM<IFavor> {
  constructor() {
    const schema = new Schema<IFavor>({
      requestingFavorId: { type: String, required: true },
      requestedFavorId: { type: String },
      amountOffered: { type: Number, required: true },
      description: { type: String, required: true },
      type: { type: String, required: true },
    });
    super(schema, 'AcceptFavors');
  }
}

export default FavorAcceptedODM;