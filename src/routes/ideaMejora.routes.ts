import {Router} from "express";
const router = Router();

import * as ideaMejora from "../controllers/ideaMejora.controller"
router.route("/ideaMejora/addIdea")
    .post(ideaMejora.addIdeaMejora)

export default router;