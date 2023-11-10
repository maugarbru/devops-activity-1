import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity()
export class F1Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  fullName: string;

  @Column('int')
  victories: number;

  @Column('int')
  championships: number;

  @Column('int')
  podiums: number;

  @Column('int')
  debutYear: number;

  @Column('varchar')
  brandColor: string;
}
