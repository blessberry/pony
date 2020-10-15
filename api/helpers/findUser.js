const users = require('../models/users.json');

exports.byCredentials = ({username, password}) => 
    users.find(user => user.username === username && user.password === password);