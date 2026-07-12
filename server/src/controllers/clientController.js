import {
    createClientService,
    getClientsService,
    getClientByIdService,
    updateClientService,
    deleteClientService,
} from "../services/clientService.js";

export const createClient = async (req, res) => {
    try {

        const client = await createClientService(req.body);

        res.status(201).json({
            success: true,
            message: "Client Created Successfully",
            data: client,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

export const getClients = async (req, res) => {

    try {

        const filter = {};

        if (req.query.search) {

            filter.companyName = {
                $regex: req.query.search,
                $options: "i",
            };

        }

        const clients = await getClientsService(filter);

        res.json({
            success: true,
            count: clients.length,
            data: clients,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

export const getClient = async (req, res) => {

    try {

        const client = await getClientByIdService(req.params.id);

        if (!client) {

            return res.status(404).json({
                success: false,
                message: "Client Not Found",
            });

        }

        res.json({
            success: true,
            data: client,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

export const updateClient = async (req, res) => {

    try {

        const client = await updateClientService(
            req.params.id,
            req.body
        );

        res.json({
            success: true,
            message: "Client Updated",
            data: client,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

export const deleteClient = async (req, res) => {

    try {

        await deleteClientService(req.params.id);

        res.json({
            success: true,
            message: "Client Deleted",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};