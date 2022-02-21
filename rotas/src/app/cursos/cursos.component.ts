import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any[] = [];
  pag: number = 0;
  inscricao: Subscription;

  constructor(private cursosService: CursosService, private route: ActivatedRoute, private router: Router) {
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams) => {
        this.pag = queryParams['pagina'];
      }
    )
  }

  proximaPag(): void {
    this.router.navigate(['cursos'], {queryParams: {pagina: ++this.pag}})
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }


}
