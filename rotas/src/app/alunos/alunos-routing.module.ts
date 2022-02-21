import { AuthGuard } from './../guardas/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';


const routes: Routes = [
  {path: 'alunos', component: AlunosComponent, canActivate: [AuthGuard], children:[
    {path: 'novo', component: AlunoFormComponent},
    {path: ':id', component: AlunoDetalhesComponent},
    {path: ':id/editar', component: AlunoFormComponent}]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
