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

  public async getAllFavors() {
    try {
      const favor = await this.service.getAllFavors();
      return this.res.status(200).json(favor);
    } catch (err) {
      return this.next(err);
    }
  }

  public async getDirectFavors() {
    const { id } = this.req.params;
    try {
      const favor = await this.service.getDirectFavors(id);
      return this.res.status(200).json(favor);
    } catch (err) {
      return this.next(err);
    }
  }

  public async getGlobalFavors() {
    try {
      const favor = await this.service.getGlobalFavors();
      return this.res.status(200).json(favor);
    } catch (err) {
      return this.next(err);
    }
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

  public async getAcceptFavors() {
    const { id } = this.req.params;
    try {
      const accepteds = await this.service.getAcceptFavors(id);
      return this.res.status(200).json(accepteds);
    } catch (err) {
      return this.next(err);
    }
  }

  public async acceptDirectFavor() {
    const { id } = this.req.params;
    const favor: IFavor = { ...this.req.body };
    try {
      await this.service.acceptDirectFavor(id, favor);
      return this.res.status(200).json({ message: 'Favor concluido! :)' });
    } catch (err) {
      return this.next(err);
    }
  }
}

export default FavorController;