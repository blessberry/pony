const path = require('path');
const express = require('express');
const multer = require('multer');
const emails = require('../models/emails.json');
const NotFound = require('../helpers/errors');
const enforce = require('../helpers/enforce');
const requireAuth = require('../helpers/requireAuth');

const router = express.Router();
const upload = multer({ dest: path.join(__dirname, '../uploads')});

router.use(requireAuth);

const getEmails = (req, res) => 
    res.send(emails);
const getEmail = (req, res) => {
    const email = emails.find(email => email.id===req.params.id);
    if (email)
        res.send(email);
    else
        throw new NotFound();
}
const postEmails = (req, res) => 
    res.send(req.body);

const updateEmailPolicy = (user, email) =>
    user.id === email.from;

const deleteEmailPolicy = (user, email) =>
    user.id === email.to;

const updateEmailRoute = async (req, res) => {
    const email = emails.find(email => email.id === req.params.id);
    req.authorize(email);
    Object.assign(email, req.body);
    res.status(200);
    res.send(email);
};

const deleteEmailRoute = (req, res) => {
    const email = emails.find(email => email.id === req.params.id);
    req.authorize(email);
    const index = emails.findIndex(email => email.id === req.params.id);
    emails.splice(index, 1);
    res.sendStatus(204);
};

router.get('/', getEmails);
router.get('/:id', getEmail);
router.post('/', express.json(), upload.array('attachements'), postEmails);
//router.patch('/', patchEmails);
router.patch('/:id', enforce(updateEmailPolicy), express.json(), updateEmailRoute);
//router.delete('/', deleteUsers);
router.delete('/:id', enforce(deleteEmailPolicy), deleteEmailRoute);

module.exports = router;