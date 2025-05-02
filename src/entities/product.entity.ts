import { Entity, PrimaryGeneratedColumn, Column, BeforeUpdate } from 'typeorm';
import { Category, Variant } from './';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  handle: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column()
  thumbnail: string;

  @Column()
  images: string[];

  @Column(() => Variant)
  variants: Variant[];

  @Column(() => Category)
  categories: Category[];

  @Column()
  tags: string[];

  @Column()
  price: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp' })
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}
