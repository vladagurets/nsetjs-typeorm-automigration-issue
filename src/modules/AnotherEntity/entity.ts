import { Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from '../Group/entity';

@Entity()
export class AnotherEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToMany(() => Group, (group) => group.anotherEntities)
  // groups: Group[];
}
