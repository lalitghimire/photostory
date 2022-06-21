import { Button, Container, Paper, Typography, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { register as registerUser } from '../redux/features/authSlice';

const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
});

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: yupResolver(schema) });

    const handleRegistration = async (data) => {
        await dispatch(registerUser(data));
        reset();
        navigate('/login');
    };

    return (
        <Container component='main' maxWidth='xs'>
            <Paper elevation={6}>
                <Typography component='h1' variant='h5' align='center'>
                    Register{' '}
                </Typography>
                <form onSubmit={handleSubmit(handleRegistration)}>
                    <TextField
                        name='username'
                        label='username'
                        variant='outlined'
                        sx={{ m: 1, width: '25ch' }}
                        required
                        error={Boolean(errors.username)}
                        helperText={errors.username?.message}
                        style={{ width: '95%' }}
                        InputLabelProps={{ style: { fontSize: 23 } }}
                        {...register('username')}
                    />
                    <TextField
                        name='email'
                        label='Email'
                        variant='outlined'
                        sx={{ m: 1, width: '25ch' }}
                        required
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                        style={{ width: '95%' }}
                        InputLabelProps={{ style: { fontSize: 23 } }}
                        {...register('email')}
                    />
                    <TextField
                        name='password'
                        label='Password'
                        variant='outlined'
                        sx={{ m: 1, width: '25ch' }}
                        required
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                        style={{ width: '95%' }}
                        InputLabelProps={{ style: { fontSize: 23 } }}
                        {...register('password')}
                    />

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
