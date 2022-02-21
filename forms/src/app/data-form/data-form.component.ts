import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { FormsValidations } from '../shared/FormsValidations';
import { Cidade } from '../shared/models/cidade';
import { FormBaseComponent } from './../shared/form-base/form-base.component';
import { EstadoBr } from './../shared/models/estado-br';
import { CepService } from './../shared/services/cep.service';
import { DropdownService } from './../shared/services/dropdown.service';
import { VerificaEmailService } from './services/verifica-email.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends FormBaseComponent implements OnInit {

  //estados: Observable<EstadoBr[]> = new Observable<EstadoBr[]>();
  estados: EstadoBr[] = [];
  cidades: Cidade[] = [];
  cargos: any[] = [];
  newsletter: any;
  frameworks = ['Angular', 'React', 'Vue'];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private dropdownService: DropdownService, private cepService: CepService, private emailService: VerificaEmailService) {
    super();
  }

  ngOnInit(): void {


    //Usar dessa forma quando não usar pipe async no template html

    this.dropdownService.getEstadosBR()
      .subscribe(dados => {
      this.estados = dados;
    })


    //Quando usar o pipe async no html
    //this.estados = this.dropdownService.getEstadosBR();
    this.cargos = this.dropdownService.getCargos();
    this.newsletter = this.dropdownService.getNewsletter();

    /*this.formulario= new FormGroup({
      nome: new FormControl(),
      email: new FormControl()
    });
   }*/

    this.formulario = this.formBuilder.group({
      nome: ["Dennis", [Validators.required]],
      email: ["dennisferreira1@hotmail.com", [Validators.required, Validators.email], [this.verificarEmail.bind(this)]],
      confirmarEmail: [null, [Validators.required, Validators.email, FormsValidations.equalsTo("email")]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormsValidations.cepValidator]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]]
      }),
      cargo: [null],
      newsletter: ['s'],
      termos: [null, [Validators.required]],
      frameworks: this.buildFrameworks()
    })

    this.formulario.get('endereco.cep')?.statusChanges.subscribe(status => {
      if(status === 'VALID') {
        this.consultaCep();
      }
    });

    this.formulario.get('email')?.statusChanges
    .subscribe(
      status => {
        if(status === "VALID") {
          this.formulario.get('confirmarEmail')?.updateValueAndValidity();
        }
      }
    )

    this.formulario.get('endereco.estado')?.valueChanges
      .pipe(
        map(siglaEstado => this.estados.filter(e => e.sigla === siglaEstado)),
        map((estados: EstadoBr[]) => estados && estados.length > 0 ? estados[0].id : 0),
        switchMap((idEstado: number) => this.dropdownService.getCidades(idEstado)),
      )
      .subscribe(cidades => {
        this.cidades = cidades
      });
  }

  buildFrameworks() {
    const values = this.frameworks.map(f => new FormControl(false))
    return this.formBuilder.array(values, FormsValidations.requiredMinCheckBox());
  }

  getFrameworks() {
    const frameworks = this.formulario.get('frameworks') as FormArray;
    return frameworks.controls;
  }

  submit(): void {
    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(
      valueSubmit,
      {
        frameworks: valueSubmit.frameworks
          .map((v: any, i: number) => v ? this.frameworks[i] : null)
          .filter((v: any) => v !== null)
      }
    )

    //emulando uma requisição http post para o endereço "https://httpbin.org/post"
    this.http.post("https://httpbin.org/post", JSON.stringify(valueSubmit))
    .subscribe(response => {
      console.log(response);
      //reseta formulário
      this.resetar();

    }, erro => alert('erro'))

  }

  validEmail() {
    let campoEmail = this.formulario.get('email');
    return campoEmail?.errors?.email;
  }

  consultaCep() {

    let cep = this.formulario.get('endereco.cep')?.value;
    //Verifica se campo cep possui valor informado.
    if (cep !== null || cep != "") {
      this.cepService.consultaCep(cep)
        .subscribe(dados => this.popularDadosForm(dados))
    } //end if.
    else {
      //cep é inválido.
      alert("Formato de CEP inválido.");
      this.limpaCamposEnd();
    }
  } //end if.

  popularDadosForm(dados: any) {
    this.formulario.patchValue(
      {
        endereco: {
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
      }
    )
  }

  limpaCamposEnd() {
    this.formulario.patchValue({
      endereco: {
        cep: null,
        numero: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }

  setarCargo() {
    const cargo = {nome: 'Dev', nivel: 'Sênior', desc: 'Dev Sênior'};
    this.formulario.get('cargo')?.setValue(cargo);
  }

  comparaCargos(obj1: any, obj2: any) {
    return (obj1 && obj2) ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : (obj1 === obj2);
  }

  verificarEmail(formControl: FormControl) {
    return this.emailService.verificarEmail(formControl.value)
      .pipe(map((emailExiste: any) => emailExiste ? {emailInvalido: true} : null))
  }
}

