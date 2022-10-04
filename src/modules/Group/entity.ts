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

  // @ManyToMany(() => AnotherEntity, (anotherEntity) => anotherEntity.id)
  // @JoinTable({
  //   name: 'table_of_ref',
  //   joinColumn: {
  //     name: 'anotherEntityId',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'groupId',
  //     referencedColumnName: 'id',
  //   },
  // })
  // countryPlansCollection: AnotherEntity[];
}

// @Entity('table_of_ref')
// export class GroupToAnotherEntityTable {
//   @PrimaryColumn('int')
//   anotherEntityId: number;

//   @PrimaryColumn('int')
//   groupId: number;
// }
