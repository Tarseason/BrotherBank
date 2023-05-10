import IFavor from '../Interfaces/IFavors';
import IUser from '../Interfaces/IUser';

export default class User {
  public id?: string;
  public userName: string;
  public amountMoney: number;
  public email: string;
  public password?: string;
  public pendingFavors: Array<IFavor>;

  constructor(user: IUser) {
    this.id = user.id;
    this.userName = user.userName;
    this.amountMoney = user.amountMoney;
    this.email = user.email;
    this.password = user.password;
    this.pendingFavors = this.getPendingFavors();
  }

  getId() {
    return this.id;
  }

  setId(value: string) {
    this.id = value;
  }

  getUserName() {
    return this.userName;
  }

  setUserName(value: string) {
    this.userName = value;
  }
  getAmountMoney() {
    return this.amountMoney;
  }

  setAmountMoney(value: number) {
    this.amountMoney = value;
  }
  getEmail() {
    return this.email;
  }

  setEmail(value: string) {
    this.email = value;
  }
  getPassWord() {
    return this.password;
  }

  setPassword(value:string) {
    this.password = value;
  }

  getPendingFavors() {
    return this.pendingFavors;
  }

  setPendingFavor(favors: Array<IFavor>) {
    this.pendingFavors = favors;
  }
}