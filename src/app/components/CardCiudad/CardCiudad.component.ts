import { Component, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule }  from '@angular/material/icon'
import { DatosCiudadResponseType } from '../../API/types/DatosDeLaCiudadType';

@Component({
  selector: 'app-card-ciudad',
  imports: [MatDividerModule,MatIconModule],
  templateUrl: './CardCiudad.component.html',
  styleUrl: './CardCiudad.component.css',
})
export class CardCiudadComponent {
  DatosCiudad =  input.required<DatosCiudadResponseType | undefined >() 
 }
