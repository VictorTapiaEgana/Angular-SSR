// import { httpResource } from '@angular/common/http';
import { httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { NewsApiResponse } from '../API/types/NoticiasResponseType';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  recursoNoticias = httpResource<NewsApiResponse>(()=>'/noticias/chile');

  constructor() {}  
  
}
