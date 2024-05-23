import { Sequelize } from "sequelize";
import "dotenv/config";

/* const DB = new Sequelize(
    process.env.DB_DATABASE || "mern_contacts",
    process.env.DB_USERNAME || "root",
    process.env.DB_PASSWORD || "",
    {
        host: process.env.DB_HOST || "127.0.0.1",
        dialect: "mysql",
    }
); */

const DB = new Sequelize({
    dialect: "sqlite",
    host: "./src/database/database.sqlite",
    // storage: "./database.sqlite",
});

export default DB;
