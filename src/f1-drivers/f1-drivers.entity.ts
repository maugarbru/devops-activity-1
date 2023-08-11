import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { F1Team } from 'src/f1-teams/f1-teams.entity';

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

  @ManyToOne(() => F1Team, (team) => team.drivers)
  @JoinColumn()
  team: F1Team;
}
