import { Test, TestingModule } from '@nestjs/testing';
import { HttpStrategyService } from './http-strategy.service';

describe('HttpStrategyService', () => {
  let service: HttpStrategyService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpStrategyService],
    }).compile();
    service = module.get<HttpStrategyService>(HttpStrategyService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
