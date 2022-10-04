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

  @Column()
  anotherEntityId: number;

  @ManyToMany(() => AnotherEntity)
  @JoinTable({
    name: 'table_of_ref',
    joinColumn: {
      name: 'anotherEntityId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'groupId',
      referencedColumnName: 'id',
    },
  })
  countryPlansCollection: AnotherEntity[];
}

@Entity('table_of_ref')
export class GroupToAnotherEntityTable {
  @PrimaryColumn('int', {
    name: 'anotherEntityId',
  })
  planId: number;

  @PrimaryColumn('int', {
    name: 'groupId',
  })
  countryplanId: number;
}
