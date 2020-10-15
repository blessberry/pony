const path = require('path');
const express = require('express');
const multer = require('multer');
const emails = require('../models/emails.json');
const NotFound = require('../helpers/errors');

const router = express.Router();
const upload = multer({ dest: path.join(__dirname, '../uploads')});

const getEmails = (req, res) => 
    res.send(emails);
const getEmail = (req, res) => {
    const email = emails.find(email => email.id===req.params.id);
    if (email)
        res.send(email);
    else
        throw new NotFound();
}
const postEmails = (req, res) => {
    res.send(req.body);
};
router.get('/', getEmails);
router.get('/:id', getEmail);
router.post('/', express.json(), upload.array('attachements'), postEmails);
//router.patch('/', patchEmails);
//router.patch('/:id', patchEmail);
//router.delete('/', deleteUsers);
//router.delete('/:id', deleteUser);

module.exports = router;