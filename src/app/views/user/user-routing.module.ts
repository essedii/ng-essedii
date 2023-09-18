import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { GameComponent } from './game/game.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  { path: '', component: UserComponent, 
    children: [
      {path: 'list',  component: ListComponent},
      {path: 'game',  component: GameComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
