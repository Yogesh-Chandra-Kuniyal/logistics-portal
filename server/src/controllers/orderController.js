import {
    createOrderService,
    deleteOrderService,
    getOrderByIdService,
    getOrdersService,
    updateOrderService,
} from "../services/orderService.js";

export const createOrder = async (req, res) => {
    try {
        const order = await createOrderService(req.body);

        res.status(201).json({
            success: true,
            message: "Order Created Successfully",
            data: order,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


export const getOrders = async (req, res) => {
    try {
        const filter = {};

        if (req.query.status) {
            filter.status = req.query.status;
        }

        const orders = await getOrdersService(filter);

        res.json({
            success: true,
            count: orders.length,
            data: orders,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getOrder = async (req, res) => {
    try {
        const order = await getOrderByIdService(req.params.id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order Not Found",
            });
        }

        res.json({
            success: true,
            data: order,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateOrder = async (req, res) => {
    try {
        const order = await updateOrderService(req.params.id, req.body);

        res.json({
            success: true,
            message: "Order Updated Successfully",
            data: order,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        await deleteOrderService(req.params.id);

        res.json({
            success: true,
            message: "Order Deleted Successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};