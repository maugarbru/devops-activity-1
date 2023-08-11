import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { F1Driver } from 'src/f1-drivers/f1-drivers.entity';

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

  @OneToMany(() => F1Driver, (driver) => driver.team)
  @JoinColumn()
  drivers?: F1Driver[];
}
