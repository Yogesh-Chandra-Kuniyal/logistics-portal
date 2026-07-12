import Warehouse from "../models/Warehouse.js";

export const getWarehouses = async (req, res) => {

    try {

        const warehouses = await Warehouse.find().sort({
            createdAt: -1,
        });

        res.json({
            success: true,
            data: warehouses,
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message,
        });

    }

};

export const createWarehouse = async (req, res) => {

    try {

        const warehouse = await Warehouse.create(req.body);

        res.status(201).json({
            success: true,
            data: warehouse,
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message,
        });

    }

};

export const updateWarehouse = async (req, res) => {

    try {

        const warehouse = await Warehouse.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            success: true,
            data: warehouse,
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message,
        });

    }

};

export const deleteWarehouse = async (req, res) => {

    try {

        await Warehouse.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Warehouse Deleted",
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message,
        });

    }

};