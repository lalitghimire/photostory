import { Button, Container, Paper, Typography, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container component='main' maxWidth='xs'>
            <Paper elevation={6}>
                <Typography component='h1' variant='h5' align='center'>
                    Register{' '}
                </Typography>
                <form action=''>
                    <TextField label='username' style={{ width: '90%', margin: '3px' }}></TextField>
                    <TextField label='email' style={{ width: '90%', margin: '3px' }}></TextField>
                    <TextField label='password' style={{ width: '90%', margin: '3px' }}></TextField>

                    <div>
                        <Button variant='outlined' style={{ margin: 10 }}>
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
