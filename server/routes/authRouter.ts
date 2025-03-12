// Desc: Router for authentication routes

// 1. Imports express and the auth controller functions
import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController';

// 2. Creates a new router instance
const router = Router();

// 3. Defines the register and login routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// 4. Exports the router
export default router;
