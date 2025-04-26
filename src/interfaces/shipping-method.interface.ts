import { ObjectId } from 'mongodb';

export interface IShippingMethod {
  _id?: ObjectId | string;
  name: string;
  amount: number;
  createdAt?: Date;
  updatedAt?: Date;
  description?: string;
}
