import Story from '../models/Story.js';

const addStory = async (req, res) => {
    const story = req.body;
    const newStory = new Story(story);
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
        const story = await Story.findOne({ _id: req.params.id });
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
        res.send(editedStory);
    } catch (error) {
        res.send(error);
    }
};
const deleteStory = async (req, res) => {
    const storyToBeDeleted = await Story.findById(req.params.id);
    try {
        await Story.deleteOne(storyToBeDeleted);
        res.send({ id: req.params.id });
    } catch (error) {
        res.send(error);
    }
};

export { addStory, getStories, getSingleStory, updateStory, deleteStory };
