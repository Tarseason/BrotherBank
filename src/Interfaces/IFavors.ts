import TypeFavor from '../Utils/FavorType';

interface IFavor {
  id?: string;
  requestingFavorId: string;
  requestedFavorId: string;
  amountOffered: number;
  description: string;
  type: TypeFavor;
}

export default IFavor;