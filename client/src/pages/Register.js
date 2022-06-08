import { Button, Container, Paper, Typography, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../redux/features/authSlice';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const { username, email, password } = formData;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            username,
            email,
            password,
        };
        console.log('userdata', userData);
        console.log('form', formData);
        dispatch(register(userData));
        navigate('/login');
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
                    Register{' '}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name='username'
                        value={username}
                        onChange={handleInputChange}
                        label='username'
                        style={{ width: '90%', margin: '3px' }}
                    ></TextField>
                    <TextField
                        name='email'
                        value={email}
                        onChange={handleInputChange}
                        label='email'
                        style={{ width: '90%', margin: '3px' }}
                    ></TextField>
                    <TextField
                        name='password'
                        value={password}
                        onChange={handleInputChange}
                        label='password'
                        style={{ width: '90%', margin: '3px' }}
                    ></TextField>

                    <div>
                        <Button type='submit' variant='outlined' style={{ margin: 10 }}>
                            Register
                        </Button>
                    </div>
                    <div>
                        {' '}
                        Already registered? <Link to={'/login'}> login </Link>{' '}
                    </div>
                </form>
            </Paper>
        </Container>
    );
};

export default Register;
