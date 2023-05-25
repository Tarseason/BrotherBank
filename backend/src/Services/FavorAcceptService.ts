import IFavor from '../Interfaces/IFavors';
import Favor from '../Domains/Favor';
import FavorAccepted from '../Models/FavorAcceptedODM';
import FavorODM from '../Models/FavorODM';
import TypeFavor from '../Utils/FavorType';
import ErrorHTTP from '../Middlewares/Helpers/ErrorHTTP';
import HTTPCodes from '../Utils/HTTPCodes';

export default class FavorService {
  private acceptFavorODM = new FavorAccepted();
  private favorODM = new FavorODM();
  private createFavorDomain(favor: IFavor): Favor {
    return new Favor(favor);
  }

  public async acceptGlobalFavor(id: string, favor: IFavor) {
    const result = await this.favorODM.getById(favor.id);
    if (!result) throw new ErrorHTTP(HTTPCodes.NOT_FOUND, 'Favor not found!');
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

  public async acceptDirectFavor(favor: IFavor) {
    const result = await this.favorODM.getById(favor.id);
    if (!result) throw new ErrorHTTP(HTTPCodes.NOT_FOUND, 'Favor not found!');
    await this.acceptFavorODM.create(favor);
    await this.favorODM.delete(favor.id);
    return true;
  }

  public async getAcceptFavors(id: string) {
    const result = await this.acceptFavorODM.getAcceptById(id);
    if (!result) throw new ErrorHTTP(HTTPCodes.NOT_FOUND, 'Dont have a accept favor');
    const favors = result.map((favor) => this.createFavorDomain(favor));
    return favors;
  }
}