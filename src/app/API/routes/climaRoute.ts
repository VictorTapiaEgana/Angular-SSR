import { Router } from "express";
import { ClimaCiudad } from "../controller/climaController";


const router = Router()


router.get('/clima/:ciudad', ClimaCiudad)

export default router;