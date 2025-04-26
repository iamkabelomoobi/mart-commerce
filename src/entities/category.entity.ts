import { ICategory } from '../interfaces';
import { Entity, ObjectIdColumn, Column, BeforeUpdate } from 'typeorm';

@Entity()
export class Category implements ICategory {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  handle: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp' })
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}
