import { PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber } from 'class-validator';

export abstract class AppBaseEntity {
	@PrimaryGeneratedColumn('increment', {
		unsigned: true,
		type: 'integer',
		name: 'id',
	})
	@IsNumber()
  id: number;
}
