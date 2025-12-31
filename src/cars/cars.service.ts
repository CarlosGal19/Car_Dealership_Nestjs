import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      model: 2019,
      name: 'Ibiza',
    },
    {
      id: 2,
      model: 2011,
      name: 'Aveo',
    },
    {
      id: 3,
      model: 2000,
      name: 'Tsuru',
    },
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (car === undefined) {
      throw new NotFoundException(`The car with id ${id} does not exist`);
    }
    return car;
  }

  getCarsLength() {
    return this.cars.length;
  }
}
