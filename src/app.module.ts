import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { Routes, RouterModule } from 'nest-router';
import { APP_GUARD } from '@nestjs/core';
import { EmployeeModule } from '@insider-api/employee';
import { LogActivityModule, LogActivityMiddleware } from '@insider-api/log-activity';
import { PermissionGuard } from '@insider-api/common';
import { AuthenticationModule } from '@insider-api/authentication';
import * as path from 'path';

ConfigService.load(path.resolve(__dirname, 'config/**/*.{ts,js}'));

const routes: Routes = [
  {
    path: '/employee',
    module: EmployeeModule,
  },
  {
    path: '/auth',
    module: AuthenticationModule,
  },
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
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
  providers: [
    {
      provide: APP_GUARD,
      useClass: PermissionGuard,
    },
  ],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer): void | MiddlewareConsumer {
    consumer
      .apply(LogActivityMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
	}
}
