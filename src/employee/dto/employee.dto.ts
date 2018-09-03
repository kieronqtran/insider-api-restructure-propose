import { IsDate, IsEmail, IsUrl, IsEnum, IsIn, IsNotEmpty } from 'class-validator';

export class EmployeeDto {
	@IsNotEmpty()
  readonly code: string;

	@IsNotEmpty()
  readonly name: string;

	@IsEmail()
	@IsNotEmpty()
  readonly email: string;

	@IsUrl()
  readonly avatarUrl: string;

	@IsIn(['working', 'joining', 'resigned'])
	@IsNotEmpty()
  readonly status: 'working' | 'joining' | 'resigned';
}
