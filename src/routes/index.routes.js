import { Router } from "express";

import { prueba } from "../controller/index.controller.js";
const router=Router()

router.get( '/base',prueba)

export default router