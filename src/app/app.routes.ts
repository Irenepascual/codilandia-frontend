import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule } from '@angular/router';  

export const routes: Routes = [
  { path: '', component: InicioComponent },  // Ruta para la página de inicio
  { path: 'registro', component: RegistroComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);  
