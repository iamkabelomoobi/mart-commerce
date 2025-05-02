import { ObjectId } from 'mongodb';

export interface IVariant {
  id?: ObjectId | string;
  title: string;
  sku: string;
  barcode: string;
  materials: string;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}
