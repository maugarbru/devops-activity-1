import { Injectable } from '@nestjs/common';
import { CreateF1DriverDto, UpdateF1DriverDto } from './dto';

@Injectable()
export class F1DriversService {
  getAllDrivers() {
    // TODO: Create DB connection
  }
  getOneDriver(id: string) {
    // TODO: Create DB connection
  }
  createOneDriver(data: CreateF1DriverDto) {
    // TODO: Create DB connection
  }
  updateOneDriver(id: string, data: UpdateF1DriverDto) {
    // TODO: Create DB connection
  }
  deleteOneDriver(id: string) {
    // TODO: Create DB connection
  }
}
