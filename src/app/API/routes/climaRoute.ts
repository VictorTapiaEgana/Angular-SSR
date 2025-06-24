import { Router } from "express";
import { ClimaPorCiudad } from "../controller/climaController";
import { traducirController } from "../controller/traducirController";

const router = Router()

router.get('/clima/:ciudad_id', ClimaPorCiudad)
router.get('/traducir/:summary',traducirController)

export default router;