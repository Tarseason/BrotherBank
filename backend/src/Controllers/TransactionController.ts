import { Request, Response, NextFunction } from 'express';
import TransactionService from '../Services/TransactionService';
import ITransaction from '../Interfaces/ITransaction';
import UserService from '../Services/UserService';

class TransactionController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: TransactionService;
  private userService: UserService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new TransactionService();
    this.userService = new UserService();
  }

  public async transactionCreate() {
    const transfer: ITransaction = { ...this.req.body };
    
    try {
      const payingUser = await this.userService.userById(transfer.payingUserId);
      const receivingUser = await this.userService.userById(transfer.receivingUserId);

      const stepOne = await this.service.balanceMoneyUser(payingUser, transfer);
      const stepTwo = await this.service.balanceMoneyUser(receivingUser, transfer);

      await this.userService.updateUser(transfer.payingUserId, stepOne);
      await this.userService.updateUser(transfer.receivingUserId, stepTwo);

      const transaction = await this.service.createTransaction(transfer);
      return this.res.status(201).json(transaction);
    } catch (err) {
      return this.next(err);
    }
  }

  public async getAllTransaction() {
    try {
      const transactions = await this.service.getAllTransaction();
      return this.res.status(200).json(transactions);
    } catch (err) {
      return this.next(err);
    }
  }

  public async byIdTransaction() {
    const { id } = this.req.params;

    try {
      const result = await this.service.byIdTransaction(id);
      return this.res.status(200).json(result);
    } catch (err) {
      return this.next(err);
    }
  }
}

export default TransactionController;