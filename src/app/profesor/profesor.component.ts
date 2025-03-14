import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent {

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['']); // Ajusta la ruta según tu configuración
  }
}
