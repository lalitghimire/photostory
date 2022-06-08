import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import storyReducer from './features/storySlice';

export default configureStore({
    reducer: {
        authReducer,
        storyReducer,
    },
});
