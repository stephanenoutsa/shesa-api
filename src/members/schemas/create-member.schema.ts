import * as Joi from "joi";

const currentYear = new Date().getFullYear();

export const createMemberSchema = Joi.object({
  firstname: Joi.string()
    .max(30),
  
  lastname: Joi.string()
    .max(30)
    .required(),

  nickname: Joi.string()
    .max(30),

  avatar: Joi.string(),

  dob: Joi.string()
    .min(10)
    .max(10),

  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),

  phone: Joi.string()
    .alphanum()
    .min(9)
    .max(14)
    .required(),

  password: Joi.string()
    .min(8)
    .required(),

  batch: Joi.number()
    .integer()
    .min(1950)
    .max(currentYear - 7)
    .required(),

  field: Joi.string()
});
