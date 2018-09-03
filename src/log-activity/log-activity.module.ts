import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogActivityService } from './log-activity.service';
import { LogActivityMiddleware } from './log-activity.middleware';
import { LogActivity } from './log-activity.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([LogActivity]),
  ],
  providers: [
    LogActivityService,
    LogActivityMiddleware,
  ],
  exports: [
    LogActivityService,
    LogActivityMiddleware,
  ],
})
export class LogActivityModule {}
