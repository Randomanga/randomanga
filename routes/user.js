const express = require('express');
const router = express.Router();
const passport = require('passport');
const { get_avatar, upload_avatar } = require('../controllers/userController');

router.get('/users/:username/avatar', get_avatar);
router.put(
    '/users/:username/avatar',
    passport.authenticate('jwt', { session: false }),
    upload_avatar
);
module.exports = router;
