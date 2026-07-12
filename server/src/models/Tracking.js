import mongoose from "mongoose";

const trackingSchema = new mongoose.Schema(
    {
        order: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
            required: true,
        },

        currentStatus: {
            type: String,
            default: "Pending Pickup",
        },

        currentLocation: {
            type: String,
            default: "Warehouse",
        },

        timeline: [
            {
                status: String,
                location: String,
                remark: String,
                time: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Tracking", trackingSchema);