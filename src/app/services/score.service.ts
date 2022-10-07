import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Score } from '../model/scores';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private baseURL = `${environment.API_URL}/scores`;
  
  constructor(private httpClient:HttpClient) { }

  getScores():Observable<Score[]>{
   return this.httpClient.get<Score[]>(`${this.baseURL}`); 
  }

  getScoreById(id:number):Observable<Score>{
    return this.httpClient.get<Score>(`${this.baseURL}/${id}`);
  }

  // createScore(reservation:Score):Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}`,reservation);
  // }

  // updateScore(id:number,reservation:Score):Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/${id}`,reservation);
  // }

  // deleteScore(id:number):Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}/${id}`);
  // }

}
