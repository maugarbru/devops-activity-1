import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { F1Team } from 'src/f1-teams/f1-teams.entity';

export class CreateF1DriverDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNumber()
  @IsNotEmpty()
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
  age: number;

  @IsNumber()
  @IsNotEmpty()
  debutYear: number;

  @IsNotEmpty()
  team?: F1Team;
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
  @IsOptional()
  age?: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  debutYear?: number;

  @IsString()
  @IsOptional()
  team?: F1Team;
}
