import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Partyroom } from '../model/partyroom';

@Injectable({
  providedIn: 'root'
})
export class PartyroomService {

  private baseURL= `${environment.API_URL}/partyrooms`;

  constructor(private httpCLient : HttpClient) { }

  getPartyroomsList():Observable<Partyroom[]>{
    return this.httpCLient.get<Partyroom[]>(`${this.baseURL}`);
  }

  getPartyroomById(id:number):Observable<Partyroom>{
    return this.httpCLient.get<Partyroom>(`${this.baseURL}/${id}`);
  }

  createPartyroom(partyroom:Partyroom):Observable<Object>{
    return this.httpCLient.post(`${this.baseURL}`,partyroom);
  }

  updatePartyroom(id:number,partyroom:Partyroom):Observable<Object>{
    return this.httpCLient.put(`${this.baseURL}/${id}`,partyroom);
  }

  deletePartyroom(id:number):Observable<Object>{
    return this.httpCLient.delete(`${this.baseURL}/${id}`);
  }
}
