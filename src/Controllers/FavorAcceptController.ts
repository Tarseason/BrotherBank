import { Request, Response, NextFunction } from 'express';
import FavorAcceptService from '../Services/FavorAcceptService';
import IFavor from '../Interfaces/IFavors';

class FavorAcceptController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: FavorAcceptService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new FavorAcceptService();
  }

  public async acceptGlobalFavor() {
    const { id } = this.req.params;
    const favor: IFavor = { ...this.req.body };
    try {
      await this.service.acceptGlobalFavor(id, favor);
      return this.res.status(200).json({ message: 'Favor pedido aceito! :)' });
    } catch (err) {
      return this.next(err);
    } 
  }
  public async acceptDirectFavor() {
    const favor: IFavor = { ...this.req.body };

    try {
      await this.service.acceptDirectFavor(favor);
      return this.res.status(200).json({ message: 'Favor pedido aceito! :)' });
    } catch (err) {
      return this.next(err);
    }
  }

  public async getAcceptFavors() {
    const { id } = this.req.params;

    try {
      const favors = await this.service.getAcceptFavors(id);
      return this.res.status(200).json(favors);
    } catch (err) {
      return this.next(err);
    }
  }
}

export default FavorAcceptController;