import mongoose from "mongoose";

const courierSchema = new mongoose.Schema(
    {
        courierName: String,

        apiAvailable: {
            type: Boolean,
            default: false,
        },

        trackingUrl: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Courier", courierSchema);