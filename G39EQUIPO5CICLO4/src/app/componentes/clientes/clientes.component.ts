import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  res1: any;
  contenido: any;
  urlapi1: string = "http://localhost:8080/api/clientes";

  constructor(private objectHttp: HttpClient, private clientesService: ClientesService,
     private _config:NgbAccordionConfig) {_config.closeOthers=true }

  ngOnInit(): void {
    this.res1= this.objectHttp.get(this.urlapi1);
    this.res1.subscribe((datos:any[])=>{
      this.contenido=datos;
      console.log(this.contenido);
    });
  }


codigoRespuesta!: number;
res2: any;

cedulacliente!: string;
direccioncliente!: string;
emailcliente!: string;
nombrecliente!:string;
telefonocliente!:string;
id!: string;
postData(){
  this.objectHttp.post<any>(
    'http://localhost:8080/api/clientes',{
      
      cedulacliente: this.cedulacliente,
      direccioncliente: this.direccioncliente,
      emailcliente: this.emailcliente,
      nombrecliente: this.nombrecliente,
      telefonocliente: this.telefonocliente
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

 

  //BUscar cliente//
  


  buscarCliente() {
    this.clientesService.buscar(this.cedulacliente).subscribe((cliente: any[]) => {
      console.log(cliente);
      this.id = cliente[0].id;
      this.nombrecliente = cliente[0].nombrecliente;
      this.direccioncliente = cliente[0].direccioncliente;
      this.emailcliente = cliente[0].emailcliente;
      this.telefonocliente = cliente[0].telefonocliente;

    });

  }

  //Eliminar cliente//
  eliminar() {
    this.clientesService.eliminar(this.id).subscribe(()=>{
      alert("Cliente eliminado con exito")
      this.id = "";
    })
  }

  //Actualizar cliente//


  public actualizarCliente() {
    let cliente = {
      cedulacliente: this.cedulacliente,
      direccioncliente: this.direccioncliente,
      emailcliente: this.emailcliente,
      nombrecliente: this.nombrecliente,
      telefonocliente: this.telefonocliente,
    };

    this.clientesService.actualizar(this.id, cliente).subscribe((cliente) => {
      this.id = "";
      this.direccioncliente ="";
      this.emailcliente = "";
      this.telefonocliente = "";


      alert('Cliente actualizado exitosamente');
      this.direccioncliente = "";
      this.emailcliente = "";
      this.nombrecliente = "";
      this.telefonocliente = "";
      
      alert('Cliente actualizado exitosamente');
      console.log(cliente);
    });
  
  }


}
