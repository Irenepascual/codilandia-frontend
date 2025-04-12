import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-nivel1',
  templateUrl: './nivel1.component.html',
  styleUrls: ['./nivel1.component.css'],
  imports: [CommonModule] 
})
export class Nivel1Component implements OnInit {
  correo_nino: string = '';  // Variable que almacenará el correo del niño
  nivel_actual: number = 1;   // Empezamos en el nivel 1
  nivel_info: string = 'Nivel 1: Introducción a los Programas';  // Información del nivel

  constructor(public router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    const token = localStorage.getItem('auth_token');
    if (token) {
      const user = this.decodeToken(token);
      this.correo_nino = user?.correo_usuario;
    } else {
      this.router.navigate(['/login']);
    }
  }

  // Decodifica el token JWT
  decodeToken(token: string) {
    const payload = token.split('.')[1];
    const decoded = atob(payload);
    return JSON.parse(decoded);
  }

  // Función que se ejecuta cuando el niño termina el nivel
  finishLevel(): void {
    // Actualizar el nivel en la base de datos
    this.http.put<any>(`http://localhost:3000/api/niveles/actualizar`, {
      correo_nino: this.correo_nino,
      nuevo_nivel: this.nivel_actual + 1
    }).subscribe({
      next: (res) => {
        console.log('Nivel actualizado', res);
        // Redirigir al siguiente nivel
        this.router.navigate([`/nivel${this.nivel_actual + 1}`]);
      },
      error: (err) => {
        console.error('Error al actualizar el nivel', err);
      }
    });
  }
}
