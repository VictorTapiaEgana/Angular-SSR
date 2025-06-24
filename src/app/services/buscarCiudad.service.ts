import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosCiudadResponseType } from '../API/types/DatosDeLaCiudadType';
import { HttpClient } from '@angular/common/http';
import { ClimaporCiudadResponseType } from '../API/types/DatosDeLaCiudadPorDiasType';

@Injectable({
  providedIn: 'root'
})
export class BuscarCiudadService {

  constructor() {}

  http = inject(HttpClient)    

  buscar(id_ciudad:string):Observable<ClimaporCiudadResponseType>{    
        
    return this.http.get<ClimaporCiudadResponseType>(`/clima/${id_ciudad}`) 
    
  } 

}
