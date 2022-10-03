import { User } from "@prisma/client";

export type CreateDataUser = Omit<User, "id" | "creat_at">;
export type CheckEmailData = Omit<
  User,
  "id" | "creat_at" | "user_name" | "passwordHash"
>;
export type CreateDataUserSignIn = Omit<User, "id" | "creat_at" | "user_name">;
