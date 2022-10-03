import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AnotherEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
