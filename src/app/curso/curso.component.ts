import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  imports: [],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['']); // Ajusta la ruta según tu configuración
  }

  solictudes() {
    this.router.navigate(['solicitudes']); // Ajusta la ruta según tu configuración
  }

  alumnos() {
    this.router.navigate(['alumnos']); // Ajusta la ruta según tu configuración
  }

  estadisticas() {
    this.router.navigate(['estadisticas']); // Ajusta la ruta según tu configuración
  }
}
