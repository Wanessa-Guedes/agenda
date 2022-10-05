import { prisma } from "../config/database.js";
import {
  CreateContact,
  CreateInfoContact,
  CreateInfos,
  ContactById,
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

async function updateContact(
  contactData: ContactById,
  contactUpdate: CreateInfos
) {
  const contactId = await prisma.contact.findFirst({
    where: {
      id: contactData.id,
      userId: contactData.userId,
    },
  });

  const contactInfoId = await prisma.contact_Info.findFirst({
    where: {
      contactId: contactId.id,
    },
  });

  await prisma.contact_Info.update({
    where: {
      id: contactInfoId.id,
    },
    data: {
      whatsapp: contactUpdate.whatsapp,
      email: contactUpdate.email,
      tel: contactUpdate.tel,
    },
  });
}

async function deleteContact(contactData: ContactById) {
  const contactId = await prisma.contact.findFirst({
    where: {
      id: contactData.id,
      userId: contactData.userId,
    },
  });

  const contactInfoId = await prisma.contact_Info.findFirst({
    where: {
      contactId: contactId.id,
    },
  });

  await prisma.contact_Info.delete({
    where: {
      id: contactInfoId.id,
    },
  });

  await prisma.contact.delete({
    where: {
      id: contactData.id,
    },
  });
}

export const contactsRepository = {
  getAllContacts,
  insertContact,
  updateContact,
  deleteContact,
};
