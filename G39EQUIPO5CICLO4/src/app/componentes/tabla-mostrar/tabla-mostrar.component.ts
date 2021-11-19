import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabla-mostrar',
  templateUrl: './tabla-mostrar.component.html',
  styleUrls: ['./tabla-mostrar.component.scss']
})
export class TablaMostrarComponent implements OnInit {

  constructor(private objettohttp: HttpClient) { }

  ngOnInit(): void {
  }

  /*codigoRespuesta!: number;
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
}*/



}
