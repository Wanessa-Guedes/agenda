import { Router } from "express";
import {
  getUserContacts,
  insertUserContact,
} from "../controllers/contactsControllers.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { validateToken } from "../middlewares/tokenValidator.js";
import { contactSchema } from "../schemas/contactsSchema.js";

const contactRouter = Router();

contactRouter.get("/contacts", validateToken, getUserContacts);
contactRouter.post(
  "/contacts",
  validateToken,
  schemaValidator(contactSchema.insertContactSchema),
  insertUserContact
);

export default contactRouter;
