import {Router} from "express";
const router = Router();

import * as awards from "../controllers/awards.controller"
router.route("/awards")
    .get(awards.getAwardsData)

router.route("/awardsTopThree")
    .get(awards.getTopThree)
export default router;