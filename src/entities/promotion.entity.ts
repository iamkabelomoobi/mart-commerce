import {
  Entity,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ObjectId } from 'mongodb';
import { IPromotion } from '../interfaces';

@Entity()
export class Promotion implements IPromotion {
  @ObjectIdColumn()
  _id: ObjectId | string;

  @Column({ unique: true })
  code: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  discount: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt?: Date;
}
