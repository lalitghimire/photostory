import { Container, Paper, Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/features/authSlice';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { email, password } = formData;
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        console.log('userdata', userData);
        console.log('form', formData);
        dispatch(login(userData));
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        console.log('eee', name, value);
        setFormData({ ...formData, [name]: value });
    };

    return (
        <Container component='main' maxWidth='xs'>
            <Paper elevation={6}>
                <Typography component='h1' variant='h5' align='center'>
                    Login{' '}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name='email'
                        onChange={handleInputChange}
                        value={email}
                        label='email'
                        style={{ width: '90%', margin: '3px' }}
                    ></TextField>
                    <TextField
                        name='password'
                        onChange={handleInputChange}
                        value={password}
                        label='password'
                        style={{ width: '90%', margin: '3px' }}
                    ></TextField>

                    <div>
                        <Button type='submit' variant='outlined' style={{ margin: 10 }}>
                            Login
                        </Button>
                    </div>
                    <div>
                        {' '}
                        Not registered yet? <Link to={'/register'}> register </Link>{' '}
                    </div>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;
