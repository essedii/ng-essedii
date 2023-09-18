import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/internal/Subject';
import { IAppState } from 'src/app/store/state/app.state';
import { PageEvent } from '@angular/material/paginator';
import { Location } from '@angular/common';
import { GridComponent } from '../components/grid/grid.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['name', 'email', 'phone', 'city'];
  length : number = 50;
  pageEvent?: PageEvent;
  pageIndex: number = 0;
  data$: any
  hidePageSize: boolean = false;
  showPageSizeOptions: boolean = true;
  showFirstLastButtons: boolean = true;
  disabled: boolean = false;
  page: number = 0;
  pageSize: number = 5;
  pageSizeOptions: Array<number> = [5, 10, 25];
  private destroy$ = new Subject();
  
  @ViewChild('grid') public grid?: GridComponent;
  
  constructor(
    private store: Store<IAppState>,
    private location: Location
    ) {
    // this.getData();
  }

  ngOnInit() {
    // this.data$ = this.store.select(appStateData).pipe(takeUntil(this.destroy$))
  }
  
  back(){
    this.location.back();
  }
  
  // getData() {
  //   this.store.dispatch(new fromAppActions.GetGenericDataLoading({page: this.pageIndex, results: this.pageSize}))
  // }
    
  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}