import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Curso } from 'src/app/model/curso';
import { CursoService } from '../curso.service';
import { AlertModalService } from './../../shared/alert-modal.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css'],
  preserveWhitespaces: true
})
export class CursoListaComponent implements OnInit {

  //cursos: Curso[] = [];

  cursos$!: Observable<Curso[]>;
  error$ = new Subject<boolean>();
  @ViewChild('modalDelete') modalDelete: any;
  cursoSelecionado!: Curso;

  constructor(
    private cursoService: CursoService,
    private alertModalService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //this.cursoService.getCursos().subscribe(cursos => this.cursos = cursos);
    this.cursos$ = this.getCursos();
  }

  handleError() {
    this.alertModalService.showAlertDanger('Não foi possível carregar os cursos. Tente novamente mais tarde.');
  }

  onEdit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

  onDelete(curso: Curso) {
    this.cursoSelecionado = curso;
    this.alertModalService.showConfirmDelete(this.modalDelete);
  }

  confirmar() {
    this.alertModalService.confirmDelete();
    this.cursoService.delete(this.cursoSelecionado.id).subscribe(
      sucesso => {
        this.showAlertSuccess("Curso removido com sucesso.");
        this.onRefresh();
      },
      error => this.showAlertDanger("Error ao remover curso.")
    )
  }

  cancelar() {
    this.alertModalService.cancelDelete();
  }

  showAlertSuccess(msgSuccess: any) {
    this.alertModalService.showAlertSuccess(msgSuccess);
  }

  showAlertDanger(msgError: any) {
    this.alertModalService.showAlertDanger(msgError);
  }

  onRefresh() {
    this.cursos$ = this.getCursos();
  }

  getCursos() {
    return this.cursoService.getCursos()
      .pipe(
        catchError(error => {
          //this.error$.next(true);
          this.handleError();
          return EMPTY;
        })
      )
  }
}


