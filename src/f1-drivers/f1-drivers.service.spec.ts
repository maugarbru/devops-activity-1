import { Test, TestingModule } from '@nestjs/testing';
import { F1DriversService } from './f1-drivers.service';

describe('F1DriversService', () => {
  let service: F1DriversService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [F1DriversService],
    }).compile();

    service = module.get<F1DriversService>(F1DriversService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
