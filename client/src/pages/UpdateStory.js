import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Typography, Paper } from '@mui/material';
import { updateStory } from '../redux/features/storySlice';
import { useNavigate, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    details: yup.string().required('Details is required'),
});

const errorStyle = {
    color: 'red',
};

const formContainer = {
    margin: 'auto',
    padding: '50px',
    maxWidth: '650px',
    maxHeight: '650px',
    alignContent: 'center',
    marginTop: '120px',
    marginBottom: '50px',
};

const StoryForm = () => {
    const { isLoading, stories } = useSelector((state) => ({ ...state.storyReducer }));
    const { id } = useParams();
    const toBeUpdatedStory = stories.find((story) => story._id === id);
    const { title, details } = toBeUpdatedStory;
    const initialValues = { title: title, details: details };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ defaultValues: initialValues, resolver: yupResolver(schema) });

    const handleSubmitStory = async (data) => {
        const storyData = { ...toBeUpdatedStory, title: data.title, details: data.details };
        dispatch(updateStory(storyData));
        !isLoading && navigate('/');
        reset();
    };

    return (
        <div style={formContainer}>
            <Paper
                style={{
                    padding: 20,
                }}
                elevation={6}
            >
                <Typography component='h1' variant='h5' align='center'>
                    Update your story
                </Typography>

                <form onSubmit={handleSubmit(handleSubmitStory)}>
                    <div>
                        <TextField
                            name='title'
                            label='Title'
                            variant='outlined'
                            sx={{ m: 1, width: '25ch' }}
                            required
                            style={{ width: '95%' }}
                            InputLabelProps={{ style: { fontSize: 23 } }}
                            {...register('title')}
                        />
                        <div style={errorStyle}>{errors?.title && errors.title.message}</div>
                        <TextField
                            name='details'
                            label='Details'
                            variant='outlined'
                            required
                            sx={{ m: 1, width: '25ch' }}
                            multiline
                            rows={4}
                            style={{ width: '95%' }}
                            InputLabelProps={{ style: { fontSize: 23 } }}
                            {...register('details')}
                        />
                        <div style={errorStyle}>{errors?.details && errors.details.message}</div>
                    </div>

                    <Button
                        style={{
                            padding: 8,
                            margin: '10px',
                        }}
                        variant='outlined'
                        type='submit'
                    >
                        {' '}
                        Update Story
                    </Button>
                </form>
            </Paper>
        </div>
    );
};

export default StoryForm;
