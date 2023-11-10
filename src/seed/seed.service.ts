// @packages
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

// @scripts
import { F1Driver } from 'src/f1-drivers/f1-drivers.entity';
import { F1Team } from 'src/f1-teams/f1-teams.entity';
import { driversSeed, teamsSeed } from 'src/core/seed';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(F1Driver)
    private readonly driverRepository: Repository<F1Driver>,
    @InjectRepository(F1Team)
    private readonly teamRepository: Repository<F1Team>,
  ) {}

  async seedData() {
    return Promise.all([
      teamsSeed.map((team) => this.teamRepository.save(team)),
      driversSeed.map((driver) => this.driverRepository.save(driver)),
    ]);
  }
}
