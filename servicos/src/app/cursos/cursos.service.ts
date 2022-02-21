import { Injectable } from "@angular/core";

import { LogService } from "../shared/log.service";

@Injectable()
export class CursosService {

  cursos: string[] = ["Angular", "Java", "Spring"];

  constructor(private logService: LogService){
    console.log('CursosService');
  }

  getCursos() {
    this.logService.consoleLog("Obtendo lista de cursos...")
    return this.cursos;
  }

  addCurso(curso: string){
    this.logService.consoleLog(`Adicionando o curso ${curso}`)
    this.cursos.push(curso);
  }


}
