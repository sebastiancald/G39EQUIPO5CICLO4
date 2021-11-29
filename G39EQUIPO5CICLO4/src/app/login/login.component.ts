import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
/*export class LoginComponent implements OnInit {
  res1: any;
  contenido: any;
  urlapi1: string = "http://localhost:8080/api/usuarios";

  constructor(private objectHttp: HttpClient) { }
  username: string = "";
  password: string = "";

  ngOnInit(): void {


     this.res1= this.objectHttp.get(this.urlapi1);
     this.res1.subscribe((datos:any[])=>{
       this.contenido=datos;
       console.log(this.contenido);
       this.username=this.contenido[0].user;
       this.password=this.contenido[0].pass;
     });
  }
  /*user_correcto: string = "admininicial";
  pass_correcto: string = "admin123456";



  user: string = " ";
  pass: string = " ";
  


  correcto: number = -1;

  comparar() {
    if (this.user === this.user_correcto) {
      this.correcto = 0;
      if (this.pass === this.pass_correcto) {
        this.correcto = 0;
        let barra=document.getElementById("barra");
        barra?.classList.remove("visually-hidden");
      } else {
        this.correcto = 1;
      }
    } else {
      this.correcto = 1;
    }

  }*/

  export class LoginComponent implements OnInit {
    
    hide = true;
  
    constructor() { }
  
    ngOnInit(): void {
    }
    logear(usser: string ='admininicial', pss:any='admin123456'){
      const usuario = usser;
      const contrase = pss;
      
      console.log("usuario: " + usuario)
      console.log("contraseña: " + contrase)
      if( usuario == 'admininicial' && contrase == 'admin123456' ){
        alert("Usuarios Logeado")
        let barra=document.getElementById("barra");
        barra?.classList.remove("visually-hidden")
      }else{
        alert("Datos erroneos")
      }
    }
  


}



