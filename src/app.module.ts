import { Module } from '@nestjs/common';
import { F1TeamsModule } from './f1-teams/f1-teams.module';
import { F1DriversModule } from './f1-drivers/f1-drivers.module';

@Module({
  imports: [F1TeamsModule, F1DriversModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
