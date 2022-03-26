import * as Joi from "joi";

export const createJobSchema = Joi.object({
  memberId: Joi.number()
    .required(),

  title: Joi.string()
    .max(255)
    .required(),

  companyName: Joi.string()
    .max(30)
    .required(),

  companyDesc: Joi.string(),

  startDate: Joi.date()
    .required(),

  endDate: Joi.date()
});
