import User from '../Domains/User';
import IUser from '../Interfaces/IUser';
import UserODM from '../Models/UserODM';
import ErrorHTTP from '../Middlewares/Helpers/ErrorHTTP';
import HTTPCodes from '../Utils/HTTPCodes';
import ILogin from '../Interfaces/ILogin';
import { createJWT } from '../Utils/JWTfunctions';

const MESSAGEG_ERROR_USER = 'User not found';

class UserService {
  private userODM = new UserODM();
  public createUserDomain(user: IUser): User {
    return new User(user);
  }

  public async createUser(user: IUser) {
    const newUser = await this.userODM.create(user);
    return this.createUserDomain(newUser);
  }

  public async login(userData: ILogin) {
    const result = await this.userODM.loginUser(userData.email, userData.password);
    if (!result) throw new ErrorHTTP(HTTPCodes.NOT_FOUND, MESSAGEG_ERROR_USER);
    const user = this.createUserDomain(result);
    return createJWT({ user });
  }

  public async getAllUsers() {
    const result = await this.userODM.getAll();
    const users = result.map((user) => this.createUserDomain(user));
    return users;
  }

  public async userById(id: string) {
    const user = await this.userODM.getById(id);
    if (!user) throw new ErrorHTTP(HTTPCodes.NOT_FOUND, MESSAGEG_ERROR_USER);
    return this.createUserDomain(user);
  }

  public async updateUser(id: string | undefined, obj: IUser) {
    const updateUser = await this.userODM.updateUser(id, obj);
    if (!updateUser) throw new ErrorHTTP(HTTPCodes.NOT_FOUND, MESSAGEG_ERROR_USER);
    return this.createUserDomain(updateUser);
  }

  public async deleteUser(id: string) {
    return this.userODM.delete(id);
  }
}

export default UserService;