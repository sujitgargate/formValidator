const express = require('express');
const router = express.Router();
var expressValidator = require('express-validator');

var userController = require('../controller/userdata.controller');

router.use(expressValidator());

router.post('/createUser', userController.createUser);
//router.get('/editUser', userController.);
//router.post('/deleteUser', userController.);

module.exports = router;
