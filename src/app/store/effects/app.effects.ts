import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/service/generic.service';
import * as fromAppActions from '../actions/app.actions';
import { catchError, exhaustMap, map, switchMap, } from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';

@Injectable()
export class AppEffects {
  getData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAppActions.ActionTypes.GET_GENERIC_DATA_LOADING),
      map((action: any) => action.payload),
      switchMap((params) => this.service.getGenericData(params.page, params.results)
        .pipe(
          map((response) => {
            if (!response.error) {
              return new fromAppActions.GetGenericDataSuccess(response)
            } else {
              return new fromAppActions.GetGenericDataFailure(response)
            }
          }),
        )
      )
    )
  )
  
  
  constructor(
    private service: GenericService,
    private actions$: Actions
  ) {}
}