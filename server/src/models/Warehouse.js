import mongoose from "mongoose";

const warehouseSchema = new mongoose.Schema(
    {
        warehouseName: {
            type: String,
            required: true,
        },

        code: {
            type: String,
            unique: true,
            required: true,
        },

        city: {
            type: String,
            required: true,
        },

        state: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        managerName: String,

        managerPhone: String,

        capacity: {
            type: Number,
            default: 1000,
        },

        currentLoad: {
            type: Number,
            default: 0,
        },

        active: {
            type: Boolean,
            default: true,
        }

    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Warehouse", warehouseSchema);