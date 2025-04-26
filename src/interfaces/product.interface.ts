import { ObjectId } from 'mongodb';
import { IVariant } from './variant.interface';
import { ICategory } from './category.interface';

export interface IProduct {
  _id?: ObjectId | string;
  title: string;
  handle: string;
  description: string;
  status: string;
  thumbnail: string;
  images: string[];
  variants: IVariant[] | string[];
  categories: ICategory[] | string[];
  tags: string[];
  price: string;
  createdAt?: Date;
  updatedAt?: Date;
}
