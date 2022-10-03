import { User } from "@prisma/client";


export type CreteDataUser = Omit<User, "id" | "creat_at">;
export type CheckEmailData = Omit<User, "id" | "creat_at" | "user_name" | "passwordHash">;