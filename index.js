import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute.js';
import storiesRouter from './routes/storiesRoute.js';
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.static('client/build'));

app.get('/', (req, res) => {
    res.send('Hello storybook');
});

const mongo_uri = process.env.MONGO_URI;

//connection to mongodb local
const dbConnection = async () => {
    try {
        const connection = await mongoose.connect(mongo_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Succesful connection to the database`);
    } catch (error) {
        console.log('Database connection failed', error.message);
    }
};

dbConnection();

app.use('api/users', userRouter);
app.use('api/stories', storiesRouter);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
