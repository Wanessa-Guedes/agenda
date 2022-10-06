import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export function schemaValidator(schema: Joi.ObjectSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    await schema.validateAsync(req.body, { abortEarly: false });

    next();
  };
}
