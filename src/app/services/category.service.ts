import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Category } from '../model/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseURL =`${environment.API_URL}/categories`;

  constructor(private httpClient:HttpClient) { }

  getCategoriesList():Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseURL}`);
  }

  getCategoryById(id:number):Observable<Category>{
    return this.httpClient.get<Category>(`${this.baseURL}/${id}`);
  }

  createCategory(category:Category):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,category);
  }

  updateCategory(id:number, category:Category):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,category);
  }

  deleteCategory(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
