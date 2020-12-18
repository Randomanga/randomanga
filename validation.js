const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schema = Joi.object().keys({
        username: Joi.string()
            .min(3)
            .max(50)
            .required()
            .error(() => {
                return {
                    message: 'Username has to be at least 3 characters long',
                };
            }),
        password: Joi.string()
            .min(6)
            .required()
            .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
            .error(() => {
                return {
                    message:
                        'Password must be at least 8 characters long, have one capital letter and one number',
                };
            }),
        email: Joi.string()
            .required()
            .email()
            .error(() => {
                return {
                    message: 'Email is an incorrect format',
                };
            }),
    });
    return Joi.validate(data, schema);
};
const loginValidation = (data) => {
    const schema = Joi.object().keys({
        username: Joi.string()
            .required()
            .error(() => {
                return {
                    message: "Username can't be empty",
                };
            }),
        password: Joi.string()
            .required()
            .error(() => {
                return {
                    message: "Password can't be empty",
                };
            }),
    });
    return Joi.validate(data, schema);
};
module.exports = {
    registerValidation,
    loginValidation,
};
