const jwt = require('jsonwebtoken');

const sign_up = (req, res, next) => {
    const user = {
        id: '3131',
        username: req.body.username,
        password: req.body.password,
    };
    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_TOKEN_SECRET,
        { expiresIn: '150days' }
    );
    res.json(token);
};


module.exports= {
    sign_up
}