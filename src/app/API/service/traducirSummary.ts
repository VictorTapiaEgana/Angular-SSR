import * as deepl from 'deepl-node';

export async function traducirSummary(sumary:string):Promise<string> {

    const API_DEEP  =  process.env['API_DEEP']!;
    const translator = new deepl.Translator(API_DEEP);

    

    try {

       const result = await translator.translateText(sumary, null, 'es');
       return result.text
        
    } catch (error) {

        return ''
        
    }    

}