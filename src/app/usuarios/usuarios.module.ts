import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TipoComponent } from './tipo/tipo.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    TipoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
