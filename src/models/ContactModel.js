import DB from "../database/DB.js";
import { DataTypes } from "sequelize";

const ContactModel = DB.define(
    "contacts",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default ContactModel;
