import { Component, OnInit } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { Usuario } from './services/usuario';
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : Usuario;
  constructor(private authservice: AuthService) {
    this.usuario = new Usuario();
   }

  ngOnInit() {
  }

  login(): void {
    console.log(this.usuario);
    this.authservice.login(this.usuario).subscribe(
      response => {
        this.authservice.saveToken(response.token);
        this.authservice.saveUser(response.token);
        console.log("Bienvenido");
        Swal.fire('login','Bienvenido','success');
      },error =>{
        console.log(error);
      }
      );          
  }

}
