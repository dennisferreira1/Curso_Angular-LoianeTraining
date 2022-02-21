import { CursoResolverGuard } from './guards/curso-resolver.guard';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { CursoListaComponent } from './curso-lista/curso-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CursoListaComponent },
  { path: 'novo', component: CursoFormComponent, resolve: {curso: CursoResolverGuard} },
  { path: 'editar/:id', component: CursoFormComponent, resolve: {curso: CursoResolverGuard} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
