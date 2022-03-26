import * as Joi from "joi";

export const updateCvSchema = Joi.object({
  memberId: Joi.number()
    .required(),

  title: Joi.string()
    .max(30),

  url: Joi.binary()
    .encoding('base64')
    .required()
});
