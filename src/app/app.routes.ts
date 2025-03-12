import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProfesorComponent } from './profesor/profesor.component'; // Importa el componente de profesor

export const routes: Routes = [
  { path: '', component: InicioComponent },  // Ruta para la página de inicio
  { path: 'profesor', component: ProfesorComponent } // Nueva ruta para la pantalla del profesor
];

export const AppRoutingModule = RouterModule.forRoot(routes);
