import { Request, Response } from "express";
import {
  CreateContact,
  CreateInfos,
  DeleteContact,
} from "../interfaces/createData.js";
import { contactsService } from "../services/contactsService.js";

export async function getUserContacts(req: Request, res: Response) {
  const { userInfo } = res.locals;
  const contacts = await contactsService.getContacts(userInfo.userId);

  res.send(contacts).status(200);
}

export async function insertUserContact(req: Request, res: Response) {
  const { userInfo } = res.locals;
  const contactData: CreateContact = {
    name: req.body.name,
    userId: userInfo.userId,
  };
  const contactInfoData: CreateInfos = {
    whatsapp: req.body.whatsapp,
    email: req.body.email,
    tel: req.body.tel,
  };

  await contactsService.insertContact(contactData, contactInfoData);

  res.sendStatus(201);
}

export async function updateContact(req: Request, res: Response) {
  const { userInfo } = res.locals;

  const contactData: CreateContact = {
    name: req.body.name,
    userId: userInfo.userId,
  };
  const contactInfoData: CreateInfos = {
    whatsapp: req.body.whatsapp,
    email: req.body.email,
    tel: req.body.tel,
  };

  await contactsService.updateContact(contactData, contactInfoData);

  res.sendStatus(200);
}

export async function deleteContact(req: Request, res: Response) {
  const { userInfo } = res.locals;
  const contactId = +req.params.id;

  const contactData: DeleteContact = {
    id: contactId,
    userId: userInfo.userId,
  };

  await contactsService.deleteContact(contactData);

  res.sendStatus(200);
}
