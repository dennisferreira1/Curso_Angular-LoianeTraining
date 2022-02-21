import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  consultaCep(cep: string) {
    //Nova variável "cep" somente com dígitos.
    cep = cep?.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {
        //Consulta o webservice viacep.com.br/
        return this.http.get(`https://viacep.com.br/ws/${cep}/json`);
      } //end if.

    } //end if.

    //retornando um Observable vazio caso tenha algum erro no cep
    return of({});
  }

}
