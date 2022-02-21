import { Curso } from './../../model/curso';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CursoService } from '../curso.service';
import { NonNullAssert } from '@angular/compiler';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {

  constructor(private cursoService: CursoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso> {
    const id= route.paramMap.get('id');

    if(id != null) {
      return this.cursoService.getCursoById(route.params.id)
    }

    const curso = {
      id: null,
      nome: null
    } as unknown as Curso;

    return of(curso)
  }
}
