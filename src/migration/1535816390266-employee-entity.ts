import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class EmployeeEntity1535816390266 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
	await queryRunner.createTable(new Table({
		name: 'employee',
		columns: [
			{
				name: 'id',
				type: 'integer',
				isPrimary: true,
			},
		],
	}), true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
	  await queryRunner.dropTable('employee');
  }
}
