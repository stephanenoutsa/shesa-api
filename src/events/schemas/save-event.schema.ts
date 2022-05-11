import * as Joi from 'joi';

export const saveEventSchema = Joi.object({
  title: Joi.string().max(30).required(),

  date: Joi.string().required(),

  thumbnail: Joi.string(),

  description: Joi.string(),
});
