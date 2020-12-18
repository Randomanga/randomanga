const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

router.get('/users/:username/avatar', (req, res, next) => {
    if (!req.params.username) return res.status(404);
    User.findOne({ username: req.params.username }, (err, user) => {
        if (err) res.status(500).send('Something went wrong, try again later');
        if (!user) res.status(400).send("User doesn't exist");
        if (!user.avatar) res.status(204).send("User doesn't have an avatar");

        res.status(200).json({
            avatar_link: user.avatar,
        });
    });
});

module.exports = router;
