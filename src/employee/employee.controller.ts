import { Controller, Get, Post, HttpCode, HttpStatus, Body, Param, Query, Put, Delete } from '@nestjs/common';
import { Permission } from '@insider-api/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './dto/employee.dto';

interface SortingQuery {

}

@Controller()
export class EmployeeController {

	constructor(
    private readonly employeeService: EmployeeService,
  ) {}

  @Get(':id')
  @Permission('read:employee', 'write:employee')
  async getById(@Param('id') id: number) {
  }

  @Get()
  @Permission('read:employee', 'write:employee')
  async getAll(
    @Query('page') page = 0,
    @Query('size') size = 20,
    @Query('sort') sort: SortingQuery,
  ) {

  }

  @Post()
  @Permission('write:employee')
	@HttpCode(HttpStatus.CREATED)
	async create(@Body() entity: EmployeeDto) {
		return this.employeeService.create(entity);
	}

  @Put(':id')
  @Permission('write:employee')
  async update(@Param(':id') id: number, @Body() entity) {

  }

  @Delete(':id')
  @Permission('write:employee')
  async delete(@Param('id') id: number) {

  }
}
