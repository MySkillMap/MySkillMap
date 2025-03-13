// Desc: Controller functions for user authentication
// 1. registerUser: Registers a new user in the database
// 2. loginUser: Logs in a user and returns a JWT token

import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../models/userModel';

// 3. JWT_SECRET: Secret key for JWT token
const JWT_SECRET = process.env.JWT_SECRET!;

// 4. registerUser function:
//    a. Extracts email and password from request body
//    b. Checks if user already exists in the database
//    c. Hashes the password using bcrypt
//    d. Creates a new user in the database
//    e. Signs a JWT token with user id and email
//    f. Returns the new user and token in the response
export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) return res.status(409).json({ error: 'User already exists' });

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await createUser(email, passwordHash);
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET);
    res.status(201).json({ user: newUser, token });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// 5. loginUser function:   
//    a. Extracts email and password from request body
//    b. Finds the user in the database
//    c. Compares the password with the hashed password
//    d. Signs a JWT token with user id and email
//    e. Returns the user and token in the response

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET);
    res.status(200).json({ user: { id: user.id, email: user.email }, token });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
