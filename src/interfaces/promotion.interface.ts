import { ObjectId } from 'mongodb';

export interface IPromotion {
  id?: ObjectId | string;
  code: string;
  discount: number;
}
