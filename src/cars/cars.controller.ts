import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCard() {
    return this.carsService.getAllCars();
  }

  @Get(':id')
  getCardById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.getCarById(id);
  }

  @Post()
  addCar(@Body() car: CreateCarDto) {
    return this.carsService.addCar(car);
  }

  @Patch(':id')
  updateCar(@Body() car: UpdateCarDto, @Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.updateCar(car, id);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.deleteCar(id);
  }
}
