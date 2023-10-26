import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const APP_ROUTES:Routes=[
  {
    path: 'estudiante',
    loadChildren: () => import('./estudiante/estudiante.module').then(m => m.EstudianteModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'estudiante'
  },

  {
    path: 'docente',
    loadChildren: () => import('./docente/docente.module').then(m => m.DocenteModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'docente'
  },

  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'usuarios'
  }
];


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
