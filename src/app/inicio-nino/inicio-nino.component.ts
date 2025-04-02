import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio-nino',
  templateUrl: './inicio-nino.component.html',
  styleUrls: ['./inicio-nino.component.css'],
  imports: [CommonModule, FormsModule]
})
export class InicioNinoComponent implements OnInit {

  nombre_usuario: string = ''; 
  correo_usuario: string = ''; 
  cursos: any[] = []; 
  errorMessage: string = '';
  isJoinGroupModalOpen = false;
  groupCode: string = '';
  successMessage: string = '';
  isLoading = false;

  constructor(public router: Router, private http: HttpClient) { } 

  ngOnInit(): void {
    this.getUserData();
    this.obtenerCursos();
  }


  getUserData() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      const user = this.decodeToken(token);
      this.nombre_usuario = user?.nombre_usuario; 
      this.correo_usuario = user?.correo_usuario;  
    } else {
      this.router.navigate(['/login']); 
    }
  }

  decodeToken(token: string) {
    const payload = token.split('.')[1];  
    const decoded = atob(payload);  
    return JSON.parse(decoded); 
  }

  obtenerCursos(): void {
    this.http.get<any>(`http://localhost:3000/api/aulas/${this.correo_usuario}/${this.nombre_usuario}`).subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.cursos = res; 
        } else {
          this.errorMessage = 'No tienes cursos asignados.';
        }
      },
      error: (err) => {
        console.error('Error al obtener cursos', err);
        this.errorMessage = 'No se pudieron cargar los cursos.';
      }
    });
  }

  openJoinGroupModal() {
    this.isJoinGroupModalOpen = true;
  }

  closeJoinGroupModal() {
    this.isJoinGroupModalOpen = false;
  }

  // Método para unirse a un grupo
  joinGroup() {
    if (!this.groupCode) {
      return; // Si no se ha ingresado un código de grupo, no se envía la solicitud
    }

    // Comprobación de grupos a los que está unido
    this.http.get<any[]>(`http://localhost:3000/api/aulas/${this.correo_usuario}/${this.nombre_usuario}`).subscribe({
      next: (res) => {
        console.log(res.length);
        if (res.length >= 3) {
          alert('Solicitud denegada. No se puede pertenecer a más de 3 grupos.');
          this.errorMessage = 'Lo siento, perteneces al máximo número de grupos permitidos';
          this.closeJoinGroupModal(); 
          return;
        }

        const today = new Date().toISOString(); 
        
        this.isLoading = true;
      
        // Enviar la solicitud POST para incluir la solicitud
        this.http.post('http://localhost:3000/api/aulas/unirse', {
          correo: this.correo_usuario,
          nombre: this.nombre_usuario,
          codigo: this.groupCode,
          fecha_solicitud: today
        }).subscribe({
          next: (res) => {
            alert('Solicitud enviada con éxito. A la espera de ser aceptad@.');
            this.closeJoinGroupModal();
          },
          error: (err) => {
            console.error('Error al unirse al grupo:', err);
            this.successMessage = 'Error al enviar la solicitud';
            this.isLoading = false;
          }
        });
      },
      error: (err) => {
        console.error('Error al obtener cursos', err);
        this.errorMessage = 'No se pudieron cargar los cursos.';
      }
    }); 
  }

  navigateToNiveles(): void {
    this.router.navigate(['/nivelesNinos']);
  }
}