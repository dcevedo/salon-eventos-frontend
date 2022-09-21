import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from './clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "get all clients";

  constructor(private httpClient : HttpClient) { }

  obtenerListaDeClients():Observable<Clients[]>{
    return this.httpClient.get<Clients[]>(`${this.baseURL}`);
  }


}
