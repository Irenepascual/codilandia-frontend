import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  imports: [],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent {
  constructor(private router: Router) {}
  volver() {
    this.router.navigate(['']); // Ajusta la ruta según tu configuración
  }
}
