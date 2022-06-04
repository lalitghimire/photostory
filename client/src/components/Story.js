import { Card, CardMedia, Typography } from '@mui/material';

const Story = () => {
    return (
        <Card>
            <CardMedia
                style={{ height: '300px', paddingTop: '2%' }}
                image={
                    'http://www.freeimageslive.com/galleries/workplace/office2/pics/desk_tidy_pencils.jpg'
                }
                title='This is image'
            />
            <Typography> This is title</Typography>
        </Card>
    );
};

export default Story;
