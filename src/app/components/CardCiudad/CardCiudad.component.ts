import { Component, computed, inject, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule }  from '@angular/material/icon'
import { ClimaporCiudadResponseType } from '../../API/types/DatosDeLaCiudadPorDiasType';
import { TranslateServiceService } from '../../services/translateService.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-card-ciudad',
  imports: [MatDividerModule,MatIconModule],
  templateUrl: './CardCiudad.component.html',
  styleUrl: './CardCiudad.component.css',
})

export class CardCiudadComponent {
  traducirService = inject(TranslateServiceService)

  DatosCiudad =  input.required<ClimaporCiudadResponseType | undefined >() 

  summary = computed(()=> this.DatosCiudad()?.data?.daily?.data?.[0]?.summary)

  // traduccionSummary = this.traducirService.traducirSummary(this.summary) 
traduccionSummary = toSignal(
  toObservable(this.summary).pipe(
    filter((text): text is string => !!text),
    switchMap(text => this.traducirService.traducirSummary(text))
  )
);


  
}