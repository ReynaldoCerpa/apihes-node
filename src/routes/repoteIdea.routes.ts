import {Router} from "express";
const router = Router();

import * as indexrepoteIdea from "../controllers/reporteIdea.controller"
router.route("/reporteIdea")
    .get(indexrepoteIdea.getReportesIdea)
    .post(indexrepoteIdea.addReporteIdea)

export default router;