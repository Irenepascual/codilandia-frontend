import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-niveles',
  imports: [],
  templateUrl: './niveles.component.html',
  styleUrl: './niveles.component.css'
})
export class NivelesComponent {
    constructor(private router: Router) {}
  volver() {
    this.router.navigate(['']); // Ajusta la ruta según tu configuración
  }
}
