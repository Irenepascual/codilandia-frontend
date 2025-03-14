import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  standalone: true,
  imports: [FormsModule], 
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  // Campos del formulario
  nombre_usuario: string = '';
  correo_usuario: string = '';
  contrasena: string = '';
  tipoUsuario: string = 'nino'; // Valor por defecto

  constructor(
    private router: Router,
    private http: HttpClient 
  ) {}

  volver(): void {
    this.router.navigate(['/']); // o a la ruta que quieras volver
  }

  onSubmit(): void {
    if (this.tipoUsuario === 'adulto') {
      this.http.post('http://localhost:3000/api/users/nino', {
        correo_usuario: this.correo_usuario,
        nombre_usuario: this.nombre_usuario,
        contrasena: this.contrasena
      }).subscribe({
        next: (res) => {
          console.log('Niño creado con éxito', res);
        },
        error: (err) => {
          console.error('Error al crear niño:', err);
        }
      });      
    } else {
      // Lógica de POST a /api/users/nino
      this.http.post('/api/users/nino', {
        correo_usuario: this.correo_usuario,
        nombre_usuario: this.nombre_usuario,
        contrasena: this.contrasena
      }).subscribe({
        next: (res) => {
          console.log('Niño creado con éxito', res);
          // Redirige o muestra un mensaje si quieres
        },
        error: (err) => {
          console.error('Error al crear niño:', err);
        }
      });
    }
  }
}
