import { Module } from '@nestjs/common';
import { F1DriversController } from './f1-drivers.controller';
import { F1DriversService } from './f1-drivers.service';

@Module({
  controllers: [F1DriversController],
  providers: [F1DriversService],
})
export class F1DriversModule {}
