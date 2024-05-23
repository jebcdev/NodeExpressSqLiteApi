import ContactModel from "../models/ContactModel.js";

export const ContactIndex = async (req, res) => {
    try {
        const Contacts = await ContactModel.findAll({
            order: [["id", "DESC"]],
        });

        res.status(200).json(Contacts);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const ContactShow = async (req, res) => {
    try {
        const contactId = req.params.id;

        if (isNaN(contactId)) {
            return res.status(400).json({
                message: "Invalid ID. Please provide a valid number.",
            });
        }

        const Contact = await ContactModel.findOne({
            where: {
                id: contactId,
            },
        });

        if (!Contact) {
            return res.status(404).json({
                message: "No contact found with the provided ID.",
            });
        }

        res.status(200).json(Contact);
    } catch (error) {
        res.status(500).json({
            message:
                "An error occurred while retrieving the contact.",
            error,
        });
    }
};

export const ContactStore = async (req, res) => {
    try {
        const Contact = await ContactModel.create(req.body);

        res.status(200).json(Contact);
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while creating the contact.",
            error,
        });
    }
};

export const ContactUpdate = async (req, res) => {
    try {
        const contactId = req.params.id;

        if (isNaN(contactId)) {
            return res.status(400).json({
                message: "Invalid ID. Please provide a valid number.",
            });
        }

        const Contact = await ContactModel.findOne({
            where: {
                id: contactId,
            },
        });

        if (!Contact) {
            return res.status(404).json({
                message: "No contact found with the provided ID.",
            });
        }
        Contact.update(req.body);
        res.status(200).json("Contact updated successfully");
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while updating the contact.",
            error,
        });
    }
};

export const ContactDestroy = async (req, res) => {
    try {
        const contactId = req.params.id;

        if (isNaN(contactId)) {
            return res.status(400).json({
                message: "Invalid ID. Please provide a valid number.",
            });
        }

        const Contact = await ContactModel.findOne({
            where: {
                id: contactId,
            },
        });

        if (!Contact) {
            return res.status(404).json({
                message: "No contact found with the provided ID.",
            });
        }
        Contact.destroy(contactId);
        res.status(200).json("Contact deleted successfully");
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while deleting the contact.",
            error,
        });
    }
};
