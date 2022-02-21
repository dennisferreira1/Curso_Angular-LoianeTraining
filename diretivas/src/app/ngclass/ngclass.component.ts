import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  favorito: boolean = false;

  addFavorito(): void {
    this.favorito= !this.favorito;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
