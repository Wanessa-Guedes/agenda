import { Router } from "express";
import {
  deleteContact,
  getUserContacts,
  insertUserContact,
  updateContact,
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
contactRouter.patch(
  "/contacts/:id",
  validateToken,
  schemaValidator(contactSchema.updateContactSchema),
  updateContact
);
contactRouter.delete("/contacts/:id", validateToken, deleteContact);

export default contactRouter;
