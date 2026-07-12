import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Tracking from "../pages/Tracking";
import Wallet from "../pages/Wallet";
import Clients from "../pages/Clients";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<MainLayout />}>

                    <Route path="/" element={<Dashboard />} />

                    <Route path="/orders" element={<Orders />} />

                    <Route path="/tracking" element={<Tracking />} />

                    <Route path="/wallet" element={<Wallet />} />

                    <Route path="/clients" element={<Clients />} />

                    <Route path="/reports" element={<Reports />} />

                    <Route path="/settings" element={<Settings />} />

                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;