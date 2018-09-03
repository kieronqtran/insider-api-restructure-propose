import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddEmployeeEntity1535816390266 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.createTable(new Table({
			name: 'employee',
			columns: [
				{
					name: 'id',
					type: 'INTEGER',
					isPrimary: true,
					isGenerated: true,
					unsigned: true,
					generationStrategy: 'increment',
				},
				{
					name: 'code',
					type: 'VARCHAR',
					length: '10',
					isNullable: false,
					isUnique: true,
				},
				{
					name: 'name',
					type: 'VARCHAR',
					length: '100',
					isNullable: false,
				},
				{
					name: 'email',
					type: 'VARCHAR',
					length: '255',
					isNullable: false,
					isUnique: true,
				},
				{
					name: 'avatar_url',
					type: 'VARCHAR',
					length: '2083',
					default: `'https://content.nfq.asia/nfq/assets/images/logo.png'`,
					isNullable: false,
				},
				{
					name: 'status',
					type: 'ENUM',
					enum: ['working', 'joining', 'resigned'],
					isNullable: false,
				},
				{
					name: 'created_at',
					type: 'TIMESTAMP',
					default: 'CURRENT_TIMESTAMP',
					isNullable: false,
				},
				{
					name: 'updated_at',
					type: 'TIMESTAMP',
					default: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
					isNullable: false,
				},
				{
					name: 'deleted_at',
					type: 'datetime',
				},
			],
		}), true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
	  await queryRunner.dropTable('employee');
  }
}
