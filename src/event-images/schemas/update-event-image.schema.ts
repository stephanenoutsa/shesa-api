import * as Joi from 'joi';

export const updateEventImageSchema = Joi.object({
  eventId: Joi.number().required(),

  caption: Joi.string(),

  url: Joi.binary().encoding('base64').required(),
});
