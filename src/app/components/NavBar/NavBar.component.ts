import { Component, inject } from '@angular/core';

import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule} from '@angular/material/form-field';
import {  MatIconModule} from '@angular/material/icon'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-nav-bar',
  imports: [MatInputModule,MatFormFieldModule,MatIconModule],
  templateUrl: './NavBar.component.html',
  styleUrl: './NavBar.component.css',  
  
})

export class NavBarComponent {
  
  constructor(){
    console.log("Cargo NavBar")
    let datos  = this.prueba()
  }

  http = inject(HttpClient)

  

   prueba(){
     this.http.get('/clima/Test1')
              .subscribe(datos => {
                   console.log(datos)
     })
   }

 }