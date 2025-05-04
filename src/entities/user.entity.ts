import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Admin } from './admin.entity';
import { Customer } from './customer.entity';
import { IUser } from '../interfaces/user.interface';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  password: string;

  @OneToOne(() => Admin, (admin) => admin.user)
  admin: Admin;

  @OneToOne(() => Customer, (customer) => customer.user)
  customer: Customer;
}
