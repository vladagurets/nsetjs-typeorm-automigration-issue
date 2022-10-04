import {
  Entity,
  Index,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Group } from '../Group/entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Group)
  @JoinColumn([{ name: 'groupId', referencedColumnName: 'id' }])
  country: Group;
}
