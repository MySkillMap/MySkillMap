import express from "express";
import { Request, Response, NextFunction } from 'express';
import { ServerError } from './types';
import cors from 'cors';
// importing dotenv files
import dotenv from 'dotenv';
// importing routers
import dbRouter from './routes/dbRouter.ts';
import authRouter from './routes/authRouter.ts';

const app = express();

// Use environment variable for dynamic port setting (Docker can override it)
const PORT = process.env.PORT || 8080;

// This allows us to use our API/URI keys in the .env files
dotenv.config({path: '../.env'}); 

// Allow CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Allows parsing of JSON request bodies
app.use(express.json());

// Routes
app.use('/dashboard', dbRouter);
app.use('/', authRouter);

// Global error handler
app.use(
  (
    err: ServerError,
    req: Request,
    res: Response,
    _next: NextFunction
  ): void => {
    const defaultErr: ServerError = {
      log: "Express error handler caught unknown middleware error",
      status: 500,
      message: { err: "An internal server error occurred" },
    };
    
    const errorObj = { ...defaultErr, ...err };
    console.error(errorObj.log);
    res.status(errorObj.status).json(errorObj.message);
  }
);

// Start the app and listen for requests
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
