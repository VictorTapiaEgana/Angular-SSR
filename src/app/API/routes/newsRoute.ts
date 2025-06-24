import { Router } from "express";
import { NewsController } from "../controller/newsController";

const newsRoute = Router()


newsRoute.get('/noticias/:origen', NewsController)

export default newsRoute;