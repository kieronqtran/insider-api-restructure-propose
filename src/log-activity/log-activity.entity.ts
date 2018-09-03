import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { LogActivityChangeContent } from './change-content.interface';

@Entity()
export class LogActivity {
	@PrimaryGeneratedColumn({
		type: 'bigint',
		name: 'id',
		unsigned: true,
	})
	id: number;

	@Column({
		type: 'enum',
		name: 'source_type',
		enum: ['employee', 'server'],
		nullable: false,
	})
	sourceType: 'employee' | 'server';

	@Column({
		type: 'integer',
		unsigned: true,
		name: 'source_id',
		nullable: false,
	})
	sourceId: number;

	@Column('simple-array', {
		name: 'change_contents',
	})
	changeContents?: LogActivityChangeContent[];

	@CreateDateColumn({
		name: 'created_at',
	})
	readonly createdAt: Date;

	@UpdateDateColumn({
		name: 'updated_at',
	})
	readonly updatedAt: Date;

	constructor(init?: Partial<LogActivity>) {
		Object.assign(this, init);
	}
}
