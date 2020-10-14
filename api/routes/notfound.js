const NotFound = require('../helpers/errors');

module.exports = (err, req, res, next) => {
    if (err instanceof NotFound) {
        res.status(404).send('Sorry, Doesn\'t exists...\nYOu Moron!!!..');
        next();
    }        
    else {
        next(err);
    }
};