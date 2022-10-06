import { PrismaClient } from "@prisma/client";
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
    orderBy: {
      name: "asc",
    },
  });

  return contacts;
}

async function insertContact(
  contactData: CreateContact,
  contactInfoData: CreateInfos
) {
  await prisma.$transaction(async (othePrisma: PrismaClient) => {
    const contactId = await prisma.contact.create({
      data: contactData,
    });

    if (!contactId) {
      throw {
        type: "not_found",
        message: "No id found",
      };
    }

    const dataInfo: CreateInfoContact = {
      whatsapp: contactInfoData.whatsapp,
      email: contactInfoData.email,
      tel: contactInfoData.tel,
      contactId: contactId.id,
    };

    const contactInfos = await prisma.contact_Info.create({
      data: dataInfo,
    });

    if (!contactInfos) {
      throw {
        type: "not_found",
        message: "Contact not create",
      };
    }
  });
}

async function updateContact(
  contactData: ContactById,
  contactUpdate: CreateInfos
) {
  await prisma.$transaction(async (othePrisma: PrismaClient) => {
    const contactId = await prisma.contact.findFirst({
      where: {
        id: contactData.id,
        userId: contactData.userId,
      },
    });

    if (!contactId) {
      throw {
        type: "not_found",
        message: "contact infos not found",
      };
    }

    const contactInfoId = await prisma.contact_Info.findFirst({
      where: {
        contactId: contactId.id,
      },
    });

    if (!contactInfoId) {
      throw {
        type: "not_found",
        message: "contact infos not found",
      };
    }

    const updateInfos = await prisma.contact_Info.update({
      where: {
        id: contactInfoId.id,
      },
      data: {
        whatsapp: contactUpdate.whatsapp,
        email: contactUpdate.email,
        tel: contactUpdate.tel,
      },
    });

    if (!updateInfos) {
      throw {
        type: "not_found",
        message: "error to update infos",
      };
    }
  });
}

async function deleteContact(contactData: ContactById) {
  await prisma.$transaction(async (othePrisma: PrismaClient) => {
    const contactId = await prisma.contact.findFirst({
      where: {
        id: contactData.id,
        userId: contactData.userId,
      },
    });

    if (!contactId) {
      throw {
        type: "not_found",
        message: "contact infos not found",
      };
    }

    const contactInfoId = await prisma.contact_Info.findFirst({
      where: {
        contactId: contactId.id,
      },
    });

    if (!contactInfoId) {
      throw {
        type: "not_found",
        message: "contact infos not found",
      };
    }

    const deleteContactInfo = await prisma.contact_Info.delete({
      where: {
        id: contactInfoId.id,
      },
    });

    if (!deleteContactInfo) {
      throw {
        type: "not_found",
        message: "error to delete contact infos",
      };
    }

    const deleteContact = await prisma.contact.delete({
      where: {
        id: contactData.id,
      },
    });

    if (!deleteContact) {
      throw {
        type: "not_found",
        message: "error to delete contact",
      };
    }
  });
}

export const contactsRepository = {
  getAllContacts,
  insertContact,
  updateContact,
  deleteContact,
};
