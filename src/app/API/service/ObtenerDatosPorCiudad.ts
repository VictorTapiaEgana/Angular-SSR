import { DatosCiudadType } from "../types/DatosDeLaCiudadType"

export async function ObtenerDatosPorCiudad(ciudad_id:string):Promise<DatosCiudadType | null>{

    const API_KEY = process.env['API_KEY']
    const URL_BASE=process.env['URL_CLIMA']    

    const params = new URLSearchParams({
                       place_id: ciudad_id,
                       sections: 'all',
                       language: 'en',
                       units: 'metric',
                       key: 'nwgrfuk6tjqmcuq0g83nu0yhzx3j6x7pv0ouc9p7'
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