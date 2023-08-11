import { CreateF1DriverDto } from 'src/f1-drivers/dto';
import { CreateF1TeamDto } from 'src/f1-teams/dto';

export const teamsSeed: CreateF1TeamDto[] = [
  {
    fullName: 'Scuderia Ferrari',
    victories: 243,
    championships: 16,
    podiums: 773,
    debutYear: 1950,
    brandColor: '#FF2800',
  },
  {
    fullName: 'Red Bull Racing',
    victories: 100,
    championships: 5,
    podiums: 247,
    debutYear: 2005,
    brandColor: '#011E3D',
  },
  {
    fullName: 'Mercedes-AMG Petronas',
    victories: 125,
    championships: 8,
    podiums: 286,
    debutYear: 1954,
    brandColor: '#00A19B',
  },
];

export const driversSeed: CreateF1DriverDto[][] = [
  [
    {
      firstName: 'Charles',
      lastName: 'Leclerc',
      carNumber: 16,
      victories: 5,
      championships: 0,
      podiums: 27,
      age: 25,
      debutYear: 2018,
    },
    {
      firstName: 'Carlos',
      lastName: 'Sainz',
      carNumber: 55,
      victories: 1,
      championships: 0,
      podiums: 15,
      age: 28,
      debutYear: 2015,
    },
  ],
  [
    {
      firstName: 'Max',
      lastName: 'Verstappen',
      carNumber: 1,
      victories: 45,
      championships: 2,
      podiums: 89,
      age: 25,
      debutYear: 2015,
    },
    {
      firstName: 'Sergio',
      lastName: 'Perez',
      carNumber: 11,
      victories: 6,
      championships: 0,
      podiums: 33,
      age: 33,
      debutYear: 2011,
    },
  ],
  [
    {
      firstName: 'Lewis',
      lastName: 'Hamilton',
      carNumber: 44,
      victories: 103,
      championships: 7,
      podiums: 195,
      age: 38,
      debutYear: 2007,
    },
    {
      firstName: 'George',
      lastName: 'Russell',
      carNumber: 63,
      victories: 1,
      championships: 0,
      podiums: 10,
      age: 25,
      debutYear: 2019,
    },
  ],
];
