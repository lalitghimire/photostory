import mongoose from 'mongoose';

const storySchema = mongoose.Schema({
    image: {
        type: String,
    },
    title: String,
    details: String,
    user: String,
});

const StoryModel = mongoose.model('Story', storySchema);

export default StoryModel;
