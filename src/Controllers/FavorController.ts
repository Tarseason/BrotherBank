import { NextFunction, Request, Response } from 'express';
import IFavor from '../Interfaces/IFavors';
import FavorService from '../Services/FavorService';

class FavorController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: FavorService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new FavorService();
  }

  public async create() {
    const favor: IFavor = { ...this.req.body };
    try {
      const newFavor = await this.service.createFavor(favor);
      return this.res.status(201).json(newFavor);
    } catch (err) {
      return this.next(err);
    }
  }

  public async getFavor() {
    const { type } = this.req.body;
    try {
      const favor = await this.service.getAllFavors(type);
      return this.res.status(200).json(favor);
    } catch (err) {
      return this.next(err);
    }
  }
}

export default FavorController;