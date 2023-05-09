interface IFavor {
  id?: string;
  requestingFavorId: string;
  requestedFavorId: string;
  amountOffered: number;
  description: string;
}

export default IFavor;