import User from '../Domains/User';
import IUser from '../Interfaces/IUser';
import UserODM from '../Models/UserODM';
import ErrorHTTP from '../Middlewares/Helpers/ErrorHTTP';
import HTTPCodes from '../Utils/HTTPCodes';

class UserService {
  private userODM = new UserODM();
  public createUserDomain(user: IUser): User {
    return new User(user);
  }

  public async createUser(user: IUser) {
    const newUser = await this.userODM.create(user);
    return this.createUserDomain(newUser);
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

  public async updateUser(id: string | undefined, obj: IUser) {
    const updateUser = await this.userODM.updateUser(id, obj);
    if (!updateUser) throw new ErrorHTTP(HTTPCodes.NOT_FOUND, 'User not found');
    return this.createUserDomain(updateUser);
  }
}

export default UserService;