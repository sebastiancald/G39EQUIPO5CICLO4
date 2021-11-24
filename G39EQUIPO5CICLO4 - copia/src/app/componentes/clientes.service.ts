import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiurl:string="http://localhost:8080/api/clientes";

  constructor(private httpObject:HttpClient) { }
  resultado= Array();

  upload(file:any):Promise<any[]>{
    return new Promise<any[]>((resolve, reject) => {
      var reader = new FileReader();
      reader.onloadend=(e)=>{
      let lineas= reader.result as string;
      let separados= lineas.split("\n");

      for (let lienaactual of separados){
        lienaactual.replace(",",",");
        let columnas = lienaactual.split(",");
        this.httpObject.post(this.apiurl,{

          "codigoproducto": columnas[0],
          "ivacompra": columnas[4],
          "nitproveedor": columnas[2],
          "nombreproducto": columnas[1],
          "preciocompra": columnas[3],
          "precioventa": columnas[5]
        },
        {
          observe: 'response'
        }).subscribe((
          response:any
        )=>{
          this.resultado.push(response.status);
        });
      }
        
      resolve(this.resultado);
    } 
    reader.readAsText(file);
      
    });
  }
  }
