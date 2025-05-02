import { ObjectId } from 'mongodb';

export interface IUser {
  id?: ObjectId | string;
  email: string;
  phone: string;
  password: string;
}
