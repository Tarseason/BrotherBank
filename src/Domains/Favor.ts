import IFavor from '../Interfaces/IFavors';

export default class Favor {
  public id?: string;
  public requestingFavorId: string;
  public requestedFavorId: string;
  public amountOffered: number;
  public description: string;

  constructor(favor: IFavor) {
    this.id = favor.id;
    this.requestingFavorId = favor.requestingFavorId;
    this.requestedFavorId = favor.requestedFavorId;
    this.amountOffered = favor.amountOffered;
    this.description = favor.description;
  }
}