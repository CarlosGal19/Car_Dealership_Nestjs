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

  addCar(car: any) {
    const id = Date.now();

    const carToSave = { ...car, id };

    this.cars.push(carToSave);

    return { id: carToSave.id };
  }

  updateCar(bodyCar: any, carId: number) {
    const carToUpdateIndex = this.cars.findIndex((car) => car.id === carId);

    if (carToUpdateIndex === -1) {
      throw new NotFoundException(`The car with id ${carId} does not exist`);
    }

    const carToUpdate = this.cars[carToUpdateIndex];

    carToUpdate.name = bodyCar.name || carToUpdate.name;
    carToUpdate.model = bodyCar.model || carToUpdate.model;

    this.cars[carToUpdateIndex] = carToUpdate;

    return { id: carId };
  }

  deleteCar(id: number) {
    this.cars = this.cars.filter((car) => car.id !== id);
    return { id }
  }
}
