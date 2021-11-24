import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  

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
    }else{
      alert("Datos erroneos")
    }
  }



}
  


