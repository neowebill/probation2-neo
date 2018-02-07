import {IUser} from './iuser.model';

export class User implements IUser {
  constructor(public _isNew: boolean, public iUser: IUser) {
  }

  get id(): string { return this.iUser.id; }
  get firstName(): string { return this.iUser.firstName; }
  get lastName(): string { return this.iUser.lastName; }
  get birthDate(): Date { return this.iUser.birthDate; }
  get isNew(): boolean { return this._isNew; }

  set id(value: string) {
    if (this.id !== value) {
      this.iUser.id = value;
    }
  }
  set firstName(value: string) {
    if (this.firstName !== value) {
      this.iUser.firstName = value;
    }
  }
  set lastName(value: string) {
    if (this.lastName !== value) {
      this.iUser.lastName = value;
    }
  }
  set birthDate(value: Date) {
    if (this.birthDate !== value) {
      this.iUser.birthDate = value;
    }
  }
}


