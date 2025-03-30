import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProfesorComponent } from './profesor/profesor.component'; // Importa el componente de profesor
import { RegistroComponent } from './registro/registro.component';
import { CursoComponent } from './curso/curso.component';
import { SolictudesComponent } from './solictudes/solictudes.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { NivelesComponent } from './niveles/niveles.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },  // Ruta para la página de inicio
  { path: 'registro', component: RegistroComponent },
  { path: 'profesor', component: ProfesorComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'solicitudes', component: SolictudesComponent},
  { path: 'alumnos', component: AlumnosComponent},
  { path: 'estadisticas', component: EstadisticasComponent},
  { path: 'alumno', component: AlumnoComponent},
  { path: 'niveles', component: NivelesComponent},


];

export const AppRoutingModule = RouterModule.forRoot(routes);
