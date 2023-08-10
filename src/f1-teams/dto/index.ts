import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateF1TeamDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;

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
  @Length(4)
  fundationYear: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(7)
  brandColor: string;

  @IsArray()
  @IsNotEmpty()
  pilots: string[];
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
  @Length(4)
  @IsOptional()
  fundationYear?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(7)
  @IsOptional()
  brandColor?: string;

  @IsArray()
  @IsNotEmpty()
  @IsOptional()
  pilots: string[];
}
