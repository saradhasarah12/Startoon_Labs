const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/Admin_Controller');

router.get('/users', getAllUsers);

module.exports = router;
