import { ObjectId } from 'mongodb';
import { IAddress } from './address.interface';

export interface ICustomer {
  _id?: ObjectId | string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addresses: IAddress[];
}
