import {Router} from "express";
const router = Router();

import * as indicators from "../controllers/indicators.controller"
router.route("/indicatorsHori")
    .get(indicators.getHorizontalBarData)

router.route("/indicatorsVer")
    .get(indicators.getVerticalBarData)

router.route("/indicatorsPie")
    .get(indicators.getPieChartData)

export default router;