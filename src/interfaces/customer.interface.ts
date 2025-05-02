import { ObjectId } from 'mongodb';
import { IAddress } from './address.interface';
import { IUser } from './user.interface';

export interface ICustomer {
  id?: ObjectId | string;
  firstName: string;
  lastName: string;
  addresses: IAddress[];
  user: IUser;
}
