import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioNinoComponent } from './inicio-nino/inicio-nino.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { NivelesNinosComponent } from './nivelesNinos/nivelesNinos.component';
import { AppRoutingModule } from './app.routes';  
import { Nivel1Component } from './nivel1/nivel1.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    InicioSesionComponent,
    InicioNinoComponent,
    RecuperacionComponent,
    NivelesNinosComponent,
    Nivel1Component  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
