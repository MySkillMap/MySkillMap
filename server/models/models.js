// Purpose: Contains the models for the database tables.
// Explanation: This file will contain the models for the
// database tables. This will allow us to define the
// structure of the tables and the relationships between
// the tables. This will be used in the server.ts file
// to interact with the database.

const { Pool } = require('pg'); // imports Pool class from node postgres library
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({ // create instance of pool 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432, // PostgreSQL default port
    database: process.env.DB_NAME
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};


