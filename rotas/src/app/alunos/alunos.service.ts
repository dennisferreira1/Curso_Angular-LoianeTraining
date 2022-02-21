import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  alunos: any[] = [
    {id: 1, nome: "Aluno 1", email: "aluno1@email.com"},
    {id: 2, nome: "Aluno 2", email: "aluno2@email.com"},
    {id: 3, nome: "Aluno 3", email: "aluno3@email.com"}
  ]

  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    for (const aluno of this.alunos) {
      if(aluno.id == id){
        return aluno;
      }
    }
    return null;
  }
}
