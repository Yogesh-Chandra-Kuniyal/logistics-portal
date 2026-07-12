import express from "express";

import {
    getCouriers,
    createCourier,
    updateCourier,
    deleteCourier,
} from "../controllers/courierController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router
    .route("/")
    .get(getCouriers)
    .post(createCourier);

router
    .route("/:id")
    .put(updateCourier)
    .delete(deleteCourier);

export default router;