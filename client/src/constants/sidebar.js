import {
    LayoutDashboard,
    Package,
    Truck,
    Wallet,
    Users,
    BarChart3,
    Settings,
    LogOut,
} from "lucide-react";

const sidebarItems = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/",
    },
    {
        title: "Orders",
        icon: Package,
        path: "/orders",
    },
    {
        title: "Tracking",
        icon: Truck,
        path: "/tracking",
    },
    {
        title: "Wallet",
        icon: Wallet,
        path: "/wallet",
    },
    {
        title: "Couriers",
        icon: Truck,
        path: "/couriers",
    },
    {
        title: "Clients",
        icon: Users,
        path: "/clients",
    },
    {
        title: "Reports",
        icon: BarChart3,
        path: "/reports",
    },
    {
        title: "Settings",
        icon: Settings,
        path: "/settings",
    },
    {
        title: "Logout",
        icon: LogOut,
        path: "/logout",
    },
];

export default sidebarItems;