// @packages
import { Controller, Post } from '@nestjs/common';

// @scripts
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private seedService: SeedService) {}

  @Post()
  async seedData() {
    return await this.seedService.seedData();
  }
}
