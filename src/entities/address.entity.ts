import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { IAddress } from '../interfaces';

@Entity()
export class Address implements IAddress {
  @ObjectIdColumn()
  _id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  addressLine1: string;

  @Column({ nullable: true })
  addressLine2?: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  postalCode: string;
}
