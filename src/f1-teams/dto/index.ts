import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

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
}
