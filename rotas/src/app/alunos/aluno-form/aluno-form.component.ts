import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno: any;
  inscricao: Subscription;

  constructor(private alunoService: AlunosService, private route: ActivatedRoute) {
    this.inscricao = route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = alunoService.getAluno(id);
        if(this.aluno == null){
          this.aluno = {};
        }
      }
    )
   }

  ngOnInit(): void {
  }

}
