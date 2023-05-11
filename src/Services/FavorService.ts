import IFavor from '../Interfaces/IFavors';
import Favor from '../Domains/Favor';
import FavorODM from '../Models/FavorODM';
// import ErrorHTTP from '../Middlewares/Helpers/ErrorHTTP';
// import HTTPCodes from '../Utils/HTTPCodes';
// import TypeFavor from '../Utils/FavorType';
import DirectFavorODM from '../Models/FavorAccepted';

export default class FavorService {
  private favorODM = new FavorODM();
  private directFavorODM = new DirectFavorODM();
  private createFavorDomain(favor: IFavor): Favor {
    return new Favor(favor);
  }

  public async createFavor(favor: IFavor) {
    const newFavor = await this.favorODM.create(favor);
    return this.createFavorDomain(newFavor);
  }

  public async getAllFavors() {
    const result = await this.favorODM.getAll();
    const allFavors = result.map((favor) => this.createFavorDomain(favor));
    return allFavors;
  }

  public async getDirectFavors(id: string) {
    const result = await this.favorODM.getDirectFavor(id);
    const allFavors = result.map((favor) => this.createFavorDomain(favor));
    return allFavors;
  }

  public async getFavorById(id: string | undefined) {
    const result = await this.favorODM.getFavorById(id);
    const favors = result.map((favor) => this.createFavorDomain(favor));
    return favors;
  }
}