import { Container, Paper, Typography, Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { login } from '../redux/features/authSlice';

const schema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
});

const Login = () => {
    const { isLoading, user } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: yupResolver(schema) });

    const handleLogin = (data) => {
        dispatch(login(data));
        reset();
    };
    if (user) navigate('/');

    return (
        <Container component='main' maxWidth='xs'>
            <Paper elevation={6}>
                <Typography component='h1' variant='h5' align='center'>
                    Login{' '}
                </Typography>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                            {isLoading ? 'Logging...' : 'Login'}
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
