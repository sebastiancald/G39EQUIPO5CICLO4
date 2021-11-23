import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  res: any;
  contenido: any;
  urlapi: string = "http://localhost:8080/api/clientes";

  constructor(private objectHttp: HttpClient, private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.res= this.objectHttp.get(this.urlapi);
    this.res.subscribe((datos:any[])=>{
      this.contenido=datos;
      console.log(this.contenido);
    });
  }


codigoRespuesta!: number;
res2: any;

codigoproducto!: string;
ivacompra!: string;
nitproveedor!: string;
nombreproducto!:string;
preciocompra!:string;
postData(){
  this.objectHttp.post<any>(
    'http://localhost:8080/api/clientes',{
      
      codigoproducto: this.codigoproducto,
      ivacompra: this.ivacompra,
      nitproveedor: this.nitproveedor,
      nombreproducto: this.nombreproducto,
      preciocompra: this.preciocompra
    },
    {
      observe: "response"
    }
  ).subscribe(response=>{
    this.codigoRespuesta=response.status;
    this.res2=response;
  })
}
resultados: any;
  file!: File;

  onChange (evento:any){
    this.file=evento.target.file[0];
  }

  async onUpload(){
    this.resultados=await this.clientesService.upload(this.file);
    console.log(this.resultados);
  }



}
