import { Entity, PrimaryGeneratedColumn, Column, BeforeUpdate } from 'typeorm';
import { IVariant } from '../interfaces';

@Entity()
export class Variant implements IVariant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  sku: string;

  @Column()
  barcode: string;

  @Column()
  materials: string;

  @Column()
  quantity: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp' })
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}
