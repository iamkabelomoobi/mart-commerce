import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ICustomer } from '../interfaces';
import { Address } from './address.entity';
import { User } from './user.entity';

@Entity()
export class Customer implements ICustomer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column(() => Address)
  addresses: Address[];

  @OneToOne(() => User, (user) => user.customer, { cascade: true })
  @JoinColumn()
  user: User;
}
