import { Component, ViewEncapsulation } from '@angular/core';

import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule} from '@angular/material/form-field';
import {  MatIconModule} from '@angular/material/icon'

import { Search} from 'lucide-angular';


@Component({
  selector: 'app-nav-bar',
  imports: [MatInputModule,MatFormFieldModule,MatIconModule],
  templateUrl: './NavBar.component.html',
  styleUrl: './NavBar.component.css',  
  
})
export class NavBarComponent {
  
  Search = Search; 
 }
