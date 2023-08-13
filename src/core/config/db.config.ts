import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DATABASE_NAME, NODE_ENV } from './env';
import { F1Driver } from 'src/f1-drivers/f1-drivers.entity';
import { F1Team } from 'src/f1-teams/f1-teams.entity';

class ConfigService {
  constructor(
    private DATABASE_NAME: string | undefined,
    private NODE_ENV: string | undefined,
  ) {}

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'sqlite',

      database: '/db/' + this.DATABASE_NAME,
      entities: [F1Driver, F1Team],
      synchronize: this.NODE_ENV !== 'production',
    };
  }
}

export const configService = new ConfigService(DATABASE_NAME, NODE_ENV);
