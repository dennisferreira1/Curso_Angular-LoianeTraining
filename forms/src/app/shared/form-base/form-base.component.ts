import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-base',
  template: '<br>'
})
export abstract class FormBaseComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {}

  abstract submit(): void;

  onSubmit() {
    if(this.formulario.valid) {
      this.submit();
    } else {
      this.verificaValidacoesForm(this.formulario)
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle?.markAsTouched();

      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }

    })
  }

  resetar() {
    this.formulario.reset();
  }

  validAndTouched(campo: any) {
    let campoControl = this.formulario.get(campo);
    return campoControl?.errors?.required && campoControl?.touched;
  }

}
