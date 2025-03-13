import express from "express";
import { Request, Response, NextFunction } from 'express';
import { ServerError } from './types';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

const app = express();

// Use environment variable for dynamic port setting (Docker can override it)
const PORT = process.env.PORT || 8080;  // Default to 8080 if not set

// Load environment variables from the .env file
dotenv.config();

// Allow CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Allows parsing of JSON request bodies
app.use(express.json());

// Serve static files from the 'public' folder (ensure correct path)
app.use(express.static(path.join(__dirname, 'public')));

// Importing the database router
import dbRouter from './routes/dbRouter.ts';
app.use('/db', dbRouter);

// Global Error Handler
app.use(
  '/',
  (
    err: ServerError,
    req: Request,
    res: Response,
    _next: NextFunction
  ): void => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    
    // Combine the default error with the custom error if any
    const errorObj: ServerError = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    res.status(errorObj.status).json(errorObj.message);
  }
);

// Start the app and listen for requests
app.listen(PORT, () => {
  console.log(`Server is successfully running on port ${PORT}`);
});
