import React, { useEffect } from 'react';
import Story from '../components/Story.js';
import { Grid, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStories, removeStory } from '../redux/features/storySlice';

const Home = () => {
    const { stories, isLoading } = useSelector((state) => state.storyReducer);
    const { user } = useSelector((state) => ({ ...state.authReducer }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStories());
    }, [dispatch]);

    if (isLoading) {
        return <p> Stories loading......</p>;
    }

    const userName = user ? user.user.name : null;

    const handleDelete = (id) => {
        dispatch(removeStory(id));
    };

    return (
        <Grid container margin='0px' padding='25px' alignItems='auto' spacing={3}>
            {stories &&
                stories.map((story) => (
                    <Grid item xs={12} sm={12} md={6} lg={3} key={story._id}>
                        {' '}
                        <Story title={story.title} user={story.user}>
                            {' '}
                        </Story>{' '}
                        {userName === story.user && (
                            <Button onClick={() => handleDelete(story._id)}> Delete</Button>
                        )}
                    </Grid>
                ))}
        </Grid>
    );
};

export default Home;
