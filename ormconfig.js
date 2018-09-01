module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'dev',
  password: 'insider4dev',
  database: 'insider_dev',
  synchronize: true,
  logging: true,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
