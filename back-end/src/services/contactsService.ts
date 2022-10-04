import {
  CreateContact,
  CreateInfoContact,
  CreateInfos,
} from "../interfaces/createData.js";
import { contactsRepository } from "../repositories/contactsRepository.js";

async function getContacts(id: number) {
  const contacts = await contactsRepository.getAllContacts(id);

  return contacts;
}

async function insertContact(
  contactData: CreateContact,
  contactInfoData: CreateInfos
) {
  await contactsRepository.insertContact(contactData, contactInfoData);
}

export const contactsService = {
  getContacts,
  insertContact,
};
