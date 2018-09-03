import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { EmployeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeeService {

  constructor(
    @InjectRepository(Employee) private readonly employeeRepository: Repository<Employee>,
  ) {}

  async create(entity: EmployeeDto) {
		await this.employeeRepository.save(entity);
	}
}
