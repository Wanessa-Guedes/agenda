import { Router } from "express";
import authRouter from "./authRouter.js";
import contactRouter from "./contactsRouter.js";

const router = Router();

router.use(authRouter);
router.use(contactRouter);

export default router;
