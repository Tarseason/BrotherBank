import { Schema } from 'mongoose';
import IFavor from '../Interfaces/IFavors';
import AbstractODM from './AbstractODM';

class FavorODM extends AbstractODM<IFavor> {
  constructor() {
    const schema = new Schema<IFavor>({
      requestingFavorId: { type: String, required: true },
      requestedFavorId: { type: String, required: true },
      amountOffered: { type: Number, required: true },
      description: { type: String, required: true },
      type: { type: String, required: true },
    });
    super(schema, 'Favors');
  }
}

export default FavorODM;