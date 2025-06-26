import { NewsApiResponse } from "../types/NoticiasResponseType"

export default async function obtenerNoticias(origen:string):Promise<NewsApiResponse | undefined> {

    const API_NOTICIAS = process.env['API_NOTICIAS']       
    const URL_NOTICIAS = process.env['URL_NOTICIAS']    
    
    const params = new URLSearchParams({
        apikey: API_NOTICIAS!,                
        country: origen === 'chile'  ? 'cl' : 'us,gb',          
        language: 'es', 
    });

    const url = `${URL_NOTICIAS}?${params.toString()}`;

    try {

        const resp = await fetch(url)
        const result = resp.json()

        return result
        
    } catch (error) {

        return  undefined
    } 
    
}