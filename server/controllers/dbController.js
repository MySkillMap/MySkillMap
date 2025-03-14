// Purpose: Controller for database operations
// Explanation: This file will contain the functions
// that will be used to interact with the database.
// This will include functions to get data from the
// database, insert data into the database, update data
// in the database, and delete data from the database.
// These functions will be used in the dbRouter.ts file
// to route the database requests to the correct functions.

// import express from "express";
// import { Request, Response, NextFunction } from 'express';

const db = require('../db');

// GET All Paths by User
const getAllPathsByUser = async (userId) => {
  // query SkillMapTable where user id matches given userId
  const query = `
      SELECT * 
      FROM SkillMapTable 
      WHERE UserId = $1;
    `;

  try {
    const { rows } = await db.query(query, [userId]); // execute query with provided user id
    return rows; // return rows containing skill maps
  } catch (error) {
    console.error('Error fetching skill maps:', error);
    throw error;
  }
};

// GET Specific user's path by ID
const getPathById = async (id, userId) => {
  // retrieve all colums from every field from SkillMapTable // filter only reords that match id and user id
  const query = `
      SELECT * 
      FROM SkillMapTable 
      WHERE Id = $1 AND UserId = $2;
    `;

  try {
    const { rows } = await db.query(query, [id, userId]); //execute query with provided user id and path id

    if (rows.length > 0) {
      return rows[0]; // return first matching skill map if found
    }

    return null; // or return null if not found
  } catch (error) {
    console.error('Error fetching skill map by ID:', error);
    throw error;
  }
};

// CREATE a new Learning Path
const createPath = async (id, userId, nameOfSkillMap, description) => {
  //Inserts new record into Skill Map Table requiring Id UserId NameofSkillMap Description
  //$1 $2 etc are parameterize placeholders // returns all columns of newly inserted row so the caller gets the created map
  const query = `
      INSERT INTO SkillMapTable (Id, UserId, NameofSkillMap, Description)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

  try {
    const { rows } = await db.query(query, [
      id,
      userId,
      nameOfSkillMap,
      description,
    ]);
    return rows[0]; // Return the newly created learning path
  } catch (error) {
    console.error('Error creating new learning path:', error);
    throw error;
  }
};

// PATCH existing learning path
const updatePath = async (id, nameOfSkillMap, description) => {
  //modify reocrds on SkillMapTable //Updates NameofSkillMap and Description
  //only updates learning path with given id //returns all columns updated record
  const query = `
      UPDATE SkillMapTable
      SET NameofSkillMap = $1, Description = $2
      WHERE Id = $3
      RETURNING *;
    `;

  try {
    const { rows } = await db.query(query, [nameOfSkillMap, description, id]);

    if (rows.length > 0) {
      return rows[0]; // Return the updated skill map
    }

    return null; // Return null if no record was updated
  } catch (error) {
    console.error('Error updating learning path:', error);
    throw error;
  }
};

// DELETE existing learning path
const deletePath = async (id) => {
  // removes record from skill map table
  //only learning path matching id is deleted // returls deleted row before it is revmoved from db
  const query = `
      DELETE FROM SkillMapTable
      WHERE Id = $1
      RETURNING *;
    `;

  try {
    const { rows } = await db.query(query, [id]);

    if (rows.length > 0) {
      return rows[0]; // Return the deleted record
    }

    return null; // Return null if no record was found and deleted
  } catch (error) {
    console.error('Error deleting learning path:', error);
    throw error;
  }
};

module.exports = {
  getAllPathsByUser,
  getPathById,
  createPath,
  updatePath,
  deletePath,
};
