import { Controller, Get, Post, Catch, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Catch()
@Controller('employee')
export class EmployeeController {

	constructor(private readonly employeeService: EmployeeService) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async create(@Body() entity: CreateEmployeeDto) {
		return this.employeeService.create(entity);
	}

}
