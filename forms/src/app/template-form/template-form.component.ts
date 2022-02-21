import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  validAndTouched(campo: any) {
    return !campo.valid && campo.touched
  }

  onSubmit(form: any) {
    console.log(form);
    console.log(form.value);
    console.log(this.usuario);

  }

  consultaCep(cep:string, form: any) {
    //Nova variável "cep" somente com dígitos.
    cep = cep?.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != null || cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {
        //Consulta o webservice viacep.com.br/
        this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe(
          dados => this.popularDadosForm(dados, form)
        );

      } //end if.
      else {
          //cep é inválido.
          alert("Formato de CEP inválido.");
          this.limpaCamposForm(form);
      }
    } //end if.
    else {
      //cep sem valor, limpa formulário.
      this.limpaCamposForm(form);
    }
  }

  popularDadosForm(dados: any, formulario: NgForm){
    formulario.form.patchValue(
      {
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    )
  }

  limpaCamposForm(formulario: NgForm) {
    formulario.form.patchValue(
      {
        cep: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    )
  }
}
