import * as Joi from "joi";

export const updateInternshipSchema = Joi.object({
  memberId: Joi.number()
    .required(),

  companyName: Joi.string()
    .max(30)
    .required(),

  companyDesc: Joi.string(),

  startDate: Joi.date()
    .required(),

  endDate: Joi.date()
});
