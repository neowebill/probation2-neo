import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BaseHttp} from '../shared/base-http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';

@Injectable()
export class UserService extends BaseHttp {

   saveUser(user: any) {
    if (user.isNew) {
      return this.postItem('user', user.iUser);
    } else {
      return this.patchItem('user', user.iUser);
    }
  }

   allUsers() {
    return this.setItems('users');
  }

  constructor(@Inject('baseUrl') baseUrl, http: HttpClient) {

    super(baseUrl, http);
  }

}

