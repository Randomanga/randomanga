import Joi from 'joi';

export class SubscribersValidation {
  public static store() {
    return Joi.object({
      name: Joi.string().required(),
      subscribedToChannel: Joi.string().required(),
    });
  }

  public static update() {
    return Joi.object({
      name: Joi.string().required(),
      subscribedToChannel: Joi.string(),
    });
  }
}
