import { useEffect, useState } from "react";

import {
    Package,
    CheckCircle,
    Truck,
    IndianRupee,
} from "lucide-react";

import StatCard from "../components/cards/StatCard";
import RevenueChart from "../components/charts/RevenueChart";
import ShipmentChart from "../components/charts/ShipmentChart";
import RecentOrders from "../components/tables/RecentOrders";
import useAuth from "../hooks/useAuth";
import { getDashboard } from "../services/dashboardService";

const Dashboard = () => {

    const { user } = useAuth();

    const [dashboard, setDashboard] = useState(null);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            const res = await getDashboard();
            setDashboard(res.dashboard);
        } catch (err) {
            console.error(err);
        }
    };

    if (!dashboard) {
        return (
            <div className="flex items-center justify-center h-screen text-lg">
                Loading Dashboard...
            </div>
        );
    }

    const dashboardStats = [
        {
            title: "Total Orders",
            value: dashboard.totalOrders,
            growth: 12,
            icon: Package,
            color: "bg-blue-500",
        },
        {
            title: "Delivered",
            value: dashboard.delivered,
            growth: 8,
            icon: CheckCircle,
            color: "bg-green-500",
        },
        {
            title: "In Transit",
            value: dashboard.transit,
            growth: -3,
            icon: Truck,
            color: "bg-yellow-500",
        },
        {
            title: "Revenue",
            value: `₹${dashboard.revenue}`,
            growth: 18,
            icon: IndianRupee,
            color: "bg-purple-500",
        },
    ];

    const demo = [
        { name: "Delivered", value: 20 },
        { name: "In Transit", value: 15 },
        { name: "Pending Pickup", value: 10 },
        { name: "RTO", value: 5 },
    ];

    console.log(dashboard);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-gray-500">
                    Welcome back, {user?.name} 👋
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {dashboardStats.map((card) => (
                    <StatCard key={card.title} {...card} />
                ))}
            </div>

            <RevenueChart
                data={dashboard.monthlyRevenue}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* <ShipmentChart data={dashboard.shipmentStatus} />*/}

                <ShipmentChart data={demo} />
                <RecentOrders orders={dashboard.recentOrders} />
            </div>
        </div>

    );
};

export default Dashboard;