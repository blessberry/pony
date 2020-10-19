const express = require('express');
const NotImplemented = require('../helpers/errors/notImplemented')

const router = express.Router();

router.route('/')
    .all((req, res, next) => {
        throw new NotImplemented();
    })

module.exports = router;