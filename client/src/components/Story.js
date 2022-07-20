import { Card, CardMedia, Typography } from '@mui/material';

const Story = ({ title, user, photo }) => {
    return (
        <Card>
            <CardMedia
                component='img'
                style={{ height: '300px', paddingTop: '2%' }}
                image={`${photo}`}
                title={`${title}`}
            />
            <Typography noWrap color='primary' variant='h6'>
                {' '}
                Title: {title}{' '}
            </Typography>
            <Typography color='primary' variant='h6'>
                Creator:{user}
            </Typography>
        </Card>
    );
};

export default Story;
