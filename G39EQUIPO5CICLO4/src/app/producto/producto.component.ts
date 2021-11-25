import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoService } from 'src/app/componentes/producto.service';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  res: any;
  contenido: any;
  urlapi: string = "http://localhost:8080/api/productos";

  constructor(private objectHttp: HttpClient, private productoService: ProductoService, 
    private _config:NgbAccordionConfig) {_config.closeOthers=true }

  //obtine info del back
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
nombreproducto!:string;
nitproveedor!: string;
preciocompra!: string;
ivacompra!: string;
precioventa!:string;


//envio info csv
postData(){
  this.objectHttp.post<any>(
    'http://localhost:8080/api/productos',{
      
      codigoproducto: this.codigoproducto,
      nombreproducto: this.nombreproducto,
      nitproveedor: this.nitproveedor,
      preciocompra: this.preciocompra,
      ivacompra: this.ivacompra,
      precioventa: this.precioventa
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


  onChange(event:any){
    console.log('onchange', event);
    this.file=event.target.files[0];
  }

  async onUpload() {
    console.log(this.file);
    this.resultados=await this.productoService.upload(this.file);
    console.log(this.resultados);
  }
 


}

