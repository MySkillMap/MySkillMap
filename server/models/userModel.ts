// Code for user model functions
// This file contains functions for creating and finding users in the database
import pool from './models.ts'; 

// Create a new user
// This function creates a new user in the database
// It returns the new user if successful, otherwise it throws an error
export const createUser = async (email: string, passwordHash: string) => {
  const query = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email;`;
  const values = [email, passwordHash];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Find a user by email
// This function finds a user in the database by email
// It returns the user if found, otherwise it returns undefined
export const findUserByEmail = async (email: string) => {
  const query = `SELECT * FROM users WHERE email = $1;`;
  const { rows } = await pool.query(query, [email]);
  return rows[0];
};
