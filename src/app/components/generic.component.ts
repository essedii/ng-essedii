import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import * as fromAppActions from '../store/actions/app.actions';
import { TestTypes } from '../utils/generic';
import { appStateData, appStateError } from '../store/selectors/app.selector';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html'
})

export class GenericComponent implements OnInit, OnDestroy {
  
  errors: any;
  data: any;
  
  private destroy$ = new Subject();
  
  constructor(
    private store: Store<IAppState>
    ) { 
      
    }
    
  ngOnInit() {
    this.store.select(appStateData).pipe(takeUntil(this.destroy$)).subscribe(data=> {
      this.data = data;
    });
    this.store.select(appStateError).pipe(takeUntil(this.destroy$)).subscribe(errors=> {
      this.errors = errors;
    }) 
  }
  
  getData() {
    this.store.dispatch(new fromAppActions.GetGenericDataLoading(TestTypes.REGULAR))
    
  }
  
  getError() {
    this.store.dispatch(new fromAppActions.GetGenericDataLoading(TestTypes.ERROR))    
  }
  
  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}