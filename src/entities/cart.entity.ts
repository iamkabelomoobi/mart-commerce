import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ICart } from '../interfaces';
import { LineItem } from './line-item.entity';
import { Customer } from './customer.entity';
import { Address } from './address.entity';
import { Promotion } from './promotion.entity';
import { ShippingMethod } from './shipping-method.entity';

@Entity()
export class Cart implements ICart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  currencyCode: string;

  @Column(() => LineItem)
  items: LineItem[];

  @Column(() => Customer)
  customer: Customer;

  @Column(() => Address)
  shippingAddress: Address;

  @Column(() => Address)
  billingAddress: Address;

  @Column(() => Promotion)
  promotions?: Promotion[];

  @Column(() => ShippingMethod)
  shippingMethod?: ShippingMethod;

  @Column()
  shippingTotal: number;

  @Column()
  discount: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  taxSubtotal: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  taxTotal: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  subtotal: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  total: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp' })
  updatedAt: Date;
}
