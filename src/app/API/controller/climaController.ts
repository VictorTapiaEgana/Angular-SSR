import { Request, Response } from "express";

export const ClimaCiudad = (req: Request, res: Response) => {

  const { ciudad } = req.params;  
  res.json({ mensaje: `Buscando clima para la ciudad: ${ciudad}` });
  
};