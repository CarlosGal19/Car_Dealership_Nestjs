import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const id = uuid();
    const createdAt = Date.now();

    const brandToAdd = { ...createBrandDto, id, createdAt };

    this.brands.push(brandToAdd);

    return { id };
  }

  findAll() {
    return { brands: this.brands };
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`The brand with id ${id} does not exist`);
    }
    return { brand };
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        return {
          id: brand.id,
          name: updateBrandDto.name || brand.name,
          createdAt: brand.createdAt,
          updatedAt: Date.now(),
        };
      }
      return brand;
    });

    return { id };
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return { id };
  }

  seedBrands(brands: Brand[]) {
    this.brands = brands;
  }
}
