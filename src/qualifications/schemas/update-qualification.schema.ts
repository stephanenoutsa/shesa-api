import * as Joi from 'joi';

export const updateQualificationSchema = Joi.object({
  memberId: Joi.number().required(),

  description: Joi.string().required(),

  url: Joi.binary().encoding('base64').required(),
});
