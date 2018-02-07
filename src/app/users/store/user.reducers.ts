import {User} from '../models/user.model';
import * as UsersActions from './users.actions';
import {IUser} from '../models/iuser.model';
import {UserFactory} from '../models/user.factory';

export interface State {
  users: IUser[];
  selectedUser: User;
  loading: boolean;
}
const initialState: State = {
  users: [],
  selectedUser: undefined,
  loading: false,
};

export function userReducer(state = initialState, action: UsersActions.UsersActions): State {
  switch (action.type) {
    case (UsersActions.LOAD_USERS):
      return {
        ...state,
        loading: true
      };

    case (UsersActions.LOAD_USERS_SUCCESS):
      const iUsers: IUser[] = action.payload;
      const users: User[] = iUsers.map(UserFactory.mapUser);
      return {
        ...state,
        users: users,
        loading: false
      };

    case (UsersActions.LOAD_USERS_FAIL):
      return {
        ...state,
        loading: false
      };

    case (UsersActions.ADD_USER):
      const newUser: User = UserFactory.newUser();
      return {
        ...state,
        selectedUser: newUser,
      };

    case (UsersActions.SET_SELECTED_USER):
      return {
        ...state,
        selectedUser: action.payload,
      };

    case (UsersActions.SAVE_USER):
      return {
        ...state,
      };

    case (UsersActions.SAVE_USER_SUCCESS): {
      const item = UserFactory.mapUser(UserFactory.mapUser((action as any).payload));
      const existing = state.users.filter(s => s.id !== item.id);
      const users = [...existing, item];
      return Object.assign({}, state, {loading: false, users: users});
    }

    default:
      return state;
  }
}
export const getUserEntities = (state: State) => state.users;
export const getSelectedUser = (state: State) => state.selectedUser;
export const getLoading = (state: State) => state.loading;

