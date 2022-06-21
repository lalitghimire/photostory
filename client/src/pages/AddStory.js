import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Typography, Paper } from '@mui/material';
import { addStory } from '../redux/features/storySlice';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    details: yup.string().required('Details is required'),
    photo: yup
        .mixed()
        .test('required', 'You need to upload an image', (value) => {
            return value && value.length;
        })
        .test('fileSize', 'The file is too large, max size 2 MB', (value, context) => {
            return value && value[0] && value[0].size <= 2097152;
        }),
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
    const { isLoading } = useSelector((state) => ({ ...state.authReducer }));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: yupResolver(schema) });

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleSubmitStory = async (data) => {
        const { photo } = data;
        const picInBase64 = await convertBase64(photo[0]);
        const storyData = { ...data, photo: picInBase64 };
        console.log('story', storyData);
        dispatch(addStory(storyData));
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
                    Add your story
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
                    <div style={{ margin: '10px' }}>
                        <input
                            type='file'
                            name='photo'
                            variant='outlined'
                            required
                            accept='image/gif, image/jpeg, image/png, image/jpg'
                            {...register('photo')}
                        />
                        <div style={errorStyle}>{errors?.photo && errors.photo.message}</div>
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
                        Create Story
                    </Button>
                </form>
            </Paper>
        </div>
    );
};

export default StoryForm;
