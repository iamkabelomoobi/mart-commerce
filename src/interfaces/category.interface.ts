import { ObjectId } from 'mongodb';

export interface ICategory {
  id?: ObjectId | string;
  name: string;
  description: string;
  handle: string;
  createdAt?: Date;
  updatedAt?: Date;
}
