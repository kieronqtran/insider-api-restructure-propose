import { LoggerService as NestLoggerService } from '@nestjs/common';
import { Logger as TypeOrmLogger, QueryRunner } from 'typeorm';

export class CustomTypeOrmLogger implements TypeOrmLogger {
  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    throw new Error('Method not implemented.');
  }

  logQueryError(error: string, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    throw new Error('Method not implemented.');
  }

  logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    throw new Error('Method not implemented.');
  }

  logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    throw new Error('Method not implemented.');
  }

  logMigration(message: string, queryRunner?: QueryRunner) {
    throw new Error('Method not implemented.');
  }

  log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner) {
    throw new Error('Method not implemented.');
  }
}

export class CustomNestLogger implements NestLoggerService {
  log(message: any, context?: string) {
    throw new Error('Method not implemented.');
  }
  error(message: any, trace?: string, context?: string) {
    throw new Error('Method not implemented.');
  }
  warn(message: any, context?: string) {
    throw new Error('Method not implemented.');
  }
}

export class LoggerService {
  static createLogger(name: string) {

  }
}