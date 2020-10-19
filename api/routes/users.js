const express = require('express');
const middlewares = require('../middlewares/users');
const controllers = require('../controllers/users');

const router = express.Router();

middlewares(router);

router.route('/')
    .get(controllers.getUsers)
    .post(express.json(), controllers.postUsers)
    //.patch(controllers.patchUsers)
    //.delete(controllers.deleteUsers)

router.route('/:id')
    .get(controllers.getUser)
    //.post(controllers.postUser)
    //.patch(controllers.patchUser)
    //.delete(controllers.deleteUser)

module.exports = router;