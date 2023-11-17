// @packages
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

// @scripts
import { CreateF1DriverDto, UpdateF1DriverDto } from './dto';
import { F1DriversService } from './f1-drivers.service';

@Controller('f1-drivers')
export class F1DriversController {
  constructor(private f1DriversService: F1DriversService) {}

  @Get()
  async getAllDrivers() {
    return await this.f1DriversService.getAllDrivers();
  }

  @Get(':id')
  async getOneDriver(@Param('id') id: string) {
    return await this.f1DriversService.getOneDriver(id);
  }

  @Post()
  async createOneDriver(@Body() newDriver: CreateF1DriverDto) {
    return await this.f1DriversService.createOneDriver(newDriver);
  }

  @Patch(':id')
  async updateOneDriver(
    @Param('id') id: string,
    @Body() driverData: UpdateF1DriverDto,
  ) {
    return await this.f1DriversService.updateOneDriver(id, driverData);
  }

  @Delete(':id')
  async deleteOneDriver(@Param('id') id: string) {
    return await this.f1DriversService.deleteOneDriver(id);
  }
}
