export default {
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASENAME || 'insider',
	host: process.env.DB_HOSTNAME || 'localhost',
	port: Number(process.env.DB_PORT) || 3306,
	dialect: 'mysql',
	logging: false,
};
