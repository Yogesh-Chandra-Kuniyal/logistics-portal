import Order from "../models/Order.js";
import Wallet from "../models/Wallet.js";
import Client from "../models/Client.js";

export const getDashboard = async (req, res) => {
    try {
        // Summary
        const totalOrders = await Order.countDocuments();

        const delivered = await Order.countDocuments({
            status: "Delivered",
        });

        const transit = await Order.countDocuments({
            status: "In Transit",
        });

        const pending = await Order.countDocuments({
            status: "Pending Pickup",
        });

        const rto = await Order.countDocuments({
            status: "RTO",
        });

        const totalClients = await Client.countDocuments();

        // Revenue
        const revenue = await Order.aggregate([
            {
                $group: {
                    _id: null,
                    totalRevenue: {
                        $sum: "$shippingCharge",
                    },
                },
            },
        ]);

        // Wallet
        const wallet = await Wallet.aggregate([
            {
                $group: {
                    _id: null,
                    balance: {
                        $sum: "$balance",
                    },
                },
            },
        ]);

        // Recent Orders
        const recentOrders = await Order.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .select(
                "awbNumber customerName status shippingCharge createdAt"
            );

        // Temporary chart data
        const monthlyRevenue = [
            { month: "Jan", revenue: 12000 },
            { month: "Feb", revenue: 18000 },
            { month: "Mar", revenue: 14000 },
            { month: "Apr", revenue: 22000 },
            { month: "May", revenue: 28000 },
            { month: "Jun", revenue: 26000 },
        ];

        const shipmentStatus = [
            {
                name: "Delivered",
                value: delivered,
            },
            {
                name: "In Transit",
                value: transit,
            },
            {
                name: "Pending Pickup",
                value: pending,
            },
            {
                name: "RTO",
                value: rto,
            },
        ];

        res.json({
            success: true,

            dashboard: {
                totalOrders,
                delivered,
                transit,
                pending,
                rto,
                totalClients,

                revenue: revenue[0]?.totalRevenue || 0,

                walletBalance: wallet[0]?.balance || 0,

                monthlyRevenue,

                shipmentStatus,

                recentOrders,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};