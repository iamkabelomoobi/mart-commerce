import { ObjectId } from 'mongodb';

export interface ILineItem {
  id?: ObjectId | string;
  productId: ObjectId | string;
  variantId?: ObjectId | string;
  quantity: number;
  unitPrice: number;
  title: string;
  thumbnail: string;
}
