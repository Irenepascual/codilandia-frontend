import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nivel11',
  templateUrl: './nivel11.component.html',
  styleUrls: ['./nivel11.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class Nivel11Component {

  respuestaFuncion = '';
  respuestaCorrectaFuncion = false;
  resueltoFuncion = false;

  respuestaLlamada = '';
  respuestaCorrectaLlamada = false;
  resueltoLlamada = false;

  puntos_obtenidos = 0;
  puedeFinalizar = 0;

  respuestaParametros = '';
  respuestaCorrectaParametros = false;
  resueltoParametros = false;

  constructor(public router: Router) {}

  verificarFuncion() {
    this.resueltoFuncion = true;
    this.respuestaCorrectaFuncion = this.respuestaFuncion.trim().toLowerCase() === 'void';
    if (this.respuestaCorrectaFuncion) this.puntos_obtenidos++;
    this.puedeFinalizar++;
  }

  verificarLlamada() {
    const textoNormalizado = this.respuestaLlamada.replace(/\s+/g, '').toLowerCase();
    this.resueltoLlamada = true;
    this.respuestaCorrectaLlamada = textoNormalizado === 'bienvenida();';
    if (this.respuestaCorrectaLlamada) this.puntos_obtenidos++;
    this.puedeFinalizar++;
  }

  verificarParametros() {
    const entrada = this.respuestaParametros.trim().toLowerCase();
  
    const partes = entrada.split(',').map(p => p.trim());
  
    if (partes.length !== 2) {
      this.respuestaCorrectaParametros = false;
    } else {
      const esValido = partes.every(parte => {
        const match = parte.match(/^int\s+[a-zA-Z_][a-zA-Z0-9_]*$/);
        return !!match;
      });
      this.respuestaCorrectaParametros = esValido;
    }
  
    this.resueltoParametros = true;
    if (this.respuestaCorrectaParametros) this.puntos_obtenidos++;
    this.puedeFinalizar++;
  }
  
  finishLevel() {
    if (this.puedeFinalizar < 2) {
      alert('❌ Aún no has completado todas las pruebas.');
      return;
    }
    alert('✅ ¡Has terminado el Nivel 11 de funciones!');
    this.router.navigate(['/nivelesNinos']);
  }
}
