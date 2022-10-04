import { Request, Response } from "express";
import { CreateContact, CreateInfos } from "../interfaces/createData.js";
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
