import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  @IsPositive()
  readonly model: number;
}
