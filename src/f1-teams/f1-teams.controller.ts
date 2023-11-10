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
import { CreateF1TeamDto, UpdateF1TeamDto } from './dto';
import { F1TeamsService } from './f1-teams.service';

@Controller('f1-teams')
export class F1TeamsController {
  constructor(private f1TeamsService: F1TeamsService) {}

  @Get()
  async getAllTeams() {
    return await this.f1TeamsService.getAllTeams();
  }

  @Get(':id')
  async getOneTeam(@Param('id') id: string) {
    return await this.f1TeamsService.getOneTeam(id);
  }

  @Post()
  async createOneTeam(@Body() newTeam: CreateF1TeamDto) {
    return await this.f1TeamsService.createOneTeam(newTeam);
  }

  @Patch(':id')
  async updateOneTeam(
    @Param('id') id: string,
    @Body() teamData: UpdateF1TeamDto,
  ) {
    return await this.f1TeamsService.updateOneTeam(id, teamData);
  }

  @Delete(':id')
  async deleteOneTeam(@Param('id') id: string) {
    return await this.f1TeamsService.deleteOneTeam(id);
  }
}
