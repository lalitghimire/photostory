import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import { Container } from '@mui/material';
import Login from './pages/Login';
import Register from './pages/Register';
import AddStory from './pages/AddStory';
import UpdateStory from './pages/UpdateStory';
import SingleStory from './pages/SingleStory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <Container maxWidth='xl'>
            <Header />
            <ToastContainer position='top-center' />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/singlestory/:id' element={<SingleStory />} />

                <Route
                    path='/addstory'
                    element={
                        <ProtectedRoute>
                            {' '}
                            <AddStory />{' '}
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/updatestory/:id'
                    element={
                        <ProtectedRoute>
                            {' '}
                            <UpdateStory />{' '}
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Container>
    );
};

export default App;
