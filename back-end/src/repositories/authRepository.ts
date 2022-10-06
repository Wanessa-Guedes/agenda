import { prisma } from "../config/database.js";
import { CheckEmailData, CreateDataUser } from "../interfaces/createData.js";

async function createUser(userData: CreateDataUser) {
  await prisma.user.create({ data: userData });
}

async function checkEmail(userData: CheckEmailData) {
  const isEmailRegistered = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });

  return isEmailRegistered;
}

export const authRepository = {
  createUser,
  checkEmail,
};
