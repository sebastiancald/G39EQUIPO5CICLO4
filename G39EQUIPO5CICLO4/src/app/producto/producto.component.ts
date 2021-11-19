import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  res: any;
  contenido: any;
  urlapi: string = "http://localhost:8080/api/productos";

  constructor(private objettohttp: HttpClient) { }

  ngOnInit(): void {
    this.res= this.objettohttp.get(this.urlapi);
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
  this.objettohttp.post<any>(
    'http://localhost:8080/api/productos',{
      
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

}

