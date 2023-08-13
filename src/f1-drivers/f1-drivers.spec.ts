// @packages
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

// @scripts
import { F1Driver } from './f1-drivers.entity';
import { F1DriversController } from './f1-drivers.controller';
import { F1DriversService } from './f1-drivers.service';

// @util
import { testDrivers } from 'src/util/testUtils';

describe('F1Drivers', () => {
  let controller: F1DriversController;
  let service: F1DriversService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [F1DriversController],
      providers: [
        F1DriversService,
        {
          provide: getRepositoryToken(F1Driver),
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
            delete: jest.fn(),
            update: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = await moduleRef.resolve(F1DriversController);
    service = await moduleRef.resolve(F1DriversService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('getAllDrivers', () => {
    it('should return an array of f1-drivers', async () => {
      jest
        .spyOn(service, 'getAllDrivers')
        .mockImplementation(async () => testDrivers);

      expect(await service.getAllDrivers()).toBe(testDrivers);
    });

    it('should return an EMPTY array of f1-drivers', async () => {
      jest.spyOn(service, 'getAllDrivers').mockImplementation(async () => []);

      expect(await service.getAllDrivers()).toStrictEqual([]);
    });
  });

  describe('getOneDriver', () => {
    it('should return an f1-driver that matches the id', async () => {
      jest
        .spyOn(service, 'getOneDriver')
        .mockImplementation(async () => testDrivers[0]);

      expect(await service.getOneDriver(testDrivers[0].id)).toBe(
        testDrivers[0],
      );
      expect((await service.getOneDriver(testDrivers[0].id)).id).toBe(
        testDrivers[0].id,
      );
    });

    it('should return null when the f1-driver is not found', async () => {
      jest.spyOn(service, 'getOneDriver').mockImplementation(async () => null);

      expect(await service.getOneDriver('test')).toBe(null);
    });
  });
});
