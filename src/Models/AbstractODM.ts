import {
  Model,
  models,
  Schema,
  model,
  isValidObjectId,
} from 'mongoose';
import ErrorHTTP from '../Middlewares/Helpers/ErrorHTTP';
import HTTPCodes from '../Utils/HTTPCodes';

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

  public async updateUser(id: string | undefined, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(id)) throw new ErrorHTTP(HTTPCodes.NOT_AUTHORIZATED, INVALID_MONGO_ID);
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj },
      { new: true },
    );
  }

  public async getAllTransaction(): Promise<T[]> {
    return this.model.find({});
  }

  public async getAllFavors(type: string): Promise<T[]> {
    return this.model.find({ type });
  }

  public async getFavorById(id: string | undefined): Promise<T[]> {
    return this.model.find(
      { $and: [
        { requestedFavorId: id },
        { type: 'direct' },
      ] },
      { _id: 1 },
    );
  }
}

export default AbstractODM;