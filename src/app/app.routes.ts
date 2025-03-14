import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProfesorComponent } from './profesor/profesor.component'; // Importa el componente de profesor
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },  // Ruta para la página de inicio
  { path: 'registro', component: RegistroComponent },
  { path: 'profesor', component: ProfesorComponent }

];

export const AppRoutingModule = RouterModule.forRoot(routes);
