import {
  Entity,
  Index,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Group } from '../Group/entity';

@Index('last_name', ['lastName'], {})
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  firstName: string;

  @Column({ name: 'last_name', length: 100 })
  lastName: string;

  @Column()
  groupId: number;

  @ManyToOne(() => Group)
  @JoinColumn([{ name: 'groupId', referencedColumnName: 'id' }])
  country: Group;
}
