import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { EmployeeModule } from '@insider-api/employee';
import { LogActivityModule, LogActivityMiddleware } from '@insider-api/log-activity';
import { AuthenticationModule } from './authentication/authentication.module';
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
    AuthenticationModule,
  ],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer): void | MiddlewareConsumer {
    consumer
      .apply(LogActivityMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
	}
}
