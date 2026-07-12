import api from "./api";

export const getCouriers = async () => {
    const res = await api.get("/couriers");
    return res.data;
};

export const createCourier = async (data) => {
    const res = await api.post("/couriers", data);
    return res.data;
};

export const updateCourier = async (id, data) => {
    const res = await api.put(`/couriers/${id}`, data);
    return res.data;
};

export const deleteCourier = async (id) => {
    const res = await api.delete(`/couriers/${id}`);
    return res.data;
};