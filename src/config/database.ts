import { ConnectionOptions } from 'typeorm';

export default {
	type: 'mysql',
	url: process.env.DATABASE_URL,
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME || 'insider',
	host: process.env.DATABASE_HOSTNAME || 'localhost',
	port: Number(process.env.DATABASE_PORT) || 3306,
	entities: [
		__dirname + '/../**/*.entity.{ts,js}',
	],
	subscribers: [__dirname + '/../**/*.entity-subscriber.{ts,js}'],
	synchronize: true,
} as ConnectionOptions;
