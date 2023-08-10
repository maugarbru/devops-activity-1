import { Test, TestingModule } from '@nestjs/testing';
import { F1DriversController } from './f1-drivers.controller';

describe('F1DriversController', () => {
  let controller: F1DriversController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [F1DriversController],
    }).compile();

    controller = module.get<F1DriversController>(F1DriversController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
