const express = require('express');
const router = express.Router();
const { sign_up, sign_in } = require('../controllers/authController');

router.post('/sign-up', sign_up);
router.post('/sign-in', sign_in);


module.exports = router;
