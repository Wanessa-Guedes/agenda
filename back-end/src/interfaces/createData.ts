import { Contact, Contact_Info, User } from "@prisma/client";

export type CreateDataUser = Omit<User, "id" | "creat_at">;
export type CheckEmailData = Omit<
  User,
  "id" | "creat_at" | "user_name" | "passwordHash"
>;
export type CreateDataUserSignIn = Omit<User, "id" | "creat_at" | "user_name">;
export type CreateInfoContact = Omit<Contact_Info, "id" | "creat_at">;
export type CreateInfos = Omit<Contact_Info, "id" | "creat_at" | "contactId">;
export type CreateContact = Omit<Contact, "id" | "creat_at">;
