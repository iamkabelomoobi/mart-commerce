import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectId } from 'mongodb';
import { IOrder } from '../interfaces/order.interface';
import { Address, Customer, LineItem } from '../entities';

@Entity()
export class Order implements IOrder {
  @PrimaryGeneratedColumn('uuid')
  id: ObjectId | string;

  @Column(() => Customer)
  customer: Customer;

  @Column({
    default: 'pending',
    comment: 'pending/confirmed/processing/completed/cancelled',
  })
  status: string;

  @Column({
    default: 'unpaid',
    comment: 'unpaid/paid/refunded/partially_refunded',
  })
  paymentStatus: string;

  @Column({
    default: 'unfulfilled',
    comment: 'unfulfilled/partially_fulfilled/fulfilled',
  })
  fulfilmentStatus: string;

  @Column({ type: 'text', nullable: true })
  summary?: string;

  @Column(() => Address)
  shippingAddress: Address;

  @Column(() => LineItem)
  items: LineItem[];

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  subtotal: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  total: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  tax: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
