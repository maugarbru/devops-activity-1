import { F1Driver } from 'src/f1-drivers/f1-drivers.entity';
import { F1Team } from 'src/f1-teams/f1-teams.entity';

export const testTeams: F1Team[] = [
  {
    id: 'ferrari',
    fullName: 'Scuderia Ferrari',
    victories: 243,
    championships: 16,
    podiums: 773,
    debutYear: 1950,
    brandColor: '#FF2800',
  },
];

export const testDrivers: F1Driver[] = [
  {
    id: 'charles-lec-16',
    firstName: 'Charles',
    lastName: 'Leclerc',
    carNumber: 16,
    victories: 5,
    championships: 0,
    podiums: 27,
    age: 25,
    debutYear: 2018,
  },
];
