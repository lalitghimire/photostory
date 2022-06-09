import React, { useEffect } from 'react';
import Story from '../components/Story.js';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStories } from '../redux/features/storySlice';

const Home = () => {
    const { stories, isLoading } = useSelector((state) => state.storyReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStories());
    }, [dispatch]);

    if (isLoading) {
        return <p> Stories loading......</p>;
    }
    console.log('stories', stories);
    return (
        <Grid container margin='0px' padding='25px' alignItems='auto' spacing={3}>
            {stories &&
                stories.map((story) => (
                    <Grid item xs={12} sm={12} md={6} lg={3} key={story._id}>
                        {' '}
                        <Story title={story.title} user={story.user}></Story>{' '}
                    </Grid>
                ))}
        </Grid>
    );
};

export default Home;
