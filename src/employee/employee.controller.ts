import { Controller, Get, Post, HttpCode, HttpStatus, Body, Param, Query, Put, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './dto/employee.dto';

interface SortingQuery {

}

@Controller('employee')
export class EmployeeController {

	constructor(
    private readonly employeeService: EmployeeService,
  ) {}

  @Get(':id')
  async getById(@Param('id') id: number) {
  }

  @Get()
  async getAll(
    @Query('page') page = 0,
    @Query('size') size = 20,
    @Query('sort') sort: SortingQuery,
  ) {

  }

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async create(@Body() entity: EmployeeDto) {
		return this.employeeService.create(entity);
	}

  @Put(':id')
  async update(@Param(':id') id: number, @Body() entity) {

  }

  @Delete(':id')
  async delete(@Param('id') id: number) {

  }
}
