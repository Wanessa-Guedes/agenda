import { prisma } from "../config/database.js";
import { CheckEmailData, CreteDataUser } from "../interfaces/createData.js";

async function createUser(userData: CreteDataUser) {
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
