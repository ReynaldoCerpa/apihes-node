import {Router} from "express";
const router = Router();

import * as dashboard from "../controllers/index.controller"
router.route("/dashboard")
    .get(dashboard.getIndex)

export default router;