const NotFound = require('./notFound');
const NotImplemented = require('./notImplemented');

module.exports = (err, req, res, next) => {
    if (err instanceof NotFound) {
        res.status(404).send('Not found...');
        next();
    }
    else if (err instanceof NotImplemented) {
        res.status(501).send('Not implemented yet...');
        next();
    }      
    else {
        res.status(500).send('Unknown Error...');
    }
};