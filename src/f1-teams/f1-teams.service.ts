// @packages
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

// @scripts
import { CreateF1TeamDto, UpdateF1TeamDto } from './dto';
import { F1Team } from './f1-teams.entity';

@Injectable()
export class F1TeamsService {
  constructor(
    @InjectRepository(F1Team)
    private readonly teamRepository: Repository<F1Team>,
  ) {}

  async getAllTeams() {
    return await this.teamRepository.find({
      relations: {
        drivers: true,
      },
    });
  }
  async getOneTeam(id: string) {
    return await this.teamRepository.findOne({
      where: { id },
      relations: {
        drivers: true,
      },
    });
  }
  async createOneTeam(data: CreateF1TeamDto) {
    return await this.teamRepository.save(data);
  }
  async updateOneTeam(id: string, data: UpdateF1TeamDto) {
    return await this.teamRepository.update({ id }, data);
  }
  async deleteOneTeam(id: string) {
    return await this.teamRepository.delete({ id });
  }
}
