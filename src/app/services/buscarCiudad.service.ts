import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosCiudadResponseType } from '../API/types/DatosDeLaCiudadType';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarCiudadService {

  constructor() {}

  http = inject(HttpClient)  

  buscar(id_ciudad:string):Observable<DatosCiudadResponseType>{    
        
    return this.http.get<DatosCiudadResponseType>(`/clima/${id_ciudad}`) 
    
  } 

}
