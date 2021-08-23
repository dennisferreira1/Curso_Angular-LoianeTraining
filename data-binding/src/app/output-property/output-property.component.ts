import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor : number = 0;
  @Output() mudouValor = new EventEmitter();
  @ViewChild('campoInput') campoInput: ElementRef = new ElementRef(undefined);

  constructor() {}

  incrementa(): void {
    this.campoInput.nativeElement.value++;

    //this.valor++;
    //this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa(): void {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }

  ngOnInit(): void {
  }

}
