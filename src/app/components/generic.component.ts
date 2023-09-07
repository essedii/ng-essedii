import { Component, OnInit } from '@angular/core';
import { GenericService } from '../service/generic.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import * as fromAppActions from '../store/actions/app.actions'
@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html'
})

export class GenericComponent implements OnInit {
  constructor(
    private service: GenericService,
    private store: Store<IAppState>
    ) { }

  ngOnInit() {
    this.store.dispatch(new fromAppActions.GetGenericDataLoading())
    // this.service.getGenericData().subscribe(data => console.log(data));
  }

}