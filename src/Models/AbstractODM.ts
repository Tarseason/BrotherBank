import {
  Model,
  models,
  Schema,
  model,
  isValidObjectId,
} from 'mongoose';
import ErrorHTTP from '../Middlewares/Helpers/ErrorHTTP';
import HTTPCodes from '../Utils/HTTPCodes';
import TypeFavor from '../Utils/FavorType';
// import IFavor from '../Interfaces/IFavors';

const INVALID_MONGO_ID = 'Invalid mongo id';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async getById(id: string): Promise<T> {
    if (!isValidObjectId(id)) throw new ErrorHTTP(HTTPCodes.NOT_AUTHORIZATED, INVALID_MONGO_ID);
    const result = await this.model.findOne({ _id: id });
    if (!result) throw new ErrorHTTP(HTTPCodes.NOT_FOUND, 'User not found');
    return result;
  }

  public async byIdTransaction(id: string): Promise<T[]> {
    if (!isValidObjectId(id)) throw new ErrorHTTP(HTTPCodes.NOT_AUTHORIZATED, INVALID_MONGO_ID);
    const result = await this.model.find({
      $and: [
        {
          $or: [
            { payingUserId: id },
            { receivingUserId: id },
          ],
        },
      ],
    });
    if (!result) throw new ErrorHTTP(HTTPCodes.NOT_FOUND, 'Transfer not exists');
    return result;
  }

  public async updateUser(id: string | undefined, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(id)) throw new ErrorHTTP(HTTPCodes.NOT_AUTHORIZATED, INVALID_MONGO_ID);
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj },
      { new: true },
    );
  }

  public async delete(id: string | undefined) {
    if (!isValidObjectId(id)) throw new ErrorHTTP(HTTPCodes.NOT_AUTHORIZATED, INVALID_MONGO_ID);
    await this.model.findByIdAndDelete({ id });
    return true;
  }

  public async getAllFavors(type: string | undefined): Promise<T[]> {
    return this.model.find({ type });
  }

  public async getFavorById(id: string | undefined): Promise<T | null> {
    if (!isValidObjectId(id)) throw new ErrorHTTP(HTTPCodes.NOT_AUTHORIZATED, INVALID_MONGO_ID);
    const result = await this.model.findOne({ _id: id });
    if (!result) throw new ErrorHTTP(HTTPCodes.NOT_FOUND, 'Favor nao encontrado');
    return result;
  }

  // Repensar nessa função! Nao parece adequada!
  public async getDirectFavor(id: string): Promise<T[]> {
    if (!isValidObjectId(id)) throw new ErrorHTTP(HTTPCodes.NOT_AUTHORIZATED, INVALID_MONGO_ID);
    return this.model.find({
      $and: [
        { requestedFavorId: id },
        { type: TypeFavor.DIRECT },
      ],
    });
  }

  public async getGlobalFavors(): Promise<T[]> {
    return this.model.find({ type: TypeFavor.GLOBAL });
  }

  public async getAcceptFavors(id: string): Promise<T[]> {
    if (!isValidObjectId(id)) throw new ErrorHTTP(HTTPCodes.NOT_AUTHORIZATED, INVALID_MONGO_ID);
    return this.model.find({ requestedFavorId: id });
  }

  public async byIdAcceptFavor(id: string | undefined): Promise<T | null> {
    if (!isValidObjectId(id)) throw new ErrorHTTP(HTTPCodes.NOT_AUTHORIZATED, INVALID_MONGO_ID);
    const result = await this.model.findOne({ id });
    return result;
  }
}

export default AbstractODM;