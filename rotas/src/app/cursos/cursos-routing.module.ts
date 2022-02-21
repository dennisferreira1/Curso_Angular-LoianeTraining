import { AuthGuard } from './../guardas/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  {path: 'cursos', component: CursosComponent, canActivate: [AuthGuard]},
  {path: 'curso/:id', component: CursoDetalhesComponent, canActivate: [AuthGuard]},
  {path: 'naoEncontrado', component: CursoNaoEncontradoComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
