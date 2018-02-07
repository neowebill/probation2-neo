import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../models/user.model';
import {SAVE_USER} from '../store/users.actions';
import {Store} from '@ngrx/store';
import {State} from '../store/user.reducers';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';
import * as fromUsers from '../../reducers';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  signupForm: FormGroup;
  user$: Observable<User>;
  user: User;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private store: Store<State>) {
    this.user$ = this.store.select(fromUsers.getSelectedUser);
    this.user$.subscribe(u => this.user = u);

    this.init();
  }

private init() {
  this.signupForm = this.fb.group({
    firstName: [this.user.firstName, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    lastName: [this.user.lastName, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    birthDate: [this.user.birthDate, Validators.required]
  });
  Object.getOwnPropertyNames(this.signupForm.controls)
    .forEach(prop => this.signupForm.controls[prop].valueChanges
      .do(val => this.user[prop] = val)
      .subscribe());
}

  saveUser() {
    this.store.dispatch({type: SAVE_USER, payload: this.user});
    this.router.navigate(['/users']);
  }
  onCancel() {
    this.router.navigate(['/users']);
  }
}

