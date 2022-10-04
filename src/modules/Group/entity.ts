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

const REF_TABLE_NAME = 'group_to_another_entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => AnotherEntity)
  @JoinTable({
    name: REF_TABLE_NAME,
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

@Entity(REF_TABLE_NAME)
export class GroupToAnotherEntityTable {
  @PrimaryColumn('int')
  anotherEntityId: number;

  @PrimaryColumn('int')
  groupId: number;
}
