const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { registerValidation, loginValidation } = require('../validation');
const bycrypt = require('bcrypt');


const sign_up = async (req, res, next) => {
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const userExists = await User.findOne({ username: req.body.username });
    if (userExists)
        return res.status(400).send('Username has already been taken');

    const hashedPassword = await bycrypt.hash(req.body.password, 10);
    const user = new User({
        username: req.body.username,
        password: hashedPassword,
    });
    user.save((err, user_res) => {
        if (err) res.status(400).send('Something went wrong');
        const token = jwt.sign(
            {
                id: user_res.id,
                username: user_res.username,
            },
            process.env.JWT_TOKEN_SECRET
        );
        res.status(200).send(token);
    });
};
const login = async (req, res, next) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send('Username or password is wrong. ');

    const validPassword = bycrypt.compareSync(req.body.password, user.password);
    if (!validPassword)
        return res.status(400).send('Username or password is wrong');

    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
        },
        process.env.JWT_TOKEN_SECRET
    );
    
    return res.status(200).send(token);
};

module.exports = {
    sign_up,
    login,
};
