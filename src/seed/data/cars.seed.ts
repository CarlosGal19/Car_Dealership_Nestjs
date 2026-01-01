import { v4 as uuid } from 'uuid';
import { ICar } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: ICar[] = [
  {
    id: uuid(),
    name: 'Toyota Corolla',
    model: 2020,
  },
  {
    id: uuid(),
    name: 'Honda Civic',
    model: 2019,
  },
  {
    id: uuid(),
    name: 'Ford Mustang',
    model: 2022,
  },
  {
    id: uuid(),
    name: 'Chevrolet Camaro',
    model: 2021,
  },
];
