import { NextFunction, Request, Response } from 'express';
import IUser from '../Interfaces/IUser';
import UserService from '../Services/UserService';
import TransactionService from '../Services/TransactionService';
import FavorService from '../Services/FavorService';

class UserController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: UserService;
  private transService: TransactionService;
  private favorService: FavorService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new UserService();
    this.transService = new TransactionService();
    this.favorService = new FavorService();
  }

  public async create() {
    const user: IUser = this.req.body;

    try {
      const newUser = await this.service.createUser(user);
      return this.res.status(200).json(newUser);
    } catch (err) {
      return this.next(err);
    }
  }

  public async getAllUsers() {
    try {
      const users = await this.service.getAllUsers();
      return this.res.status(200).json(users);
    } catch (err) {
      return this.next(err);
    }
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      const user = await this.service.userById(id);
      return this.res.status(200).json(user);
    } catch (err) {
      return this.next(err);
    }
  }

  public async updateUser() {
    const user: IUser = { ...this.req.body };
    const { id } = this.req.params;

    try {
      const updateUser = await this.service.updateUser(id, user);
      return this.res.status(201).json(updateUser);
    } catch (err) {
      return this.next(err);
    }
  }

  public async deleteUser() {
    const { id } = this.req.params;

    try {
      await this.service.deleteUser(id);
      return this.res.status(204).json({ message: 'User deleted! :(' });
    } catch (err) {
      return this.next(err);
    }
  }
}

export default UserController;