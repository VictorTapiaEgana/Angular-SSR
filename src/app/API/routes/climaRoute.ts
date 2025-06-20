import { Router } from "express";
import { ClimaPorCiudad } from "../controller/climaController";


const router = Router()


router.get('/clima/:ciudad_id', ClimaPorCiudad)

export default router;