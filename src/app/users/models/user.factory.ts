import {IUser} from './iuser.model';
import {User} from './user.model';
import * as uuid from 'uuid';

export class UserFactory {
  public static mapUser(iUser: IUser): User {
    return new User(false, iUser);
  }
  public static newUser(): User {
    const iUser: IUser = {
      id: uuid.v4(),
      firstName: '',
      lastName: '',
      birthDate: null
    };
    return new User(true, iUser);
  }
}
