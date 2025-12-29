import express from "express";
import { getLowStockAlerts } from "../controllers/lowStockController.js";

const alertRouters = express.Router();

alertRouters.get("/api/companies/:companyId/alerts/low-stock", getLowStockAlerts);

export default alertRouters;
