import {
  CreateContact,
  CreateInfoContact,
  CreateInfos,
  ContactById,
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
  contactData: ContactById,
  contactUpdate: CreateInfos
) {
  await contactsRepository.updateContact(contactData, contactUpdate);
}

async function deleteContact(contactData: ContactById) {
  await contactsRepository.deleteContact(contactData);
}

export const contactsService = {
  getContacts,
  insertContact,
  updateContact,
  deleteContact,
};
