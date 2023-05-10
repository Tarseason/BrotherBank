import IFavor from '../Interfaces/IFavors';
import Favor from '../Domains/Favor';
import FavorODM from '../Models/FavorODM';
// import ErrorHTTP from '../Middlewares/Helpers/ErrorHTTP';
// import HTTPCodes from '../Utils/HTTPCodes';
import TypeFavor from '../Utils/FavorType';

export default class FavorService {
  private favorODM = new FavorODM();
  public createFavorDomain(favor: IFavor): Favor {
    return new Favor(favor);
  }

  public async createFavor(favor: IFavor) {
    const newFavor = await this.favorODM.create(favor);
    return this.createFavorDomain(newFavor);
  }

  public async getAllFavors(type: string | undefined) {
    if (type === TypeFavor.DIRECT) {
      const result = await this.favorODM.getAllFavors(type);
      const allFavors = result.map((favor) => this.createFavorDomain(favor));
      return allFavors;
    }
    if (type === TypeFavor.GLOBAL) {
      const result = await this.favorODM.getAllFavors(type);
      const allFavors = result.map((favor) => this.createFavorDomain(favor));
      return allFavors;
    }
  }

  public async getFavorById(id: string | undefined) {
    const result = await this.favorODM.getFavorById(id);
    const favors = result.map((favor) => this.createFavorDomain(favor));
    return favors;
  }
}