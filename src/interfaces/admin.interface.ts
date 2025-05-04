import { ObjectId } from 'mongodb';
import { IUser } from './user.interface';

export interface IAdmin {
  id?: ObjectId | string;
  firstName: string;
  lastName: string;
  user: IUser;
}
