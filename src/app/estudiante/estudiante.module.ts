import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEstudianteComponent } from "./listar-estudiante-component/listar-estudiante-component";
import { CreateEstudianteComponent } from "./create-estudiante-component/create-estudiante-component";
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
  {
      path: '',
      component: ListarEstudianteComponent
  }
  ,
  {
      path: 'create',
      component: CreateEstudianteComponent
  }
];



@NgModule({
  declarations: [
    ListarEstudianteComponent,
    CreateEstudianteComponent
    
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: []

})
export class EstudianteModule { }


