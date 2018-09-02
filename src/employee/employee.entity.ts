import {
  Index,
  Entity,
	PrimaryColumn,
	PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
	RelationId,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
import { IsDate, IsEmail, IsUrl, IsEnum, IsIn, IsNotEmpty } from 'class-validator';
import { AppBaseEntity } from '../common';

@Entity('employee')
export class Employee extends AppBaseEntity {

  @Column('varchar', {
    nullable: false,
    unique: true,
    length: 10,
    name: 'code',
  })
  code: string;

  @Column('varchar', {
    nullable: false,
    length: 100,
    name: 'name',
	})
	@IsNotEmpty()
  name: string;

  @Column('varchar', {
		nullable: false,
		unique: true,
    length: 255,
    name: 'email',
	})
	@IsEmail()
	@IsNotEmpty()
  email: string;

  @Column('varchar', {
    nullable: false,
    length: 2083,
    default: 'https://content.nfq.asia/nfq/assets/images/logo.png',
    name: 'avatar_url',
	})
	@IsUrl()
  avatarUrl: string;

  @Column('enum', {
    nullable: false,
    enum: ['working', 'joining', 'resigned'],
    name: 'status',
	})
	@IsIn(['working', 'joining', 'resigned'])
	@IsNotEmpty()
  status: 'working' | 'joining' | 'resigned';

	@CreateDateColumn({
		name: 'created_at',
		nullable: false,
		type: 'timestamp',
	})
  readonly createdAt: Date;

	@UpdateDateColumn({
		name: 'updated_at',
		type: 'timestamp',
		readonly: true,
	})
  readonly updatedAt: Date;

  @Column('datetime', {
    nullable: true,
    name: 'deleted_at',
  })
  deletedAt: Date | null;

  constructor(init?: Partial<Employee>) {
		super();
		Object.assign(this, init);
  }
}
