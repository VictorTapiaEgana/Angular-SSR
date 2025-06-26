import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { traduccionType } from '../API/types/traducirType';

@Injectable({
  providedIn: 'root'
})
export class TranslateServiceService {

  constructor() { }
  
  http = inject(HttpClient)

  traducirSummary(cadena:string):Observable<traduccionType> {
       
    return this.http.get<traduccionType>(`/traducir/${encodeURIComponent(cadena)}`)

  }

}
