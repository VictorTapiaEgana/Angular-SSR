import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule }  from '@angular/material/icon'

@Component({
  selector: 'app-card-ciudad',
  imports: [MatDividerModule,MatIconModule],
  templateUrl: './CardCiudad.component.html',
  styleUrl: './CardCiudad.component.css',
})
export class CardCiudadComponent { }
