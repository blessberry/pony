const express = require('express');
const users = require('../models/users.json');
const builder = require('xmlbuilder');

const router = express.Router();

const getUsers = (req, res) => { 
    if (req.accepts('application/xml')) 
        res.type('application/xml').send(builder.create(users).end({ pretty: true}));
    else
        res.send(users);
};
const getUser = (req, res) => 
    res.send(users.find(user => user.id===req.params.id));

router.get('/', getUsers);
router.get('/:id', getUser);
//router.post('/', postUsers);
//router.patch('/:id', patchUsers);
//router.delete('/:id', deleteUsers)

module.exports = router;