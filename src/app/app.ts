import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/NavBar/NavBar.component";
import { CardCiudadComponent } from "./components/CardCiudad/CardCiudad.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, CardCiudadComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {}
