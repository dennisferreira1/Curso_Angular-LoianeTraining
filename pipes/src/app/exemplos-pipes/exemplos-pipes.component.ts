import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: "Meu livro",
    avaliacao: 5.4325,
    numPag: 300,
    preco: 199.99,
    dataLancamento: new Date(),
    url: 'http://google.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
