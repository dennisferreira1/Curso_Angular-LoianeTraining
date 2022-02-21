import { delay, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private readonly API =  `${environment.API}cursos`;

  constructor(private http: HttpClient) { }

  getCursos() {
    return this.http.get<Curso[]>(this.API).pipe(delay(2000));
  }

  getCursoById(id: any) {
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }

  save(curso: any) {
    if (curso.id) {
      return this.updateCurso(curso);
    }
    return this.addCurso(curso);
  }

  delete(id: number) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

  private addCurso(curso: any) {
    return this.http.post(this.API, curso).pipe(take(1));
  }

  private updateCurso(curso: any) {
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1));
  }

}
