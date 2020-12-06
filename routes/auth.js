const express = require('express');
const router = express.Router();
const passport = require('passport');
const { sign_up, login } = require('../controllers/authController');

router.post('/sign-up', sign_up);
router.post('/login', login);
router.get(
    '/secret',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        res.send('Super secret route unlocked');
    }
);

module.exports = router;
