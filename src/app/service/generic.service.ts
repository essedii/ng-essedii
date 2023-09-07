import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({providedIn: 'root'})
export class GenericService {
  
  baseUrl = "/api/users/random_user";
  
  constructor(private http: HttpClient) { }
  
  getGenericData(): Observable<any> {
    return this.http.get<any>('https://randomuser.me/api/?results=10')
  }
  
}