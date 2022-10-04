import Joi from "joi";

const insertContactSchema = Joi.object({
  name: Joi.string().required(),
  whatsapp: Joi.string().required(),
  email: Joi.string().required(),
  tel: Joi.string().required(),
});

export const contactSchema = {
  insertContactSchema,
};
