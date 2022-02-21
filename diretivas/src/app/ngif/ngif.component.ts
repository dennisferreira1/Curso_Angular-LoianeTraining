import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  cursos: string[] = [];
  mostrarCursos: boolean = false;

  constructor() { }

  mostrarEsconder(): boolean {
    return this.mostrarCursos= !this.mostrarCursos;
  }

  ngOnInit(): void {
  }

}
