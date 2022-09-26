import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './clients';
import { environment } from "../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // private baseURL = "http://localhost:8080/api/clients";
  private baseURL =`${environment.API_URL}/clients`;

  constructor(private httpClient : HttpClient) { }

  obtenerListaDeClients():Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseURL}`);
  }

  ObtenerClientporId(id:number):Observable<Client>{
    return this.httpClient.get<Client>(`${this.baseURL}/${id}`)
  }

  registrarClient(client:Client) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,client);
  }

  clientUpdate(id:number,client:Client) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,client);
  }

  clientDelete(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
}
