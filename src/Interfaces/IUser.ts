import IFavor from './IFavors';

export default interface IUser {
  id?: string;
  userName: string, 
  amountMoney: number, 
  email: string, 
  password?: string,
  pendingFavors?: Array<IFavor>;
}
