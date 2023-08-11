// @packages
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// @scripts
import { configService } from './core/config/db.config';
import { F1TeamsModule } from './f1-teams/f1-teams.module';
import { F1DriversModule } from './f1-drivers/f1-drivers.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    F1TeamsModule,
    F1DriversModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
