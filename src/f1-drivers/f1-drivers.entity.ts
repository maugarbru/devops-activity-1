import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class F1Driver {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  firstName: string;

  @Column('varchar')
  lastName: string;

  @Column('int')
  carNumber: number;

  @Column('int')
  victories: number;

  @Column('int')
  championships: number;

  @Column('int')
  podiums: number;

  @Column('int')
  age: number;

  @Column('int')
  debutYear: number;
}
