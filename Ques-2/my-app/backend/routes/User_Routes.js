const express = require('express');
const router = express.Router();
const { UserLogin, UserSignUp } = require('../controllers/User_Controller');

router.post('/login', UserLogin);

router.post('/signup', UserSignUp);

module.exports = router;
