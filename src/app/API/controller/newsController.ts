import { Request, Response } from "express";
import obtenerNoticias from "../service/obtenerNoticias";


export const  NewsController = async (req: Request,res:Response):Promise<any> =>{

    const { origen } = req.params

    try {

        const resp = await obtenerNoticias(origen)

        res.status(200).json( resp )
                            //    status:200,
                            //    data:resp,
                            //    message:'Datos obtenidos Exitosamente'     
        // })
        
    } catch (error) {
        
        res.status(500).json({
                              status:500,
                              data:[],
                              message: error instanceof Error ? error.message : 'Error del servidor'
        })
    }
    


}

