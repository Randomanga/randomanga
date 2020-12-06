const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const User = require('../models/user');

const strategy = new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_TOKEN_SECRET,
    },
    (jwt_payload, done) => {
        User.findById(jwt_payload.id, (err, user) => {
            console.log('check')
            if (err) return done(err, false); //something went wrong
            if (user) return done(null, user);
            //found
            else return done(null, false); //user doesnt exist
        });
    }
);

module.exports = strategy;
