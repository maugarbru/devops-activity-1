import { Test, TestingModule } from '@nestjs/testing';
import { F1TeamsService } from './f1-teams.service';

describe('F1TeamsService', () => {
  let service: F1TeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [F1TeamsService],
    }).compile();

    service = module.get<F1TeamsService>(F1TeamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
