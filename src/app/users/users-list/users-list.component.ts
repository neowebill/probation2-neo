import {Component, Input} from '@angular/core';
import {User} from '../models/user.model';
import {Router} from '@angular/router';
import {IUser} from '../models/iuser.model';
import {SetSelectedUser} from '../store/users.actions';
import {Store} from '@ngrx/store';
import {State} from '../store/user.reducers';
import * as fromUsers from '../../reducers';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @Input() iUsers: IUser[];
  users: User[];

  public loading: Observable<boolean>;


  constructor(private router: Router,
              private store: Store<State>) {
    this.loading = this.store.select(fromUsers.getLoading);
  }

  setSelectedUser(user) {
    this.store.dispatch(new SetSelectedUser(user));
      this.router.navigate(['users/edit']);
  }
}
