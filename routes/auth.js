const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const authController = require('../controllers/authController');
const { sign_up } = require('../controllers/authController');

router.post('/sign-up', sign_up);
router.get('/secret', authenticateToken, (req, res) => {
    res.send('Super secret route unlocked');
});

module.exports = router;
