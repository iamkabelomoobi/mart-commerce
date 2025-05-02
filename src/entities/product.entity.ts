import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
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

  @Column('simple-array')
  images: string[];

  @OneToMany(() => Variant, (variant) => variant)
  variants: Variant[];

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];

  @Column('simple-array')
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
