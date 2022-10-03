import { NextFunction, Request, Response } from "express";

// eslint-disable-next-line import/prefer-default-export, consistent-return
export function errorHanddlingMiddleware(
  err,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  next: NextFunction
) {
  if (err.type) {
    // eslint-disable-next-line no-use-before-define
    return res.status(errorTypeToStatusCode(err.type)).send(err.message);
  }

  if (err.details) {
    return res.status(422).send(`${err.message}`);
  }

  res.status(500).send(`${err.message}`);
}

function errorTypeToStatusCode(errorType: string) {
  if (errorType === "conflict") return 409;
  if (errorType === "not_found") return 404;
  if (errorType === "unauthorized") return 401;

  return 400;
}