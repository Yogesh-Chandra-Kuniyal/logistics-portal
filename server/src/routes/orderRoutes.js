import express from "express";
import {
    createOrder,
    deleteOrder,
    getOrder,
    getOrders,
    updateOrder,
} from "../controllers/orderController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.route("/")
    .get(getOrders)
    .post(createOrder);

router.route("/:id")
    .get(getOrder)
    .put(updateOrder)
    .delete(deleteOrder);

export default router;