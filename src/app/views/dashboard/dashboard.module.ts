import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  imports: [DashboardRoutingModule, SharedModule, MaterialModule],
  exports: [],
  declarations: [HomeComponent, DashboardComponent],
  providers: [],
})
export class DashboardModule { }
