import { HttpResourceRef } from '@angular/common/http';
import { Component, effect, input, model, OnInit, Signal, WritableResource } from '@angular/core';
import { MatBadgeModule} from '@angular/material/badge'
import { NewsApiResponse } from '../../../API/types/NoticiasResponseType';

@Component({
  selector: 'app-news-card',
  imports: [MatBadgeModule],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css'
})

export class NewsCard{

  recursoNoticias = input.required<HttpResourceRef<NewsApiResponse >>();   


}
