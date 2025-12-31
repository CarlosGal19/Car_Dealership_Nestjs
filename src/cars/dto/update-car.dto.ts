import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateCarDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  readonly model?: number;
}
