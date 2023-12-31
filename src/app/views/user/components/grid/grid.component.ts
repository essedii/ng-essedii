import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../store/state/app.state';
import * as fromAppActions from '../../../../store/actions/app.actions';
import { appStateData, appStateError } from '../../../../store/selectors/app.selector';
import { Observable, Subject, takeUntil } from 'rxjs';
import { PageEvent } from '@angular/material/paginator/paginator';

import { Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit, OnDestroy {
  
  @Input() Headers?: Array<string>
  @Input() Values?: Array<string>
  data: any;
  
  errors: any;
  data$?: Observable<any>;
  errors$?: Observable<any>;
  hidePageSize: boolean = false;
  showPageSizeOptions: boolean = true;
  showFirstLastButtons: boolean = true;
  disabled: boolean = false;
  page: number = 0;
  pageSize: number = 5;
  pageSizeOptions: Array<number> = [5, 10, 25];
  
  private destroy$ = new Subject();
  
  displayedColumns: string[] = ['name', 'email', 'phone', 'city'];
  length : number = 50;
  pageEvent?: PageEvent;
  pageIndex: number = 0;
  
  constructor( private store: Store<IAppState>) { 
    this.getData();
    this.store.select(appStateError).pipe(takeUntil(this.destroy$));
    
    // this.data == this.Headers?.length;
  }
    
  ngOnInit() {
    this.data$ = this.store.select(appStateData).pipe(takeUntil(this.destroy$))
    this.errors$ = this.store.select(appStateError).pipe(takeUntil(this.destroy$))
  }
  
  getData() {
    this.store.dispatch(new fromAppActions.GetGenericDataLoading({page: this.pageIndex, results: this.pageSize}))
  }
  
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getData();
  }
  
  onRefresh() {
    this.getData();
  }
  
  
  
  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}