import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nivelesNinos',
  templateUrl: './nivelesNinos.component.html',
  styleUrls: ['./nivelesNinos.component.css'],
  imports: [CommonModule]
})
export class NivelesNinosComponent implements OnInit {
  codigo_aula: string = '';
  correo: string = '';
  nombre: string = '';

  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.codigo_aula = params['codigo_aula'];
      this.correo = params['correo'];
      this.nombre = params['nombre'];
      // Ahora puedes usar estas variables para relacionar cada nivel con el aula del niño
      console.log('Código aula:', this.codigo_aula);
      console.log('Correo:', this.correo);
      console.log('Nombre:', this.nombre);
    });
  }

  navigateToNivel(nivel: number): void {
    // Construir la ruta dinámica según el número de nivel, por ejemplo: '/nivel1', '/nivel2', etc.
    const path = `/nivel${nivel}`;
    this.router.navigate([path], { 
      queryParams: { 
        codigo_aula: this.codigo_aula, 
        correo: this.correo, 
        nombre: this.nombre 
      }
    });
  }
}
