import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { NewsCard } from "./news-card/news-card";
import { httpResource } from '@angular/common/http';
import { NewsApiResponse, NewsArticle } from '../../API/types/NoticiasResponseType';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-news-container',
  imports: [NewsCard,MatIconModule,MatButtonModule],
  templateUrl: './news-container.html',
  styleUrl: './news-container.css'
})

export class NewsContainer {

    pais = signal('chile')
    paginaActual = signal(0)

    newsArticlesArray = signal<NewsArticle[][]>([]);    

    recursoNoticias = httpResource<NewsApiResponse>(()=>`/noticias/${this.pais()}`);    

   constructor() {
    //Carga inicial de las Noticias
    effect(() => {

      const data = this.recursoNoticias.value();

      if (data?.results) {
        this.newsArticlesArray.set([[...data.results]]);        
      }

    });

  }

  
  noticiasActuales = computed(()=> this.newsArticlesArray()[this.paginaActual()] ?? [] )

  paginaAnterior(){

   if (this.paginaActual() === 0 ) {   
      return
   } else {
      this.paginaActual.update(prev => prev -1)      
    
   }

  }






































  
  paginaSiguiente(){

   if (this.paginaActual() === 5 ) {   
      return
   } else {
      this.paginaActual.update(prev => prev +1)    
    
   }
    
  }

}

