import { Injectable, NotFoundException } from '@nestjs/common';
import { ICar } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
@Injectable()
export class CarsService {
  private cars: ICar[] = [
    {
      id: uuid(),
      model: 2019,
      name: 'Ibiza',
    },
    {
      id: uuid(),
      model: 2011,
      name: 'Aveo',
    },
    {
      id: uuid(),
      model: 2000,
      name: 'Tsuru',
    },
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (car === undefined) {
      throw new NotFoundException(`The car with id ${id} does not exist`);
    }
    return car;
  }

  addCar(car: CreateCarDto) {
    const id = uuid();

    const carToSave = { ...car, id };

    this.cars.push(carToSave);

    return { id: carToSave.id };
  }

  updateCar(bodyCar: UpdateCarDto, carId: string) {
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

  deleteCar(id: string) {
    this.cars = this.cars.filter((car) => car.id !== id);
    return { id };
  }
}
