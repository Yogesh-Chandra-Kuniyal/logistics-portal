import Order from "../models/Order.js";
import Tracking from "../models/Tracking.js";

import generateAWB from "../utils/generateAWB.js";
import generateOrderId from "../utils/generateOrderId.js";

export const createOrderService = async (orderData) => {

    const order = await Order.create({
        ...orderData,
        awbNumber: generateAWB(),
        orderId: generateOrderId(),
    });

    await Tracking.create({
        order: order._id,
        currentStatus: "Pending Pickup",
        currentLocation: "Warehouse",
        timeline: [
            {
                status: "Order Created",
                location: "Warehouse",
                remark: "Shipment Created Successfully",
                time: new Date(),
            },
        ],
    });

    return order;
};

export const getOrdersService = async (filter = {}) => {
    return await Order.find(filter)
        .populate("client")
        .populate("courier")
        .populate("warehouse")
        .sort({ createdAt: -1 });
};

export const getOrderByIdService = async (id) => {
    return await Order.findById(id)
        .populate("client")
        .populate("courier")
        .populate("warehouse");
};

export const updateOrderService = async (id, data) => {
    return await Order.findByIdAndUpdate(id, data, {
        new: true,
    });
};

export const deleteOrderService = async (id) => {
    return await Order.findByIdAndDelete(id);
};