import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
        },

        ownerName: String,

        email: {
            type: String,
            unique: true,
        },

        phone: String,

        address: String,

        walletBalance: {
            type: Number,
            default: 0,
        },

        kycVerified: {
            type: Boolean,
            default: false,
        },

        status: {
            type: String,
            enum: ["Pending", "Approved"],
            default: "Pending",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Client", clientSchema);