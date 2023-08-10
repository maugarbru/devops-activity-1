import { Test, TestingModule } from '@nestjs/testing';
import { F1TeamsController } from './f1-teams.controller';

describe('F1TeamsController', () => {
  let controller: F1TeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [F1TeamsController],
    }).compile();

    controller = module.get<F1TeamsController>(F1TeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
