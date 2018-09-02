import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class AppBaseEntity {
	@PrimaryGeneratedColumn('increment', {
		unsigned: true,
		type: 'integer',
		name: 'id',
	})
  id: number;
}
