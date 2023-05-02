import User from "../Domains/User";
import IUser from "../Interfaces/IUser";
import UserODM from "../Models/UserODM";
import ErrorHTTP from "../Middlewares/Helpers/ErrorHTTP";
import HTTPCodes from "../Utils/HTTPCodes";
import ITransaction from "../Interfaces/ITransaction";

class UserService {
  private userODM = new UserODM();
  public createUserDomain(user: IUser): User {
    return new User(user);
  }

  public async createUser(user: IUser) {
    const newUser = await this.userODM.create(user);
    return this.createUserDomain(newUser)
  }

  public async getAllUsers() {
    const result = await this.userODM.getAll();
    const users = result.map((user) => this.createUserDomain(user));
    return users;
  }

  public async userById(id: string) {
    const user = await this.userODM.getById(id);
    return this.createUserDomain(user);
  }

  public async updateUser(id: string, obj: IUser) {
    const updateUser = await this.userODM.updateUser(id, obj);
    if (!updateUser) throw new ErrorHTTP(HTTPCodes.NOT_FOUND, 'User not found');
    return this.createUserDomain(updateUser);
  }

  public async balanceMoneyUser(user: IUser, obj: ITransaction) {
    if (user.id === obj.payingUserId) {
      if (user.amountMoney < obj.amountPaid) {
        throw new ErrorHTTP(HTTPCodes.NOT_AUTHORIZATED, 'Saldo insuficiente')
      }
      const balanceMoney = {
        ...user,
        amountMoney: user.amountMoney - obj.amountPaid,
      }
      return balanceMoney;
    }

    const balanceMoney = {
      ...user,
      amountMoney: user.amountMoney + obj.amountPaid,
    };
    return balanceMoney;
  }
}

export default UserService;