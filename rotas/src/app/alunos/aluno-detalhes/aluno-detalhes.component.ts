import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css']
})
export class AlunoDetalhesComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription;

  constructor(private alunoService: AlunosService, private route: ActivatedRoute, private router: Router) {
    this.inscricao = route.params.subscribe(
      (params:any) => {
        let id = params['id'];
        this.aluno = alunoService.getAluno(id);
      }
    )
   }

   editar() {
    this.router.navigate(['alunos', this.aluno.id, 'editar'])
   }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
