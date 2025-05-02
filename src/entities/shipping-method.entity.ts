import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IShippingMethod } from '../interfaces';
import { ObjectId } from 'mongodb';

@Entity()
export class ShippingMethod implements IShippingMethod {
  @PrimaryGeneratedColumn('uuid')
  id: ObjectId | string;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ nullable: true })
  description?: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt?: Date;
}
