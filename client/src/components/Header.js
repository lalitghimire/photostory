import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogout } from '../redux/features/authSlice';

const Header = () => {
    const { user } = useSelector((state) => ({ ...state.authReducer }));
    const dispatch = useDispatch();
    console.log('user', user);
    return (
        <AppBar
            position='static'
            style={{ align: 'center', background: '#7db1e8', borderRadius: '20px' }}
        >
            {' '}
            <Toolbar>
                <Typography variant='h4' display='flex' flexGrow={1}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>
                        {' '}
                        Photo story book{' '}
                    </Link>
                </Typography>{' '}
                {user?.user?.email && (
                    <Typography variant='h6'>signed in as {`${user.user.email}`}</Typography>
                )}
                {user && (
                    <Button
                        component={Link}
                        to='/addstory'
                        color='secondary'
                        variant='contained'
                        style={{ margin: 10 }}
                    >
                        Add Story
                    </Button>
                )}
                {user ? (
                    <Button
                        onClick={() => dispatch(setLogout())}
                        color='secondary'
                        variant='contained'
                        style={{ margin: 10 }}
                    >
                        Sign Out
                    </Button>
                ) : (
                    <Button
                        component={Link}
                        to='/login'
                        color='secondary'
                        variant='contained'
                        style={{ margin: 10 }}
                    >
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
