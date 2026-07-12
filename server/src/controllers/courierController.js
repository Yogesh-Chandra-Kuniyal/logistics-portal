import Courier from "../models/Courier.js";

export const getCouriers = async (req, res) => {
    try {

        const couriers = await Courier.find().sort({
            createdAt: -1,
        });

        res.json({
            success: true,
            data: couriers,
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message,
        });

    }
};

export const createCourier = async (req, res) => {

    try {

        const courier = await Courier.create(req.body);

        res.status(201).json({
            success: true,
            data: courier,
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message,
        });

    }

};

export const updateCourier = async (req, res) => {

    try {

        const courier = await Courier.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            success: true,
            data: courier,
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message,
        });

    }

};

export const deleteCourier = async (req, res) => {

    try {

        await Courier.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Courier Deleted",
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message,
        });

    }

};