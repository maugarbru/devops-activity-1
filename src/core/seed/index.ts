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
    fullName: 'Red Bull',
    victories: 100,
    championships: 5,
    podiums: 247,
    debutYear: 2005,
    brandColor: '#011E3D',
  },
  {
    fullName: 'Mercedes',
    victories: 125,
    championships: 8,
    podiums: 286,
    debutYear: 1954,
    brandColor: '#00A19B',
  },
  {
    fullName: 'Alpine',
    victories: 1,
    championships: 0,
    podiums: 3,
    debutYear: 2021,
    brandColor: '#005BA9',
  },
  {
    fullName: 'McLaren',
    victories: 183,
    championships: 8,
    podiums: 487,
    debutYear: 1966,
    brandColor: '#FF8000',
  },
  {
    fullName: 'Alfa Romeo',
    victories: 10,
    championships: 0,
    podiums: 26,
    debutYear: 1950,
    brandColor: '#A50F2D',
  },
  {
    fullName: 'Aston Martin',
    victories: 0,
    championships: 0,
    podiums: 9,
    debutYear: 1959,
    brandColor: '#00665E',
  },
  {
    fullName: 'Haas',
    victories: 0,
    championships: 0,
    podiums: 0,
    debutYear: 2016,
    brandColor: '#EFEFEF',
  },
  {
    fullName: 'AlphaTauri',
    victories: 1,
    championships: 0,
    podiums: 2,
    debutYear: 2020,
    brandColor: '#041F3D',
  },
  {
    fullName: 'Williams',
    victories: 114,
    championships: 9,
    podiums: 302,
    debutYear: 1977,
    brandColor: '#00A3E0',
  },
];

export const driversSeed: CreateF1DriverDto[] = [
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
  {
    firstName: 'Pierre',
    lastName: 'Gasly',
    carNumber: 10,
    victories: 1,
    championships: 0,
    podiums: 4,
    age: 27,
    debutYear: 2017,
  },
  {
    firstName: 'Esteban',
    lastName: 'Ocon',
    carNumber: 31,
    victories: 1,
    championships: 0,
    podiums: 3,
    age: 27,
    debutYear: 2016,
  },
  {
    firstName: 'Lando',
    lastName: 'Norris',
    carNumber: 4,
    victories: 0,
    championships: 0,
    podiums: 13,
    age: 23,
    debutYear: 2019,
  },
  {
    firstName: 'Oscar',
    lastName: 'Piastri',
    carNumber: 81,
    victories: 0,
    championships: 0,
    podiums: 2,
    age: 22,
    debutYear: 2023,
  },
  {
    firstName: 'Guanyu',
    lastName: 'Zhou',
    carNumber: 24,
    victories: 0,
    championships: 0,
    podiums: 0,
    age: 24,
    debutYear: 2022,
  },
  {
    firstName: 'Valtteri',
    lastName: 'Bottas',
    carNumber: 77,
    victories: 10,
    championships: 0,
    podiums: 67,
    age: 34,
    debutYear: 2013,
  },
  {
    firstName: 'Fernando',
    lastName: 'Alonso',
    carNumber: 14,
    victories: 32,
    championships: 2,
    podiums: 106,
    age: 42,
    debutYear: 2001,
  },
  {
    firstName: 'Lance',
    lastName: 'Stroll',
    carNumber: 18,
    victories: 0,
    championships: 0,
    podiums: 3,
    age: 25,
    debutYear: 2017,
  },
  {
    firstName: 'Kevin',
    lastName: 'Magnussen',
    carNumber: 20,
    victories: 0,
    championships: 0,
    podiums: 1,
    age: 31,
    debutYear: 2014,
  },
  {
    firstName: 'Nico',
    lastName: 'Hulkenberg',
    carNumber: 27,
    victories: 0,
    championships: 0,
    podiums: 0,
    age: 36,
    debutYear: 2010,
  },
  {
    firstName: 'Daniel',
    lastName: 'Ricciardo',
    carNumber: 3,
    victories: 8,
    championships: 0,
    podiums: 32,
    age: 34,
    debutYear: 2011,
  },
  {
    firstName: 'Nyck',
    lastName: 'de Vries',
    carNumber: 21,
    victories: 0,
    championships: 0,
    podiums: 0,
    age: 28,
    debutYear: 2022,
  },
  {
    firstName: 'Yuki',
    lastName: 'Tsunoda',
    carNumber: 22,
    victories: 0,
    championships: 0,
    podiums: 0,
    age: 23,
    debutYear: 2021,
  },
  {
    firstName: 'Liam',
    lastName: 'Lawson',
    carNumber: 40,
    victories: 0,
    championships: 0,
    podiums: 0,
    age: 21,
    debutYear: 2023,
  },
  {
    firstName: 'Logan',
    lastName: 'Sargeant',
    carNumber: 2,
    victories: 0,
    championships: 0,
    podiums: 0,
    age: 22,
    debutYear: 2023,
  },
  {
    firstName: 'Alex',
    lastName: 'Albon',
    carNumber: 23,
    victories: 0,
    championships: 0,
    podiums: 2,
    age: 27,
    debutYear: 2019,
  },
  {
    firstName: 'Sebastian',
    lastName: 'Vettel',
    carNumber: 5,
    victories: 53,
    championships: 4,
    podiums: 122,
    age: 36,
    debutYear: 2007,
  },
  {
    firstName: 'Michael',
    lastName: 'Schumacher',
    carNumber: 7,
    victories: 91,
    championships: 7,
    podiums: 155,
    age: 54,
    debutYear: 1991,
  },
  {
    firstName: 'Mick',
    lastName: 'Schumacher',
    carNumber: 47,
    victories: 0,
    championships: 0,
    podiums: 0,
    age: 24,
    debutYear: 2021,
  },
  {
    firstName: 'Alain',
    lastName: 'Prost',
    carNumber: 0,
    victories: 51,
    championships: 4,
    podiums: 106,
    age: 68,
    debutYear: 1980,
  },
  {
    firstName: 'Ayrton',
    lastName: 'Senna',
    carNumber: 1,
    victories: 41,
    championships: 3,
    podiums: 80,
    age: 34,
    debutYear: 1984,
  },
  {
    firstName: 'Nigell',
    lastName: 'Mansell',
    carNumber: 0,
    victories: 31,
    championships: 1,
    podiums: 59,
    age: 70,
    debutYear: 1980,
  },
  {
    firstName: 'Jackie',
    lastName: 'Stewart',
    carNumber: 1,
    victories: 27,
    championships: 3,
    podiums: 43,
    age: 84,
    debutYear: 1965,
  },
  {
    firstName: 'Jim',
    lastName: 'Clark',
    carNumber: 0,
    victories: 25,
    championships: 2,
    podiums: 32,
    age: 32,
    debutYear: 1960,
  },
  {
    firstName: 'Niki',
    lastName: 'Lauda',
    carNumber: 1,
    victories: 25,
    championships: 3,
    podiums: 54,
    age: 70,
    debutYear: 1971,
  },
];
