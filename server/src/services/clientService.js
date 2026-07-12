import Client from "../models/Client.js";

export const createClientService = async (data) => {
    return await Client.create(data);
};

export const getClientsService = async (filter = {}) => {
    return await Client.find(filter).sort({ createdAt: -1 });
};

export const getClientByIdService = async (id) => {
    return await Client.findById(id);
};

export const updateClientService = async (id, data) => {
    return await Client.findByIdAndUpdate(id, data, {
        new: true,
    });
};

export const deleteClientService = async (id) => {
    return await Client.findByIdAndDelete(id);
};