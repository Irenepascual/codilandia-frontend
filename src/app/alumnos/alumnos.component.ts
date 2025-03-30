import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  imports: [],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {
  constructor(private router: Router) {}
  volver() {
    this.router.navigate(['']); // Ajusta la ruta según tu configuración
  }
}
