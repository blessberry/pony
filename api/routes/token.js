require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const findUser = require('../helpers/findUser');

const SIGNATURE = process.env.SIGNATURE;
const tokensRouter = express.Router();

const createToken = (user) =>
    jwt.sign({ id: user.id }, SIGNATURE, { expiresIn: '1d' });

const createTokenRoute = (req, res) => {
    const credentials = req.body;
    const user = findUser.byCredentials(credentials);
    if (user) {
        const token = createToken(user);
        res.status(201);
        res.send(token);
    } else {
        res.sendStatus(422);
 }
};
 
tokensRouter.post('/', express.json(), createTokenRoute);

module.exports = tokensRouter;
