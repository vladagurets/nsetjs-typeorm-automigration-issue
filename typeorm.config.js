const typeOrmConfig = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test_db',
  entities: ['dist/**/entity{.ts,.js}'],
  migrations: ['migration/*.ts'],
  cli: {
    migrationsDir: 'migration',
  },
  synchronize: false,
};

module.exports = typeOrmConfig;
