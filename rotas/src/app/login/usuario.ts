export class Usuario {

  constructor(private _nome: string, private _senha: string) {

  }

  get nome(){
    return this._nome;
  }
  set nome(nome: string) {
    this._nome= nome;
  }
  get senha(){
    return this._senha;
  }
  set senha(senha: string) {
    this._senha= senha;
  }
}
