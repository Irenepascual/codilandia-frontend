import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solictudes',
  imports: [],
  templateUrl: './solictudes.component.html',
  styleUrl: './solictudes.component.css'
})
export class SolictudesComponent {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['']); // Ajusta la ruta según tu configuración
  }
}
