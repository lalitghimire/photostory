import express from 'express';
const router = express.Router();
import authMiddleware from '../middleware/authMiddleware.js';
import {
    addStory,
    getStories,
    getSingleStory,
    updateStory,
    deleteStory,
} from '../controllers/stories.js';

router.post('/', authMiddleware, addStory);
router.get('/', getStories);
router.get('/:id', getSingleStory);
router.put('/:id', authMiddleware, updateStory);
router.delete('/:id', authMiddleware, deleteStory);

export default router;
