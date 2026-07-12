import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        awbNumber: {
            type: String,
            unique: true,
            required: true,
        },

        orderId: {
            type: String,
            unique: true,
            required: true,
        },

        client: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Client",
            required: true,
        },

        customerName: {
            type: String,
            required: true,
        },

        customerPhone: {
            type: String,
            required: true,
        },

        pickupAddress: {
            type: String,
            required: true,
        },

        deliveryAddress: {
            type: String,
            required: true,
        },

        courier: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Courier",
        },

        warehouse: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Warehouse",
        },

        paymentMode: {
            type: String,
            enum: ["COD", "Prepaid"],
            default: "Prepaid",
        },

        codAmount: {
            type: Number,
            default: 0,
        },

        shippingCharge: {
            type: Number,
            default: 0,
        },

        weight: {
            type: Number,
            required: true,
        },

        status: {
            type: String,
            enum: [
                "Pending Pickup",
                "Manifested",
                "Picked Up",
                "In Transit",
                "Out For Delivery",
                "Delivered",
                "Cancelled",
                "RTO",
            ],
            default: "Pending Pickup",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Order", orderSchema);