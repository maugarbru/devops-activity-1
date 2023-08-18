// @packages
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

// @scripts
import { F1Team } from './f1-teams.entity';
import { F1TeamsController } from './f1-teams.controller';
import { F1TeamsService } from './f1-teams.service';

// @util
import { testTeams } from 'src/util/testUtils';

describe('F1Teams', () => {
  let controller: F1TeamsController;
  let service: F1TeamsService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [F1TeamsController],
      providers: [
        F1TeamsService,
        {
          provide: getRepositoryToken(F1Team),
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

    controller = await moduleRef.resolve(F1TeamsController);
    service = await moduleRef.resolve(F1TeamsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('getAllTeams', () => {
    it('should return an array of f1-teams', async () => {
      jest
        .spyOn(service, 'getAllTeams')
        .mockImplementation(async () => testTeams);

      expect(await service.getAllTeams()).toBe(testTeams);
    });

    it('should return an EMPTY array of f1-teams', async () => {
      jest.spyOn(service, 'getAllTeams').mockImplementation(async () => []);

      expect(await service.getAllTeams()).toStrictEqual([]);
    });
  });

  describe('getOneTeam', () => {
    it('should return an f1-team that matches the id', async () => {
      jest
        .spyOn(service, 'getOneTeam')
        .mockImplementation(async () => testTeams[0]);

      expect(await service.getOneTeam(testTeams[0].id)).toBe(testTeams[0]);
      expect((await service.getOneTeam(testTeams[0].id)).id).toBe(
        testTeams[0].id,
      );
    });

    it('should return null when the f1-team is not found', async () => {
      jest.spyOn(service, 'getOneTeam').mockImplementation(async () => null);

      expect(await service.getOneTeam('test')).toBe({});
    });
  });
});
