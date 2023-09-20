import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';


@Injectable({providedIn: 'root'})
export class UserService {
  
  baseUrl = "https://randomuser.me/api/";
  
  constructor(private http: HttpClient) { }
  
  getGenericData(page: number, results: number): Observable<any> {
    let payload: any;
    // QUESTA API MANDA SIA CON INDICE 0 ED 1 LA STESSA PAGINA, QUINDI IL COMPONENTE HA INDICE CHE PARTE DA 0
    // E QUI AGGIUNGENDO 1 SI RISOLVE IL PROBLEMA
    const URL = `${this.baseUrl}?page=${page+1}&results=${results}&seed=abc`;
    return this.http.get<any>(URL).pipe(
      map((response) => {
        payload = response.results;
        return payload;
      }),
      catchError((err: HttpErrorResponse) => {
        return of(err);
      })
    );
  }
  
  getRandomUser(level: string): Observable<any> {
    let payload: any;
    let param: any;
    
    switch(level) {
      case '1':
        param = 'picture,gender';
        break;
      case '2':
        param = 'picture,gender,name';
        break;
      case '3':
        param = 'picture,gender,name,dob';
          break;
      default: 
      break
    }
    
    const URL = `${this.baseUrl}?nat=gb,us?inc=${param}`;
    return this.http.get<any>(URL).pipe(
      map((response) => {
        payload = response.results[0];
        return payload;
      }),
      catchError((err: HttpErrorResponse) => {
        return of(err);
      })
    );
  }
}