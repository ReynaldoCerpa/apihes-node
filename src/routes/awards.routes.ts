import {Router} from "express";
const router = Router();

import * as awards from "../controllers/awards.controller"
router.route("/awards")
    .get(awards.getAwardsData)

export default router;