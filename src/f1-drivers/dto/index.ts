import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateF1DriverDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNumber()
  @IsNotEmpty()
  @MaxLength(3)
  carNumber: number;

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
  @MaxLength(3)
  age: number;

  @IsNumber()
  @IsNotEmpty()
  @MaxLength(3)
  experienceYears: number;

  @IsString()
  team: string;
}

export class UpdateF1DriverDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  lastName?: string;

  @IsNumber()
  @IsNotEmpty()
  @MaxLength(3)
  @IsOptional()
  carNumber?: number;

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
  @MaxLength(3)
  @IsOptional()
  age?: number;

  @IsNumber()
  @IsNotEmpty()
  @MaxLength(3)
  @IsOptional()
  experienceYears?: number;

  @IsString()
  @IsOptional()
  team?: string;
}
