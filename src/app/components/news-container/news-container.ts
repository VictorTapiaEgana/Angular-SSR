import { Component } from '@angular/core';
import { NewsCard } from "./news-card/news-card";
import { httpResource } from '@angular/common/http';
import { NewsApiResponse } from '../../API/types/NoticiasResponseType';

@Component({
  selector: 'app-news-container',
  imports: [NewsCard],
  templateUrl: './news-container.html',
  styleUrl: './news-container.css'
})
export class NewsContainer {

    recursoNoticias = httpResource<NewsApiResponse>(()=>'/noticias/chile');


}
