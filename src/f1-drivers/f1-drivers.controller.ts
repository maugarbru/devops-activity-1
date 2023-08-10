import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { F1DriversService } from './f1-drivers.service';
import { CreateF1DriverDto, UpdateF1DriverDto } from './dto';

@Controller('f1-drivers')
export class F1DriversController {
  constructor(private f1DriversService: F1DriversService) {}

  @Get()
  getAllDrivers() {
    return this.f1DriversService.getAllDrivers();
  }

  @Get(':id')
  getOneDriver() {
    return this.f1DriversService.getOneDriver('');
  }

  @Post()
  createOneDriver(@Body() newDriver: CreateF1DriverDto) {
    return this.f1DriversService.createOneDriver(newDriver);
  }

  @Patch(':id')
  updateOneDriver(
    @Param('id') id: string,
    @Body() driverData: UpdateF1DriverDto,
  ) {
    return this.f1DriversService.updateOneDriver(id, driverData);
  }

  @Delete(':id')
  deleteOneDriver(@Param('id') id: string) {
    return this.f1DriversService.deleteOneDriver(id);
  }
}
