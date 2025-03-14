// Purpose: Define the routes for the database
// Explanation: This file will be used
// to define the routes for the database
// and will be used in the server.ts file
// to route the database requests to the correct
// database functions.
// import { Router } from 'express';
// import  Db  from '../models/models';
// export default function dbRouter(db: Db): Router {
// }

import express from 'express';
import * as dbController from '../controllers/dbController';

const router = express.Router();

// GET all paths by user ID
router.get('/path/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const paths = await dbController.getAllPathsByUser(userId);
        res.status(200).json(paths);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user paths' });
    }
});

// GET a specific path by path ID and user ID
router.get('/path/:id/:userId', async (req, res) => {
    const { id, userId } = req.params;
    try {
        const path = await dbController.getPathById(id, userId);
        res.status(200).json(path);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch the path' });
    }
});

// CREATE a new learning path for a user
router.post('/path/:userId', async (req, res) => {
    const { userId } = req.params;
    const newPath = req.body;
    try {
        const createdPath = await dbController.createPath(userId, newPath);
        res.status(201).json(createdPath);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create a new learning path' });
    }
});

// PATCH (update) an existing learning path by ID
router.patch('/path/:id', async (req, res) => {
    const { id } = req.params;
    const updatedPath = req.body;
    try {
        const updated = await dbController.updatePath(id, updatedPath);
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the path' });
    }
});

// DELETE an existing learning path by ID
router.delete('/path/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await dbController.deletePath(id);
        res.status(204).send(); // No content as the resource is deleted
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the path' });
    }
});

export default router;



