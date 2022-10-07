import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseURL = `${environment.API_URL}/reservations`
  
  constructor(private httpClient:HttpClient) { }

  getReservations():Observable<Reservation[]>{
   return this.httpClient.get<Reservation[]>(`${this.baseURL}`); 
  }

  getReservationById(id:number):Observable<Reservation>{
    return this.httpClient.get<Reservation>(`${this.baseURL}/${id}`);
  }

  createReservation(reservation:Reservation):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,reservation);
  }

  updateReservation(id:number,reservation:Reservation):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,reservation);
  }

  deleteReservation(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
