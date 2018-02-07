import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserEditComponent} from '../user-edit/user-edit.component';
import {UsersComponent} from '../users.component';

const usersRoutes: Routes = [
  {path: '', component: UsersComponent },
  { path: 'new', component: UserEditComponent },
  { path: 'edit', component: UserEditComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class UsersRouterModule { }
