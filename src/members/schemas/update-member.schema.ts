import * as Joi from 'joi';

const currentYear = new Date().getFullYear();

export const updateMemberSchema = Joi.object({
  firstname: Joi.string().max(30),

  lastname: Joi.string().max(30).required(),

  nickname: Joi.string().max(30),

  avatar: Joi.string(),

  dob: Joi.string().min(10).max(10),

  batch: Joi.number()
    .integer()
    .min(1950)
    .max(currentYear - 7)
    .required(),

  field: Joi.string(),
});
