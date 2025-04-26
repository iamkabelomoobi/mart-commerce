import { ObjectId } from 'mongodb';

export interface ICategory {
  _id?: ObjectId | string;
  name: string;
  description: string;
  handle: string;
  createdAt?: Date;
  updatedAt?: Date;
}
