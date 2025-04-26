import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ICustomer } from '../interfaces';
import { Address } from './address.entity';

@Entity()
export class Customer implements ICustomer {
  @ObjectIdColumn()
  _id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column(() => Address)
  addresses: Address[];
}
