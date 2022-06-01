import express from 'express';
const router = express.Router();
import {
    addStory,
    getStories,
    getSingleStory,
    updateStory,
    deleteStory,
} from '../controllers/stories.js';

router.post('/', addStory);
router.get('/', getStories);
router.get('/:id', getSingleStory);
router.put('/:id', updateStory);
router.delete('/:id', deleteStory);

export default router;
