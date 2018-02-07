import { Action } from '@ngrx/store';
import { User } from '../models/user.model';
import {IUser} from '../models/iuser.model';

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAIL = 'LOAD_USERS_FAIL';
export const SET_SELECTED_USER = 'SET_SELECTED_USER';
export const ADD_USER = 'ADD_USER';
export const SAVE_USER = 'SAVE_USER'
export const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS'
export const SAVE_USER_FAIL = 'SAVE_USER_FAIL';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;

  constructor(public payload: IUser[]) {}
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;

  constructor(public payload?: Error) {}
}

export class SetSelectedUser implements Action {
  readonly type = SET_SELECTED_USER;

  constructor(public payload: any) {}
}

export class AddUser implements Action {
  readonly type = ADD_USER;
}

export class SaveUser implements Action {
  readonly type = SAVE_USER;

  constructor(public payload: User) {}
}

export class SaveUserSuccess implements Action {
  readonly type = SAVE_USER_SUCCESS;

  constructor(public payload: IUser[]) {}
}

export class SaveUserFail implements Action {
  readonly type = SAVE_USER_FAIL;

  constructor(public payload?: User) {}
}


export type UsersActions =
  LoadUsers
  | LoadUsersSuccess
  | LoadUsersFail
  | SetSelectedUser
  | AddUser
  | SaveUser
  | SaveUserSuccess
  | SaveUserFail;
