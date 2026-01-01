import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  exports: [BrandsService], // It makes the service public to other modules
})
export class BrandsModule {}
