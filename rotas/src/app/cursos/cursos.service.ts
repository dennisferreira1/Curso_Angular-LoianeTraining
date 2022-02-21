import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      {id: 1, nome: "Angular"},
      {id: 2, nome: "Java"},
      {id: 3, nome: "Javascript"}
    ]
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    for (const curso of cursos){
      if(curso.id == id){
        return curso;
      }
    }
    return null
  }
}
