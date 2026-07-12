import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import courierRoutes from "./routes/courierRoutes.js";
import warehouseRoutes from "./routes/warehouseRoutes.js";


const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/clients", clientRoutes);

app.use("/api/couriers", courierRoutes);

app.use("/api/warehouses", warehouseRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Logistics Portal API Running"
    });
});

export default app;