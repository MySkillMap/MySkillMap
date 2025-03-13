import express from "express";
import { Request, Response, NextFunction } from 'express';
import {ServerError} from './types';
import cors from 'cors';
// importing dotenv files
import dotenv from 'dotenv';
// importing routers
import dbRouter from './routes/dbRouter.ts';
import authRouter from './routes/authRouter.ts';

const app = express();
const PORT = 8080; //! we can change this later

// This allows us to use our API/URI keys in the .env files
dotenv.config({path: '../.env'}); 

//allow cors to allow all origins
app.use(cors());
// allows parsing of json responses
app.use(express.json());

// Routes
app.use('/dashboard', dbRouter);
app.use('/', authRouter);

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
    // We add the type of ServerError to our errorObj
    const errorObj: ServerError = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    res.status(errorObj.status).json(errorObj.message);
  }
);

// App listening event
app.listen(PORT, () => {
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT
    );
});