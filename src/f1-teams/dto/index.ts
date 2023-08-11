import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { F1Driver } from 'src/f1-drivers/f1-drivers.entity';

export class CreateF1TeamDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsNumber()
  @IsNotEmpty()
  victories: number;

  @IsNumber()
  @IsNotEmpty()
  championships: number;

  @IsNumber()
  @IsNotEmpty()
  podiums: number;

  @IsNumber()
  @IsNotEmpty()
  debutYear: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(7)
  brandColor: string;

  @IsArray()
  @IsNotEmpty()
  @IsOptional()
  drivers?: F1Driver[];
}

export class UpdateF1TeamDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fullname?: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  victories?: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  championships?: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  podiums?: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  debutYear?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(7)
  @IsOptional()
  brandColor?: string;

  @IsArray()
  @IsNotEmpty()
  @IsOptional()
  drivers: F1Driver[];
}
