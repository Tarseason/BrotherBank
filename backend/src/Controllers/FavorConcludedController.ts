import { NextFunction, Request, Response } from 'express';
import IFavor from '../Interfaces/IFavors';
import FavorConcludedService from '../Services/FavorConcludedService';

class FavorConcludedController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: FavorConcludedService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new FavorConcludedService();
  }

  public async concludeFavor() {
    const favor :IFavor = { ...this.req.body };
    
    try {
      await this.service.concludeFavor(favor);
      return this.res.status(200).json({ message: 'Favor concluido Parabens pela boa vontade!' });
    } catch (err) {
      return this.next(err);
    }
  }

  public async getAllConcluded() {
    const { id } = this.req.params;
    try {
      const concludeds = await this.service.getAllConcluded(id);
      return this.res.status(200).json(concludeds);
    } catch (err) {
      return this.next(err);
    }
  }
}

export default FavorConcludedController;