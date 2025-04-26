import { ObjectId } from 'mongodb';
import { IAddress, ICustomer, ILineItem } from './';

export interface IOrder {
  _id?: ObjectId | string;
  customer: ICustomer;
  status: string;
  paymentStatus: string;
  fulfilmentStatus: string;
  summary?: string;
  shippingAddress: IAddress;
  items: ILineItem[];
  subtotal: number;
  total: number;
  tax: number;
  createdAt?: Date;
  updatedAt?: Date;
}
