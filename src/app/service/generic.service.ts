import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { TestTypes } from '../utils/generic';


@Injectable({providedIn: 'root'})
export class GenericService {
  
  baseUrl = "/api/users/random_user";
  
  constructor(private http: HttpClient) { }
  
  getGenericData(type: TestTypes): Observable<any> {
    let payload: any;
    switch (type) {
      case TestTypes.REGULAR:
        const URL = 'https://randomuser.me/api/?results=10';
        return this.http.get<any>(URL).pipe(
          map((response) => {
            payload = response.results;
            return payload;
          }),
          catchError((err: HttpErrorResponse) => {
            return of(err);
          })
        );
        case TestTypes.ERROR:
          const ERROR_URL = 'https://rdaandomuser.me/api/?results=10';
          return this.http.get<any>(ERROR_URL).pipe(
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
  
  // getError(): Observable<any> {
  //   let payload: any;
  //   const URL = 'https://rdaandomuser.me/api/?results=10';
  //    return this.http.get<any>(URL).pipe(
  //     map((response) => {
  //       payload = response.results;
  //       return payload;
  //     }),
  //     catchError((err: HttpErrorResponse) => {
  //       return of(err);
  //     })
  //   );
  // }
  
}