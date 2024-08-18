// NPM Modules
import knex from 'knex';
import knexConfigs from '../knex.configs';

// Local Modules
import { LoggerUtil } from '../src/utils';

function up(pg) {
  return pg.schema
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('username').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.string('role'); // Description of the role
      table.dateTime('created_at'); // Record creation timestamp
      table.dateTime('updated_at'); // Record update timestamp
    })
    .createTable('partners', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('logo').notNullable();
      table.text('title');
      table.text('text');
      table.dateTime('created_at'); // Record creation timestamp
      table.dateTime('updated_at'); // Record update timestamp
    })
    .createTable('vacancies', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description').notNullable();
      table.string('title');
      table.text('text');
      table.decimal('salary', 15, 2);
      table.text('titleName'); // Adding titleName column
      table.json('titles1'); // Adding titles1 column to store array data
      table.json('titles2'); // Adding titles2 column to store array data
      table.json('titles3'); // Adding titles3 column to store array data
      table.string('email');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('policies', (table) => {
      table.increments('id').primary();
      table.text('text').notNullable();
      table.boolean('show').defaultTo('true');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('slides', (table) => {
      table.increments('id').primary();
      table.string('image').notNullable();
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('services', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.text('description');
      table.jsonb('subTitle');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    });
}

async function init() {
  try {
    const options = process.env.NODE_ENV === 'production'
      ? knexConfigs.production : knexConfigs.development;
    const pg = knex(options);
    await up(pg);
    console.log('Successfully created all tables ... ');
    process.kill(process.pid);
  } catch (error) {
    LoggerUtil.error(error.message);
  }
}

init();
