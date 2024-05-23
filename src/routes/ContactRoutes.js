import {
    ContactDestroy,
    ContactIndex,
    ContactShow,
    ContactStore,
    ContactUpdate,
} from "../controllers/ContactController.js";

import express from "express";

const ContactRoutes = express.Router();

ContactRoutes.get("/", ContactIndex);
ContactRoutes.get("/:id", ContactShow);
ContactRoutes.post("/", ContactStore);
ContactRoutes.put("/:id", ContactUpdate);
ContactRoutes.patch("/:id", ContactUpdate);
ContactRoutes.delete("/:id", ContactDestroy);

export default ContactRoutes;
