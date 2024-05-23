import express from "express";
import cors from "cors";
import "dotenv/config";
import DB from "./database/DB.js";
import {
    SuccessResponse,
    ErrorResponse,
} from "./responses/DefaultResponses.js";

import ContactRoutes from "./routes/ContactRoutes.js";
const APP_PORT = process.env.APP_PORT || 4000;
const app = express();

app.use(cors()).use(express.json());

app.get("/", (req, res, next) => {
    SuccessResponse(req, res, "Welcome to my API", "Enjoy It!");
});

app.use("/api/v1/contacts", ContactRoutes);

try {
    DB.sync().then(() => console.log("Database Ready"));
    DB.authenticate();
    app.listen(APP_PORT, () => {
        console.log(
            `Connected to the DB and Server is running on http://localhost:${APP_PORT}`
        );
    });
} catch (error) {
    ErrorResponse(
        req,
        res,
        "Error Starting Server Services...",
        error
    );
}
