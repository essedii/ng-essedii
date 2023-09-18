import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { UserModule } from '../user.module';


@Injectable({providedIn: 'root'})
export class UserService {
  
  baseUrl = "/api/users/random_user";
  
  constructor(private http: HttpClient) { }
  
  getGenericData(page: number, results: number): Observable<any> {
    let payload: any;
    // QUESTA API MANDA SIA CON INDICE 0 ED 1 LA STESSA PAGINA, QUINDI IL COMPONENTE HA INDICE CHE PARTE DA 0
    // E QUI AGGIUNGENDO 1 SI RISOLVE IL PROBLEMA
    const URL = `https://randomuser.me/api/?page=${page+1}&results=${results}&seed=abc`;
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
}