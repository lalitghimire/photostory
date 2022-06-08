import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const url = `http://localhost:5000`;
const user = JSON.parse(localStorage.getItem('profile'));

export const register = createAsyncThunk('auth/register', async (newUser, { rejectWithValue }) => {
    console.log(newUser);
    try {
        const response = await axios.post(`${url}/users/register`, newUser);
        toast.success('User registration Success');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const login = createAsyncThunk('auth/login', async (loginUser, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${url}/users/login`, loginUser);
        toast.success('Login Success');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: user ? user : null,
        isLoading: false,
        error: null,
    },
    reducers: {
        setLogout: (state, action) => {
            localStorage.clear();
            state.user = null;
            toast.success('signed out');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
                state.user = action.payload;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});
export const { setLogout } = authSlice.actions;
export default authSlice.reducer;
