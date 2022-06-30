import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth || !auth.toLowerCase().startsWith('bearer ')) {
        return res.json({ error: 'token missing or invalid' });
    }
    const token = auth.substring(7);
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decodedToken.id;
        next();
    } catch (error) {
        return res.json({ error: 'Not authorized to delete' });
    }
};

export default authMiddleware;
