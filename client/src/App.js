import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { Container } from '@mui/material';
import Login from './pages/Login';
import Register from './pages/Register';
import AddStory from './pages/AddStory';
import UpdateStory from './pages/UpdateStory';
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
                <Route path='/addstory' element={<AddStory />} />
                <Route path='/updatestory/:id' element={<UpdateStory />} />
            </Routes>
        </Container>
    );
};

export default App;
