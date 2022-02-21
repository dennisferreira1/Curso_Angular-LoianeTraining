import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit, OnDestroy {

  id: number= 0;
  curso: any;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute, private router: Router ,private cursosService: CursosService) {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.curso = this.cursosService.getCurso(this.id);

        if(this.curso == null){
            this.router.navigate(['naoEncontrado'])
        }
      }
    )
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }



}
