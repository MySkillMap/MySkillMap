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
  const query =  // Insert SQL Query

  try {
    // Execute query
  } catch (error) {
    console.error(error);
  }
};

// GET Specific user path by ID
const getPathById = async (id, userId) => {
  const query =  // Insert SQL Query

  try {
    // Execute query
  } catch (error) {
    console.error(error);
  }
};

// CREATE a new Learning Path
const createPath = async (id, userId) => {
  const query = // Insert SQL Query

  try {
   
  } catch (error) {
    console.error(error);
  }
};

// PATCH existing learning path
const updatePath = async (id) => {
  const query = // Insert SQL Query

  try {

  } catch (error) {
    console.error(error);
  }
};

// DELETE existing learning path
const deletePath = async (id) => {
  const query = // Insert SQL Query

  try {
   
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllPathsByUser,
  getPathById,
  createPath,
  updatePath,
  deletePath,
};
