const express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.post('/login', userController.logIn);
router.post('/signup', userController.signUp);
router.get('/', userController.allUser);

module.exports = router;
