import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GroupComponent} from './admin/group/group.component';
import {UserComponent} from './admin/user/user.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';

const routes: Routes = [
  {path : 'user', component : UserComponent},
  {path : 'group', component : GroupComponent},
  {path : 'dashboard', component : DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
