import { Module } from '@nestjs/common';
import { F1TeamsController } from './f1-teams.controller';
import { F1TeamsService } from './f1-teams.service';

@Module({
  controllers: [F1TeamsController],
  providers: [F1TeamsService],
})
export class F1TeamsModule {}
