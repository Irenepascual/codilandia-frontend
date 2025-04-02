import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-nivelesNinos',
  templateUrl: './nivelesNinos.component.html',
  styleUrls: ['./nivelesNinos.component.css'],
  imports: [CommonModule] 
})
export class NivelesNinosComponent {
  constructor(public router: Router) {}
}
