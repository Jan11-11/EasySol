import knex from 'knex';
import knexConfigs from '../knex.configs';
import { LoggerUtil } from '../src/utils';

async function down() {
  const options = process.env.NODE_ENV === 'production'
    ? knexConfigs.production
    : knexConfigs.development;

  const pg = knex(options);

  try {
    // Drop tables in the correct order respecting foreign key constraints
    await pg.schema.dropTableIfExists('policies');
    await pg.schema.dropTableIfExists('vacancies');
    await pg.schema.dropTableIfExists('partners');
    await pg.schema.dropTableIfExists('users');
    await pg.schema.dropTableIfExists('slides');
    await pg.schema.dropTableIfExists('services');

    console.log('Successfully dropped all tables ... ');
  } catch (error) {
    LoggerUtil.error(error.message);
    throw error; // Propagate the error to see the full stack trace
  } finally {
    await pg.destroy(); // Close the database connection after dropping tables
    process.exit(); // Exit the script
  }
}

async function init() {
  try {
    await down();
  } catch (error) {
    LoggerUtil.error(error.message);
  }
}

init();
