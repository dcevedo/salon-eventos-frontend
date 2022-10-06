import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Message } from '../model/messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private BaseURL = `${environment.API_URL}/messages`;

  constructor(private httpClient:HttpClient) { }

  getMessagesList():Observable<Message[]>{
    return this.httpClient.get<Message[]>(`${this.BaseURL}`);
  }

  getMessageById(id:number):Observable<Message>{
    return this.httpClient.get<Message>(`${this.BaseURL}/${id}`);
  }

  createMessage(message:Message):Observable<Object>{
    return this.httpClient.post(`${this.BaseURL}`,message);
  }

  updateMessage(id:number,message:Message):Observable<Object>{
    return this.httpClient.put(`${this.BaseURL}/${id}`,message);
  }

  deleteMessage(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.BaseURL}/${id}`);
  }
}
