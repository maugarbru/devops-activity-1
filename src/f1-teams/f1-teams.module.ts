// @packages
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// @scripts
import { F1Team } from './f1-teams.entity';
import { F1TeamsController } from './f1-teams.controller';
import { F1TeamsService } from './f1-teams.service';

@Module({
  imports: [TypeOrmModule.forFeature([F1Team])],
  controllers: [F1TeamsController],
  providers: [F1TeamsService],
})
export class F1TeamsModule {}
