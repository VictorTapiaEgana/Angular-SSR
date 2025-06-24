import { ClimaPorCiudadType } from "../types/DatosDeLaCiudadPorDiasType"
import { DatosCiudadType } from "../types/DatosDeLaCiudadType"

export async function ObtenerDatosPorCiudad(ciudad_id:string):Promise<ClimaPorCiudadType | null>{

    const API_KEY = process.env['API_KEY']
    const URL_BASE=process.env['URL_CLIMA']    

    const params = new URLSearchParams({
                                        place_id: ciudad_id,
                                        sections: 'daily',
                                        language: 'en',
                                        units: 'metric',
                                        key: `${API_KEY}`
                                      })

    const URLCOMPLETE = `${URL_BASE}/point?${params.toString()}` 
    
    try {
        const datos = await fetch(URLCOMPLETE)
                        .then(datos => datos.json())
        return datos
        
    } catch (error) {

        return null
        
    }    
    
}