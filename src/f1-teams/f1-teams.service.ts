import { Injectable } from '@nestjs/common';
import { CreateF1TeamDto, UpdateF1TeamDto } from './dto';

@Injectable()
export class F1TeamsService {
  getAllTeams() {
    // TODO: Create DB connection
  }
  getOneTeam(id: string) {
    // TODO: Create DB connection
  }
  createOneTeam(data: CreateF1TeamDto) {
    // TODO: Create DB connection
  }
  updateOneTeam(id: string, data: UpdateF1TeamDto) {
    // TODO: Create DB connection
  }
  deleteOneTeam(id: string) {
    // TODO: Create DB connection
  }
}
