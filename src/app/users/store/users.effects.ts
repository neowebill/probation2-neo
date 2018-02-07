import {Actions, Effect, mergeEffects} from '@ngrx/effects';
import {UserService} from '../user.service';
import {Observable} from 'rxjs/Observable';
import * as usersActions from './users.actions';
import {Injectable, OnDestroy} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import {IUser} from '../models/iuser.model';
import {Subscription} from 'rxjs/Subscription';


@Injectable()
export class UserEffects implements OnDestroy {
  @Effect() fetchUsers$ = this.actions$
    .ofType(usersActions.LOAD_USERS)
    .debounceTime(300)
    .switchMap(() => this.userService.allUsers())
    .map( (users: IUser[]) => new usersActions.LoadUsersSuccess(users))
    .catch(() => {
      alert('Server Error, failed to load users!');
      return Observable.of(new usersActions.LoadUsersFail());
    }).share();

  @Effect() saveUser$= this.actions$
    .ofType(usersActions.SAVE_USER)
    .map((action: usersActions.SaveUser) => (action.payload))
    .switchMap(iUser => this.userService.saveUser(iUser))
    .map(user => new usersActions.SaveUserSuccess(user))
    .catch(() => {
      alert('Error, failed to save user!');
      return Observable.of(new usersActions.LoadUsersFail());
    }).share();

  private subscription: Subscription;

  constructor(private actions$: Actions, private userService: UserService) {
    this.subscription = mergeEffects(this).subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
