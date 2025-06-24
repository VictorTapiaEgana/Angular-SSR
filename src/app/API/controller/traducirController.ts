import { Request, Response } from "express"
import { traducirSummary } from "../service/traducirSummary";

export const traducirController = async (req :Request, res:Response) => {

    const { summary } = req.params;   

    try {

        const resp:string = await traducirSummary(summary)        
        
        res.status(200).json({
                              status:200,
                              data:resp, 
                              message:'Traduccion exitosa'
        })
        
    } catch (error) {

        res.status(500).json({
                              status:500,
                              data: [],
                              message: error instanceof Error ? error.message : 'Error de servidor',
        })
        
    }

}