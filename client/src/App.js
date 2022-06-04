import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { Container } from '@mui/material';

const App = () => {
    return (
        <Container maxWidth='xl'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Container>
    );
};

export default App;
