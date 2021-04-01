import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GroupComponent} from './admin/group/group.component';
import {UserComponent} from './admin/user/user.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';

const routes: Routes = [
  {path : '', component : UserComponent},
  {path : 'user', component : GroupComponent},
  {path : 'post', component : DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
