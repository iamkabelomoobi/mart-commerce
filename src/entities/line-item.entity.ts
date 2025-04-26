import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ILineItem } from '../interfaces';

@Entity()
export class LineItem implements ILineItem {
  @ObjectIdColumn()
  _id: string;

  @Column()
  productId: string;

  @Column({ nullable: true })
  variantId?: string;

  @Column()
  quantity: number;

  @Column()
  unitPrice: number;

  @Column()
  title: string;

  @Column()
  thumbnail: string;
}
