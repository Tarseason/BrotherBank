import IFavor from '../Interfaces/IFavors';
import Favor from '../Domains/Favor';
import FavorODM from '../Models/FavorODM';

export default class FavorService {
  private favorODM = new FavorODM();
  private createFavorDomain(favor: IFavor): Favor {
    return new Favor(favor);
  }

  public async createFavor(favor: IFavor) {
    const newFavor = await this.favorODM.create(favor);
    return this.createFavorDomain(newFavor);
  }

  public async getGlobalFavors() {
    const result = await this.favorODM.getGlobalFavors();
    const allFavors = result.map((favor) => this.createFavorDomain(favor));
    return allFavors;
  }

  public async getDirectFavors(id: string) {
    const result = await this.favorODM.getDirectFavor(id);
    const allFavors = result.map((favor) => this.createFavorDomain(favor));
    return allFavors;
  }
}