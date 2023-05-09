import { NextFunction, Request, Response } from 'express';
import IUser from '../Interfaces/IUser';
import UserService from '../Services/UserService';
import ITransaction from '../Interfaces/ITransaction';
import TransactionService from '../Services/TransactionService';

class UserController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: UserService;
  private transService: TransactionService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new UserService();
    this.transService = new TransactionService();
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
    const { id } = this.req.body;

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

  public async balanceMoneyUser() {
    const transfer: ITransaction = { ...this.req.body };

    const payingUser = await this.service.userById(transfer.payingUserId);
    const receivingUser = await this.service.userById(transfer.receivingUserId);

    try {
      const stepOne = await this.service.balanceMoneyUser(payingUser, transfer);
      const stepTwo = await this.service.balanceMoneyUser(receivingUser, transfer);

      await this.service.updateUser(transfer.payingUserId, stepOne);
      await this.service.updateUser(transfer.receivingUserId, stepTwo);

      const transaction = await this.transService.createTransaction(transfer);
      return this.res.status(201).json(transaction);
    } catch (err) {
      return this.next(err);
    }
  }      
  
  public async getAllTransaction() {
    try {
      const transactions = await this.transService.getAllTransaction();
      return this.res.status(200).json(transactions);
    } catch (err) {
      return this.next(err);
    }
  }
}

export default UserController;