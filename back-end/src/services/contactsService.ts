import {
  CreateContact,
  CreateInfoContact,
  CreateInfos,
  DeleteContact,
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

async function updateContact(
  contactData: CreateContact,
  contactUpdate: CreateInfos
) {
  await contactsRepository.updateContact(contactData, contactUpdate);
}

async function deleteContact(contactData: DeleteContact) {
  await contactsRepository.deleteContact(contactData);
}

export const contactsService = {
  getContacts,
  insertContact,
  updateContact,
  deleteContact,
};
