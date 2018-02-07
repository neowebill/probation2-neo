import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as users from '../users/store/user.reducers';
import {createSelector} from 'reselect';

// export interface State {
//   users: users.State;
// }

export const reducers: ActionReducerMap<any> = {
  users: users.userReducer
};

export const getUsersState = createFeatureSelector<users.State>('users');
export const getUserEntities = createSelector(getUsersState, users.getUserEntities);
export const getSelectedUser = createSelector(getUsersState, users.getSelectedUser);
export const getLoading = createSelector(getUsersState, users.getLoading);
