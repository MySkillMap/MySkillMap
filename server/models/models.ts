// Purpose: Contains the models for the database tables.
// Explanation: This file will contain the models for the
// database tables. This will allow us to define the
// structure of the tables and the relationships between
// the tables. This will be used in the server.ts file
// to interact with the database.

import {Pool} from 'pg';

export default class Db {
  pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async query(text: string, params: any) {
    return this.pool.query(text, params);
  }
}