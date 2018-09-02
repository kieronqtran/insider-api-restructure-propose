import { ConnectionOptions } from 'typeorm';

export default {
	type: 'mysql',
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME || 'insider',
	host: process.env.DB_HOSTNAME || 'localhost',
	port: Number(process.env.DB_PORT) || 3306,
	debug: true,
	entities: [
		__dirname + '/../**/*.entity.{ts,js}',
	],
	subscribers: [__dirname + '/../**/*.entity-subscriber.{ts,js}'],
	synchronize: true,
} as ConnectionOptions;
