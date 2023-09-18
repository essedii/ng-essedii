import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: '', loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)},
    // { path: 'user', loadChildren: () => import('./views/user/user.module').then(m => m.UserModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
