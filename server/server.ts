import express from "express";
import { Request, Response, NextFunction } from "express";
import { ServerError } from "./types";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

const app = express();

// Use environment variable for dynamic port setting (Docker can override it)
const PORT = process.env.PORT || 8080;

// Load environment variables from the .env file
dotenv.config();

// Allow CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Allows parsing of JSON request bodies
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Import routers
import dbRouter from "./routes/dbRouter";

// Use database routes under '/api/db'
app.use("/api/db", dbRouter);

// 404 handler for unknown routes
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

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
