// Purpose: Define the routes for the database
// Explanation: This file will be used
// to define the routes for the database
// and will be used in the server.ts file
// to route the database requests to the correct
// database functions.
import { Router } from 'express';
import  Db  from '../models/models';
export default function dbRouter(db: Db): Router {
}