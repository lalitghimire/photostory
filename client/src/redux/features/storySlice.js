import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const url = `/api`;

export const addStory = createAsyncThunk(
    'stories/addStory',
    async (newStory, { rejectWithValue }) => {
        try {
            const headers = {
                headers: {
                    Authorization: `bearer ${JSON.parse(localStorage.getItem('profile')).jwttoken}`,
                },
            };

            console.log('headers', headers);

            const response = await axios.post(`${url}/stories`, newStory, headers);
            toast.success('A new story has been added');
            return response.data;
        } catch (error) {
            toast.error(' New story could not be added');
            return rejectWithValue(error.message);
        }
    }
);

export const getAllStories = createAsyncThunk(
    'stories/getStories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${url}/stories`);
            return response.data;
        } catch (error) {
            toast.error('Unable to fetch stories');
            return rejectWithValue(error.message);
        }
    }
);

export const removeStory = createAsyncThunk(
    'stories/removeStory',
    async (id, { rejectWithValue }) => {
        try {
            const headers = {
                headers: {
                    Authorization: `bearer ${JSON.parse(localStorage.getItem('profile')).jwttoken}`,
                },
            };
            const response = await axios.delete(`${url}/stories/${id}`, headers);
            toast.warn('A story has been deleted');
            return response.data;
        } catch (error) {
            toast.error(`Couldn't delete the story`);
            return rejectWithValue(error.message);
        }
    }
);

export const updateStory = createAsyncThunk(
    'stories/updateStory',
    async (toBeUpdatedStory, { rejectWithValue }) => {
        try {
            const headers = {
                headers: {
                    Authorization: `bearer ${JSON.parse(localStorage.getItem('profile')).jwttoken}`,
                },
            };
            const response = await axios.put(
                `${url}/stories/${toBeUpdatedStory._id}`,
                toBeUpdatedStory,
                headers
            );
            toast.success(`Story has been updated`);
            return response.data;
        } catch (error) {
            toast.error(`Couldn't update Story`);
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    stories: [],
    isLoading: false,

    error: null,
};

const storySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addStory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addStory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.stories.push(action.payload);
                state.error = null;
            })
            .addCase(addStory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(getAllStories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllStories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.stories = action.payload;
                state.filteredContacts = action.payload;
                state.error = null;
            })
            .addCase(getAllStories.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(removeStory.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(removeStory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.stories = state.stories.filter((c) => c._id !== action.payload.id);
                state.error = null;
            })
            .addCase(removeStory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(updateStory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateStory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.stories = state.stories.map((story) =>
                    story._id === action.payload._id ? action.payload : story
                );
                state.error = null;
            })
            .addCase(updateStory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

//export const {  } = contactsSlice.actions; //use when there is something in reducer

export default storySlice.reducer;
