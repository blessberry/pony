const express = require('express');
const emails = require('../models/emails.json');

const router = express.Router();

const getEmails = (req, res) => 
    res.send(emails);
const getEmail = (req, res) =>
    res.send(emails.find(email => email.id===req.params.id));

router.get('/', getEmails);
router.get('/:id', getEmail);
//router.post('/', postEmails);
//router.patch('/', patchEmails);
//router.patch('/:id', patchEmail);
//router.delete('/', deleteUsers);
//router.delete('/:id', deleteUser);

module.exports = router;