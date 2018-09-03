import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class AddLogActivityEntity1535941333114 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
			await queryRunner.createTable(new Table({
				name: 'log_activity',
				columns: [
					{
						name: 'id',
						type: 'BIGINT',
						unsigned: true,
						isNullable: false,
						isPrimary: true,
						generationStrategy: 'increment',
					},
					{
						name: 'source_type',
						type: 'ENUM',
						enum: ['employee', 'server'],
						isNullable: false,
					},
					{
						name: 'source_id',
						type: 'INTEGER',
						unsigned: true,
						isNullable: false,
					},
					{
						name: 'source_agent',
            type: 'VARCHAR',
            length: '39',
						isNullable: false,
					},
					{
						name: 'change_contents',
						type: 'TEXT',
						isNullable: true,
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
				],
			}), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
			await queryRunner.dropTable('log_activity');
    }
}
