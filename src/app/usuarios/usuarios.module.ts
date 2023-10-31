import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TipoComponent } from './tipo/tipo.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'tipo',
    component: TipoComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    TipoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class UsuariosModule { }
