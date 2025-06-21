import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/NavBar/NavBar.component";
import { CardCiudadComponent } from "./components/CardCiudad/CardCiudad.component";
import { BuscarCiudadService } from './services/buscarCiudad.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, CardCiudadComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  ciudadService = inject(BuscarCiudadService)

  //TODO: Habilitar localStorage para la guardar la ultima ciudad buscada
  //      y cargarla al iniciar la siguiente vez

  DatosCiudad = toSignal(this.ciudadService.buscar('coquimbo'))  

  
}


