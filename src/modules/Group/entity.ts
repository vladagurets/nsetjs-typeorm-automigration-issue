import {
  Entity,
  Index,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { AnotherEntity } from '../AnotherEntity/entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => AnotherEntity)
  @JoinTable({
    name: 'group_to_another_entity',
    joinColumn: {
      name: 'anotherEntityId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'groupId',
    },
  })
  anotherEntities: AnotherEntity[];
}

@Entity('table_of_ref')
export class GroupToAnotherEntityTable {
  @PrimaryColumn('int')
  anotherEntityId: number;

  @PrimaryColumn('int')
  groupId: number;
}
