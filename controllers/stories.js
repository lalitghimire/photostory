import Story from '../models/Story.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const getToken = (req) => {
    const auth = req.get('authorization');
    if (auth && auth.toLowerCase().startsWith('bearer ')) {
        return auth.substring(7);
    }
    return null;
};

const addStory = async (req, res) => {
    const token = getToken(req);
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken.id) {
        return res.json({ error: 'token missing or invalid' });
    }
    const user = await User.findById(decodedToken.id);

    const story = req.body;

    const newStory = new Story({ ...story, user: user.username });
    try {
        await newStory.save();
        res.send(newStory);
    } catch (error) {
        res.send(error);
    }
};

const getStories = async (req, res) => {
    try {
        const stories = await Story.find({});
        res.send(stories);
    } catch (error) {
        res.send(error);
    }
};

const getSingleStory = async (req, res) => {
    try {
        console.log('here is single ', req.params.id);
        const story = await Story.findById({ _id: req.params.id });
        if (!story) {
            return res.status(404).json('story not found');
        }
        res.send(story);
    } catch (error) {
        res.send(error);
    }
};

const updateStory = async (req, res) => {
    try {
        let editedStory = await Story.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (!editedStory) {
            return res.status(404).json('story not found');
        }
        res.send(editedStory);
    } catch (error) {
        res.send(error);
    }
};
const deleteStory = async (req, res) => {
    const storyToBeDeleted = await Story.findById(req.params.id);
    if (!storyToBeDeleted) {
        return res.status(404).json('story not found');
    }
    try {
        await Story.deleteOne(storyToBeDeleted);
        res.send({ id: req.params.id, message: 'deleted successfully' });
    } catch (error) {
        res.send(error);
    }
};

export { addStory, getStories, getSingleStory, updateStory, deleteStory };
