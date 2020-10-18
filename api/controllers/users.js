const builder = require('xmlbuilder');
const users = require('../models/users.json');
const NotFound = require('../helpers/errors');

module.exports = {
    getUsers : (req, res) => { 
        if (req.accepts('application/xml')) 
            res.type('application/xml').send(builder.create(users).end({ pretty: true}));
        else
            res.send(users);
    },
    getUser : (req, res) => {
        const user = users.find(user => user.id === req.params.id);
            if(user)
                res.send(user);
            else
                throw new NotFound();
    },
    postUsers : (req, res) => res.send(req.body)
};