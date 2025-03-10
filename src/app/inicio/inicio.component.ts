import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  // Método para el botón de Iniciar sesión
  iniciarSesion() {
    console.log('Iniciar sesión');
    // lógica para iniciar sesión...
  }

  // Método para el botón de Registrarse
  registrarse() {
    console.log('Registrarse');
    // lógica para registrarse...
  }

}
