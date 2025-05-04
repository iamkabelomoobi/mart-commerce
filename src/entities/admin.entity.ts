import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { IAdmin } from '../interfaces';
import { User } from './user.entity';

@Entity()
export class Admin implements IAdmin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToOne(() => User, (user) => user.admin, { cascade: true })
  @JoinColumn()
  user: User;
}
