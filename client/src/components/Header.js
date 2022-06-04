import { AppBar } from '@mui/material';

const Header = () => {
    return (
        <header style={{ textAlign: 'center' }}>
            <AppBar position='static' style={{ background: '#199ca8', borderRadius: '20px' }}>
                {' '}
                <h1>Photo story book </h1>{' '}
            </AppBar>
        </header>
    );
};

export default Header;
