import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() {}

  getCursos(): string[]{
    return ["Java", "Spring", "Angular", "TypeScript", "HTML5", "CCS"];
  }
}
