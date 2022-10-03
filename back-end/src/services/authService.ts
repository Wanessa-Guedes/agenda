import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  CreateDataUser,
  CreateDataUserSignIn,
} from "../interfaces/createData.js";
import { authRepository } from "../repositories/authRepository.js";

dotenv.config;
const hash = 10; //TODO: PASSAR PARA O ENV

async function signUp(userData: CreateDataUser) {
  userData.email = userData.email.toLowerCase();
  const password = userData.passwordHash;
  const isEmailRegistered = await authRepository.checkEmail(userData);
  if (isEmailRegistered) {
    throw {
      type: "conflict",
      message: "Email already registered",
    };
  }

  userData.passwordHash = bcrypt.hashSync(password, hash);

  await authRepository.createUser(userData);
}

async function signIn(userData: CreateDataUserSignIn) {
  const user = await authRepository.checkEmail(userData);
  if (!user) {
    throw {
      type: "not_found",
      message: "User not registered!",
    };
  }

  if (!bcrypt.compareSync(userData.passwordHash, user.passwordHash)) {
    throw {
      type: "unauthorized",
      message: "Incorrect password",
    };
  }

  const secret = process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ id: user.id, emai: user.email }, secret);

  return { token, user };
}

export const authService = {
  signUp,
  signIn,
};
