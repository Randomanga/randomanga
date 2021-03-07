import { celebrate, Joi } from 'celebrate';

export const registerValidator = celebrate({
  body: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

export const loginValidator = celebrate({
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
});
