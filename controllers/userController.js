const User = require('../models/user');

const get_avatar = (req, res, next) => {
    if (!req.params.username) return res.status(404);
    User.findOne({ username: req.params.username }, (err, user) => {
        if (err) res.status(500).send('Something went wrong, try again later');
        if (!user) res.status(400).send("User doesn't exist");
        if (!user.avatar) res.status(204).send("User doesn't have an avatar");

        res.status(200).json({
            avatar: user.avatar,
        });
    });
};
const upload_avatar = (req, res, next) => {
    if (!req.params.username) return res.status(404);
    User.findOneAndUpdate(
        { username: req.params.username },
        { $set: { avatar: 'avatar4.jpeg' } },
        { new: true },
        (err, result) => {
            if (err)
                res.status(500).send(
                    'An error occured while trying to update your avatar'
                );
            res.status(200).json({
                avatar: user.avatar,
            });
        }
    );
};
module.exports = {
    get_avatar,
    upload_avatar,
};
