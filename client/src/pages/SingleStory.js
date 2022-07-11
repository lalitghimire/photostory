import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Paper, Card, Typography, CardMedia } from '@mui/material';

const SingleStory = () => {
    const { stories } = useSelector((state) => ({ ...state.storyReducer }));
    const { id } = useParams();
    const singleStory = stories.find((story) => story._id === id);

    return (
        <Container maxWidth='md' sx={{ mt: 3, mb: 5 }}>
            <Paper>
                <Card style={{ padding: '5px' }}>
                    <Typography variant='h5' align='center' noWrap>
                        {' '}
                        Title: {singleStory.title}
                    </Typography>
                    <Typography variant='h6' align='center' noWrap>
                        {' '}
                        Creator: {singleStory.user}
                    </Typography>
                    <CardMedia
                        style={{
                            alignContent: 'center',
                            height: '800px',
                            paddingTop: '2%',
                        }}
                        image={`${singleStory.photo}`}
                        title={`${singleStory.title}`}
                        component='img'
                    />
                    <Typography variant='h5' align='center' noWrap>
                        {' '}
                        Story in detail
                    </Typography>
                    <Typography
                        align='justify'
                        color='primary'
                        variant='body1'
                        wordWrap='break-word'
                    >
                        {singleStory.details}
                    </Typography>
                </Card>
            </Paper>
        </Container>
    );
};

export default SingleStory;
