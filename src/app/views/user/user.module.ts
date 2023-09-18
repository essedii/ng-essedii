import { NgModule } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { GridComponent } from './components/grid/grid.component';
import { ListComponent } from './list/list.component';
import { GameComponent } from './game/game.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';



@NgModule({
  imports: [ UserRoutingModule, SharedModule, MaterialModule],
  exports: [],
  declarations: [UserComponent, FormComponent, GridComponent, ListComponent, GameComponent],
  providers: [],
})
export class UserModule { }
