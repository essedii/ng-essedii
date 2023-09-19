import { NgModule } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { GridComponent } from './components/grid/grid.component';
import { ListComponent } from './list/list.component';
import { GameComponent } from './game/game.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [ UserRoutingModule, SharedModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [],
  declarations: [UserComponent, FormComponent, GridComponent, ListComponent, GameComponent],
  providers: [],
})
export class UserModule { }
