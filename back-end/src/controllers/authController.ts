import { Request, Response } from "express";
import {
  CreateDataUser,
  CreateDataUserSignIn,
} from "../interfaces/createData.js";
import { authService } from "../services/authService";

export async function signUp(req: Request, res: Response) {
  const userInfo: CreateDataUser = {
    email: req.body.email,
    user_name: req.body.userName,
    passwordHash: req.body.password,
  };

  await authService.signUp(userInfo);
  res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
  const userInfo: CreateDataUserSignIn = {
    email: req.body.email,
    passwordHash: req.body.password,
  };

  const infosSignIn = await authService.signIn(userInfo);

  res.status(200).send({ token: infosSignIn.token, id: infosSignIn.user.id });
}
