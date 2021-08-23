import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, OnDestroy, DoCheck {

  @Input() valor: number = 0;

  constructor() {
    console.log('construtor');

   }

  ngOnInit(): void {
    console.log('onInit');

  }

  ngOnChanges(): void {
    console.log('onChange');
  }

  ngDoCheck(): void {
    console.log('doCheck');

  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }


}
