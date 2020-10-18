const express = require('express');
const middlewares = require('../middlewares/users');
const controllers = require('../controllers/users');

const router = express.Router();

middlewares(router);

router.get('/', controllers.getUsers);
router.get('/:id', controllers.getUser);
router.post('/', express.json(), controllers.postUsers);

//router.patch('/:id', patchUsers);
//router.delete('/:id', deleteUser);
//router.delete('/', deleteUsers);

module.exports = router;