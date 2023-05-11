import IFavor from '../Interfaces/IFavors';
import Favor from '../Domains/Favor';
import FavorODM from '../Models/FavorODM';
import FavorAccepted from '../Models/FavorAccepted';
import ErrorHTTP from '../Middlewares/Helpers/ErrorHTTP';
import HTTPCodes from '../Utils/HTTPCodes';
import TypeFavor from '../Utils/FavorType';

export default class FavorService {
  private favorODM = new FavorODM();
  private acceptFavorODM = new FavorAccepted();
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

  public async getGlobalFavors() {
    const result = await this.favorODM.getGlobalFavors();
    const allFavors = result.map((favor) => this.createFavorDomain(favor));
    return allFavors;
  }

  public async getFavorById(id: string | undefined) {
    if (!id) throw new ErrorHTTP(HTTPCodes.NOT_FOUND, 'Id not found');

    const result = await this.favorODM.getFavorById(id);
    if (!result) throw new ErrorHTTP(HTTPCodes.NOT_FOUND, 'Favor nao encontrado');

    return this.createFavorDomain(result);  
  }

  public async acceptGlobalFavor(id: string, favor: IFavor) {
    await this.getFavorById(favor.id);

    const newFavor = {
      requestingFavorId: favor.requestingFavorId,
      requestedFavorId: id,
      amountOffered: favor.amountOffered,
      description: favor.description,
      type: TypeFavor.GLOBAL,
    };

    const accepted = this.createFavorDomain(newFavor);
    await this.acceptFavorODM.create(accepted);
    await this.favorODM.delete(favor.id);
    return true;
  }
}