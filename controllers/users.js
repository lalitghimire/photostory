import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secret = process.env.JWT_SECRET;

const register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPw = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPw,
        });

        const user = await newUser.save();
        res.send(user);
    } catch (error) {
        res.send(error);
    }
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send({ msg: 'User not found' });

        const validate = await bcrypt.compare(req.body.password, user.password);
        if (!validate) return res.status(400).send({ msg: 'Password incorrect' });

        const jwttoken = jwt.sign({ email: user.email, id: user._id }, secret, {
            expiresIn: '1h',
        });
        res.send({ user: { name: user.username, email: user.email, id: user._id }, jwttoken });
    } catch (error) {
        res.send(error);
    }
};

export { register, login };
