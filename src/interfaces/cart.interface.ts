import { ObjectId } from 'mongodb';
import { ILineItem } from './line-item.interface';
import { IAddress } from './address.interface';
import { IPromotion } from './promotion.interface';
import { IShippingMethod } from './shipping-method.interface';
import { ICustomer } from './customer.interface';

export interface ICart {
  id?: ObjectId | string;
  currencyCode: string;
  items: ILineItem[];
  customer: ICustomer;
  shippingAddress: IAddress;
  billingAddress: IAddress;
  promotions?: IPromotion[];
  shippingMethod?: IShippingMethod;
  shippingTotal: number;
  discount: number;
  taxSubtotal: number;
  taxTotal: number;
  subtotal: number;
  total: number;
  createdAt?: Date;
  updatedAt?: Date;
}
