import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  imports: [],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['']); // Ajusta la ruta según tu configuración
  }

}
