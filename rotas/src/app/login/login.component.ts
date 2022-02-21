import { FormsModule } from '@angular/forms';
import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  private _usuario: Usuario = new Usuario("", "");

  constructor(private authService: AuthService) { }

  get usuario() {
    return this._usuario
  }

  set usuario(usuario: Usuario) {
    this._usuario= usuario;
  }

  login() {
    this.authService.autenticarUsuario(this.usuario);
  }

  ngOnInit(): void {
  }

}
