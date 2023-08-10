import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { F1TeamsService } from './f1-teams.service';
import { CreateF1TeamDto, UpdateF1TeamDto } from './dto';

@Controller('f1-teams')
export class F1TeamsController {
  constructor(private f1TeamsService: F1TeamsService) {}

  @Get()
  getAllTeams() {
    return this.f1TeamsService.getAllTeams();
  }

  @Get(':id')
  getOneDriver(@Param('id') id: string) {
    return this.f1TeamsService.getOneTeam(id);
  }

  @Post()
  createOneDriver(@Body() newTeam: CreateF1TeamDto) {
    return this.f1TeamsService.createOneTeam(newTeam);
  }

  @Patch(':id')
  updateOneDriver(@Param('id') id: string, @Body() teamData: UpdateF1TeamDto) {
    return this.f1TeamsService.updateOneTeam(id, teamData);
  }

  @Delete(':id')
  deleteOneDriver(@Param('id') id: string) {
    return this.f1TeamsService.deleteOneTeam(id);
  }
}
