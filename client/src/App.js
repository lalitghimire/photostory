import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { Container } from '@mui/material';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
    return (
        <Container maxWidth='xl'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Container>
    );
};

export default App;
