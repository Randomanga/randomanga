const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bycrypt = require('bcrypt');
const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            minlength: 3,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

UserSchema.pre(
    'save',
    function (next) {
        const user = this;
        if (!user.isModified('password')) return next();
        bycrypt.hash(user.password, 10).then((hashedPassword) => {
            user.password = hashedPassword;
            next();
        });
    },
    (err) => next(err)
);
UserSchema.methods.isValidPassword = function (candidatePassword, next) {
    bycrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return next(err);
        next(null, isMatch);
    });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
