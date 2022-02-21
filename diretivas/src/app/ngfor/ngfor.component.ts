import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  cursos: string[] = ['Angular', 'Java', 'SpringBoot'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
