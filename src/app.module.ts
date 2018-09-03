import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { EmployeeModule } from './employee';
import { LogActivityModule, LogActivityMiddleware } from './log-activity';
import * as path from 'path';

ConfigService.load(path.resolve(__dirname, 'config/**/*.{ts,js}'));

@Module({
  imports: [
    ConfigModule.load(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    EmployeeModule,
    LogActivityModule,
  ],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer): void | MiddlewareConsumer {
		consumer.apply(LogActivityMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
	}
}
