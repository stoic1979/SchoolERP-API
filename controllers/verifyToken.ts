import * as jwt from 'jsonwebtoken';
import config from '../config/config';

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log('token : ', token);
    if (!token) {
        return res.status(403).send({ success: false, message: 'No token provided.' });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ success: false, message: 'Invaild token provided.' });
        }

        // if everything good, save to request for use in other routes
        req.userId = decoded.id;
        console.log('authenticated user: ', req.userId);
        next();
    });
};

module.exports = verifyToken;
