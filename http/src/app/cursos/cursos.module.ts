import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursoListaComponent } from './curso-lista/curso-lista.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursoFormComponent } from './curso-form/curso-form.component';



@NgModule({
  declarations: [
    CursoListaComponent,
    CursoFormComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
