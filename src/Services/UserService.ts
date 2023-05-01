import User from "../Domains/User";
import IUser from "../Interfaces/IUser";
import UserODM from "../Models/UserODM";
import ErrorHTTP from "../Middlewares/Helpers/ErrorHTTP";
import HTTPCodes from "../Utils/HTTPCodes";

class UserService {
  private userODM = new UserODM();
  public createUserDomain(user: IUser): User {
    return new User(user);
  }

  public async createUser(user: IUser) {
    const newUser = await this.userODM.create(user);
    return this.createUserDomain(newUser)
  }
}

export default UserService;