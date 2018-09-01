import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeController } from './employee.controller';

describe('Employee Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [EmployeeController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: EmployeeController = module.get<EmployeeController>(EmployeeController);
    expect(controller).toBeDefined();
  });
});
