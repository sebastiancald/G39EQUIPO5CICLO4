import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent implements OnInit {

  res: any;
  contenido: any;
  urlapi: string = "http://localhost:8080/api/productos";

  constructor() { }

  ngOnInit(): void {
    /*this.res= this.objettohttp.get(this.urlapi);
    this.res.subscribe((datos:any[])=>{
      this.contenido=datos;
      console.log(this.contenido);
    });*/
  }


}