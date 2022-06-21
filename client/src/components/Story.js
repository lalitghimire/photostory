import { Card, CardMedia, Typography } from '@mui/material';

const Story = ({ title, user, photo }) => {
    return (
        <Card>
            <CardMedia
                style={{ height: '300px', paddingTop: '2%' }}
                image={`${photo}`}
                title={`${title}`}
            />
            <Typography noWrap> Title: {title} </Typography>
            <Typography>User:{user}</Typography>
        </Card>
    );
};

export default Story;
