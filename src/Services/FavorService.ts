import IFavor from '../Interfaces/IFavors';
import Favor from '../Domains/Favor';
import FavorODM from '../Models/FavorODM';
// import ErrorHTTP from '../Middlewares/Helpers/ErrorHTTP';
// import HTTPCodes from '../Utils/HTTPCodes';

export default class FavorService {
  private favorODM = new FavorODM();
  public createFavorDomain(favor: IFavor): Favor {
    return new Favor(favor);
  }

  public async createFavor(favor: IFavor) {
    const newFavor = await this.favorODM.create(favor);
    return this.createFavorDomain(newFavor);
  }
}