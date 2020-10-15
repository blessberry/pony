const express = require('express');
const users = require('../models/users.json');
const builder = require('xmlbuilder');
const NotFound = require('../helpers/errors');
const requireAuth = require('../helpers/requireAuth');

const router = express.Router();

router.use(requireAuth);

const getUsers = (req, res) => { 
    if (req.accepts('application/xml')) 
        res.type('application/xml').send(builder.create(users).end({ pretty: true}));
    else
        res.send(users);
};
const getUser = (req, res) => {
    const user = users.find(user => user.id===req.params.id);
    if(user)
        res.send(user);
    else
        throw new NotFound();
};
const postUsers = (req, res) =>
    res.send(req.body);

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', express.json(), postUsers);
//router.patch('/:id', patchUsers);
//router.delete('/:id', deleteUser);
//router.delete('/', deleteUsers);

module.exports = router;