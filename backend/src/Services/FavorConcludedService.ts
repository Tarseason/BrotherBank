import IFavor from '../Interfaces/IFavors';
import Favor from '../Domains/Favor';
import FavorAccepted from '../Models/FavorAcceptedODM';
import FavorConcludedODM from '../Models/FavorConcludedODM';
import ErrorHTTP from '../Middlewares/Helpers/ErrorHTTP';
import HTTPCodes from '../Utils/HTTPCodes';

export default class FavorService {
  private acceptFavorODM = new FavorAccepted();
  private concludedFavorODM = new FavorConcludedODM();
  private createFavorDomain(favor: IFavor): Favor {
    return new Favor(favor);
  }

  public async concludeFavor(favor: IFavor) {
    const result = await this.acceptFavorODM.getById(favor.id);
    if (!result) throw new ErrorHTTP(HTTPCodes.NOT_FOUND, 'Favor not founnd!');
    await this.concludedFavorODM.create(favor);
    await this.acceptFavorODM.delete(favor.id);
  }

  public async getAllConcluded(id: string) {
    const result = await this.concludedFavorODM.getAcceptById(id);
    if (!result) throw new ErrorHTTP(HTTPCodes.NOT_FOUND, 'No favor done');
    const favors = result.map((favor) => this.createFavorDomain(favor));
    return favors;
  }
}