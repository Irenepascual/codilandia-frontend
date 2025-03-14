import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router) {} 
  
  // Método para el botón de Iniciar sesión
  iniciarSesion() {
    console.log('Iniciar sesión');
    // lógica para iniciar sesión...
  }

  // Método para el botón de Registrarse
  registrarse() {
    console.log('Registrarse');
    this.router.navigate(['/registro']);  }

}
