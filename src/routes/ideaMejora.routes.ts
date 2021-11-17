import {Router} from "express";
const router = Router();

import * as dashboard from "../controllers/dashboard.controller"
router.route("/dashboard")
    .get(dashboard.getDashboardData)

export default router;