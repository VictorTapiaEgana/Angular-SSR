import { Request, Response } from "express";
import obtenerNoticias from "../service/obtenerNoticias";
import { NewsApiResponse } from "../types/NoticiasResponseType";


export const  NewsController = async (req: Request,res:Response) =>{

    const { origen } = req.params

    try {

        const resp = await obtenerNoticias(origen)

        res.status(200).json(resp)                        
        
    } catch (error) {
        
        res.status(500).json({
                              status:500,
                              data:[],
                              message: error instanceof Error ? error.message : 'Error del servidor'
        })
    }

}
