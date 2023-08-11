// @packages
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// @scripts
import { F1Driver } from './f1-drivers.entity';
import { F1DriversController } from './f1-drivers.controller';
import { F1DriversService } from './f1-drivers.service';

@Module({
  imports: [TypeOrmModule.forFeature([F1Driver])],
  controllers: [F1DriversController],
  providers: [F1DriversService],
})
export class F1DriversModule {}
