export const addStory = (req, res) => {
    console.log('add stories');
    res.send('post a story');
};

export const getStories = (req, res) => {
    res.send('get all');
};

export const getSingleStory = (req, res) => {
    res.send('get single');
};

export const updateStory = (req, res) => {
    res.send('update all');
};
export const deleteStory = (req, res) => {
    res.send('delete all');
};
