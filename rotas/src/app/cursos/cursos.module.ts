import { AuthGuard } from './../guardas/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalhesComponent,
    CursoNaoEncontradoComponent,
    CursoNaoEncontradoComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
