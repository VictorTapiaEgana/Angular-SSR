import { Request, Response } from "express";
import { ObtenerDatosPorCiudad } from "../service/ObtenerDatosPorCiudad";
import { DatosCiudadType } from "../types/DatosDeLaCiudadType";

export const ClimaPorCiudad = async (req: Request, res: Response) => {

  const { ciudad_id } = req.params;      

   try {

    const DatosDeLaCiudad:DatosCiudadType | null =  await ObtenerDatosPorCiudad( ciudad_id)  
    
    if (DatosDeLaCiudad){
        
       res.status(200).json({
                            status:200,
                            data:DatosDeLaCiudad,
                            message:'ciudad encontrada'
       })       

    } else{

        res.status(404).json({
                            status:404,
                            data:[],
                            message:'Ciudad no encontrada'
       })       
    }
    
   } catch (error) {

      res.status(500).json({status:500,
                            data:[],
                             message: error instanceof Error ? error.message : 'Error inesperado',  
                          })
   }   
  
};