import React from 'react';
import { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Typography } from '@mui/material';
import { addStory, updateStory } from '../redux/features/storySlice';

const StoryForm = () => {
    const [formData, setFormData] = useState({ title: '', details: '', photo: '' });
    const { title, details } = formData;

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addStory(formData));
        return console.log('submit clicked', formData);
    };
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        console.log('eee', name, value);
        setFormData({ ...formData, [name]: value });
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name='title'
                value={title}
                onChange={handleInputChange}
                variant='outlined'
                label='Title'
                sx={{ m: 1, width: '25ch' }}
                style={{ width: '100%' }}
                InputLabelProps={{ style: { fontSize: 23 } }}
            />

            <TextField
                name='details'
                value={details}
                onChange={handleInputChange}
                variant='outlined'
                multiline
                label='Details'
                sx={{ m: 1, width: '25ch' }}
                style={{ width: '100%' }}
                InputLabelProps={{ style: { fontSize: 23 } }}
            />

            <div style={{ margin: 10, padding: 2 }}>
                <Typography>photo for the story</Typography>
                <FileBase
                    type='file'
                    multiple={false}
                    onDone={({ base64 }) => setFormData({ ...formData, photo: base64 })}
                />
            </div>

            <Button variant='outlined' type='submit'>
                Add
            </Button>
        </form>
    );
};

export default StoryForm;
