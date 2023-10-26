import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarDocenteComponent } from "./listar-docente-component/listar-docente-component";
import { CreateDocenteComponent } from "./create-docente-component/create-docente-component";
import { RouterModule, Routes } from "@angular/router";


const ROUTES: Routes = [
  {
      path: '',
      component: ListarDocenteComponent
  }
  ,
  {
      path: 'create',
      component: CreateDocenteComponent
  }
];

@NgModule({
  declarations: [
    ListarDocenteComponent,
    CreateDocenteComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],

  providers: []

})
export class DocenteModule { }

