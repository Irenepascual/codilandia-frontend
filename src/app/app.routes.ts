import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';


import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioNinoComponent } from './inicio-nino/inicio-nino.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { NivelesNinosComponent } from './nivelesNinos/nivelesNinos.component';
import { ProfesorComponent } from './profesor/profesor.component'; 
import { CursoComponent } from './curso/curso.component';
import { SolictudesComponent } from './solictudes/solictudes.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { Nivel1Component } from './nivel1/nivel1.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, 
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'inicio-nino', component: InicioNinoComponent },
  { path: 'recuperacion', component: RecuperacionComponent },
  { path: 'nivelesNinos', component: NivelesNinosComponent },
  { path: 'profesor', component: ProfesorComponent },
  { path: 'curso/:codigo', component: CursoComponent },
  { path: 'solicitudes/:codigo', component: SolictudesComponent},
  { path: 'alumnos/:codigo', component: AlumnosComponent},
  { path: 'estadisticas', component: EstadisticasComponent},
  { path: 'nivel1', component: Nivel1Component }

];

export const AppRoutingModule = RouterModule.forRoot(routes);
