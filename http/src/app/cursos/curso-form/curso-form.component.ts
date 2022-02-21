import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/model/curso';
import { CursoService } from '../curso.service';
import { AlertModalService } from './../../shared/alert-modal.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private cursoService: CursoService,
    private alertaModalService: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // Utilizando guardas de rotas
    const curso: Curso = this.route.snapshot.data['curso'];

    this.form = this.formBuilder.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.minLength(3), Validators.maxLength(10), Validators.required]]
    })

    // Sem utilizar guardas de rota
    //this.route.paramMap.pipe(
    //  map((params: ParamMap) => params.get('id')),
    //  switchMap((id: any) => this.cursoService.getCursoById(id))
    //)
    //.subscribe((curso: Curso) => this.updateForm(curso));
  }

  onSubmit() {
    this.submitted = true
    if (this.form.valid) {
      let msgSuccess = "Curso adicionado com sucesso."
      let msgError = "Não foi possível adicinar o curso. Tente novamente mais tarde."
      if (this.form.value.id) {
        msgSuccess = "Curso atualizado com sucesso.";
        msgError = "Não foi possível atualizar o curso. Tente novamente mais tarde."
      }

      this.cursoService.save(this.form.value).subscribe(
        sucesso => {
          this.alertaModalService.showAlertSuccess(msgSuccess);
          this.location.back();
        },
        error => this.alertaModalService.showAlertDanger(msgError)
      )
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  // Sem utilizar guardas de rota
  /*
  updateForm(curso: Curso) {
    this.form.patchValue(
      {
        id: curso.id,
        nome: curso.nome
      }
    )
  }
  */

}



