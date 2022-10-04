import { prisma } from "../config/database.js";
import {
  CreateContact,
  CreateInfoContact,
  CreateInfos,
} from "../interfaces/createData.js";

async function getAllContacts(id: number) {
  const contacts = await prisma.contact.findMany({
    where: {
      userId: id,
    },
    include: {
      contact_info: true,
    },
  });

  return contacts;
}

async function insertContact(
  contactData: CreateContact,
  contactInfoData: CreateInfos
) {
  const contactId = await prisma.contact.create({
    data: contactData,
  });

  const dataInfo: CreateInfoContact = {
    whatsapp: contactInfoData.whatsapp,
    email: contactInfoData.email,
    tel: contactInfoData.tel,
    contactId: contactId.id,
  };

  await prisma.contact_Info.create({
    data: dataInfo,
  });
}

export const contactsRepository = {
  getAllContacts,
  insertContact,
};
