import { Container, Paper, Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container component='main' maxWidth='xs'>
            <Paper elevation={6}>
                <Typography component='h1' variant='h5' align='center'>
                    Login{' '}
                </Typography>
                <form action=''>
                    <TextField label='email' style={{ width: '90%', margin: '3px' }}></TextField>
                    <TextField label='password' style={{ width: '90%', margin: '3px' }}></TextField>

                    <div>
                        <Button variant='outlined' style={{ margin: 10 }}>
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
