import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/service/generic.service';
import * as fromAppActions from '../actions/app.actions';
import { catchError, exhaustMap, map, switchMap, } from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';


@Injectable()
export class AppEffects {
  
  loadMovies$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromAppActions.ActionTypes.GET_GENERIC_DATA_LOADING),
    switchMap(() => this.service.getGenericData()
      .pipe(
        map((response) =>  (new fromAppActions.GetGenericDataFailure({payload: response.result})),
        catchError((error) => {
          return of(new fromAppActions.GetGenericDataFailure({payload: error}))
        })
      )
    )
  )
  )
  )
  
  
  constructor(
    private service: GenericService,
    private actions$: Actions
  ) {}
  
  // @Effect()
  // Generic: Observable<any> = this.actions
  
}