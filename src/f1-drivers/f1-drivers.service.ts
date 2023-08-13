// @packages
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

// @scripts
import { CreateF1DriverDto, UpdateF1DriverDto } from './dto';
import { F1Driver } from './f1-drivers.entity';

@Injectable()
export class F1DriversService {
  constructor(
    @InjectRepository(F1Driver)
    private readonly driverRepository: Repository<F1Driver>,
  ) {}

  async getAllDrivers(): Promise<F1Driver[]> {
    return await this.driverRepository.find({
      relations: {
        team: true,
      },
    });
  }
  async getOneDriver(id: string): Promise<F1Driver> {
    return (
      (await this.driverRepository.findOne({
        where: { id },
        relations: {
          team: true,
        },
      })) ?? null
    );
  }
  async createOneDriver(data: CreateF1DriverDto) {
    return await this.driverRepository.save(data);
  }
  async updateOneDriver(id: string, data: UpdateF1DriverDto) {
    return await this.driverRepository.update({ id }, data);
  }
  async deleteOneDriver(id: string) {
    return await this.driverRepository.delete({ id });
  }
}
