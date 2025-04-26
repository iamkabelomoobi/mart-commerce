import { ObjectId } from 'mongodb';

export interface IPromotion {
  _id?: ObjectId | string;
  code: string;
  discount: number;
}
