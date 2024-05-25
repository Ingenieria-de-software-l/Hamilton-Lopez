import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaNotaComponent } from './nota/lista-nota/lista-nota.component';
import { DetalleNotaComponent } from './nota/detalle-nota/detalle-nota.component';
import { EditarNotaComponent } from './nota/editar-nota/editar-nota.component';
import { NuevoNotaComponent } from './nota/nuevo-nota/nuevo-nota.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaNotaComponent,
    DetalleNotaComponent,
    EditarNotaComponent,
    NuevoNotaComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
