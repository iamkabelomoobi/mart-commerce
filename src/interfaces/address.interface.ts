import { ObjectId } from 'mongodb';

export interface IAddress {
  _id?: ObjectId | string;
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}
