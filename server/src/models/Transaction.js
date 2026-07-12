import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
    {
        wallet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Wallet",
        },

        amount: Number,

        type: {
            type: String,
            enum: ["Credit", "Debit"],
        },

        description: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Transaction", transactionSchema);