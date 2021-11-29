import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiurl: string = "http://localhost:8080/api/clientes";

  constructor(private httpObject: HttpClient) { }
  resultado = Array();

  buscar(cedulacliente: string): Observable<any[]> {
    return this.httpObject.get<any[]>(
      this.apiurl + '/getcedulaclientes/' + cedulacliente
    );
  }

  actualizar(cedulacliente: string, cliente: any) {
    return this.httpObject.put(this.apiurl + '/' + cedulacliente, cliente);
  }

  eliminar(cedulacliente: string) {
    return this.httpObject.delete(this.apiurl + '/' + cedulacliente);
  }
}
