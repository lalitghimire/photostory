import Story from '../models/Story.js';
import User from '../models/User.js';

const addStory = async (req, res) => {
    const user = await User.findById(req.userId);
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
    const user = await User.findById(req.userId);
    const storyToBeEdited = await Story.findById(req.params.id);

    if (storyToBeEdited.user !== user.username) {
        return res.status(401).json('not authorized to update');
    }

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
    const user = await User.findById(req.userId);
    const storyToBeDeleted = await Story.findById(req.params.id);

    if (!storyToBeDeleted) {
        return res.status(404).json('story not found');
    }
    if (storyToBeDeleted.user !== user.username) {
        return res.status(401).json('not authorized to delete');
    }
    try {
        await Story.deleteOne(storyToBeDeleted);
        res.send({ id: req.params.id, message: 'deleted successfully' });
    } catch (error) {
        res.send(error);
    }
};

export { addStory, getStories, getSingleStory, updateStory, deleteStory };
