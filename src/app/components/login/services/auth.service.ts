import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuario: Usuario;
  private _token: string;

  constructor(private httpCliente: HttpClient) {

  }
  login(usuario: Usuario): Observable<any> {
    const urlEndPoint = 'https://localhost:44349/api/v1/cuentas/Login';
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpCliente.post(urlEndPoint,usuario,{headers : httpHeaders});
  }

  saveUser(token : string){
    this._usuario = new Usuario();
    const payload = this.GetDataToken(token);
    this._usuario.email = payload.unique_name;
    sessionStorage.setItem('usuario',JSON.stringify(this._usuario));

  }

  saveToken(token:string){
    this._token = token;
    sessionStorage.setItem('token',token);
  }

  GetDataToken(token : string):any{
    if (token != null) {
      return JSON.parse(atob(token.split('.')[1]));
    }
    return null;
  }
}
