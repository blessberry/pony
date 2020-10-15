require('dotenv').config();
const jwt = require('jsonwebtoken');

const SIGNATURE = process.env.SIGNATURE;

module.exports = (findUserByToken) => (req, res, next) => {
    const header = req.headers.authorization || '';
    const [type, token] = header.split(' ');
 
    if (type === 'Bearer') {
        let payload;
        try {
            payload = jwt.verify(token, SIGNATURE);
        } catch(err) {
            res.sendStatus(401);
            return;
        }
        const user = findUserByToken(payload);
        if (user) {
            req.user = user;
        } else {
                res.sendStatus(401);
            return;
        }
    };
    next();
};