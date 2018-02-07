import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {State} from './store/user.reducers';
import {Store} from '@ngrx/store';
import {AddUser, LoadUsers} from './store/users.actions';
import {IUser} from './models/iuser.model';
import {Router} from '@angular/router';
import * as fromUsers from '../reducers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users$: Observable<IUser[]>;
  users: IUser[];

  constructor(private store: Store<State>,
              private router: Router) {
    this.users$ = this.store.select(fromUsers.getUserEntities);
    this.users$.subscribe(u => this.users = u);
    this.store.dispatch(new LoadUsers());
  }

  onNewUser() {
    this.router.navigate(['users/new']);
    this.store.dispatch(new AddUser());
  }

}
