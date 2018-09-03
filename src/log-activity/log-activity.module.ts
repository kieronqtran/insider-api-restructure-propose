import { Module } from '@nestjs/common';
import { LogActivityService } from './log-activity.service';

@Module({
  providers: [LogActivityService],
})
export class LogActivityModule {}
