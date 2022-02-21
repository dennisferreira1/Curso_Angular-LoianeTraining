import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunoDetalhesComponent,
    AlunoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule
  ]
})
export class AlunosModule { }
