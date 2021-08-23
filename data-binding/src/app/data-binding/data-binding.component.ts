import { NgModuleResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  valorAtual : string = "";
  valorSalvo : string = "";
  isMouseOver : boolean = false;

  twoWayDataBiding : string = "twoWayDataBiding";
  pessoa : any = {
    nome: 'Dennis',
    idade: 33
  };

  nomeCurso: string = 'Angular';

  constructor() { }

  botaoClicado() : void {
    alert('Botão clicado!');
  }

  onKeyUp(evento : KeyboardEvent) : void {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvar(valor : string) : void {
    this.valorSalvo = valor;
  }

  onMouseOverAndOut() : void {
    this.isMouseOver = !this.isMouseOver;
  }

  valorAlterado(evento : any) : void {
    console.log(evento.novoValor);
  }

  ngOnInit(): void {
  }

}
