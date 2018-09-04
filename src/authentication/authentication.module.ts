import { Module } from '@nestjs/common';
import { HttpStrategyService } from './http-strategy.service';

@Module({
  providers: [HttpStrategyService],
})
export class AuthenticationModule {}
