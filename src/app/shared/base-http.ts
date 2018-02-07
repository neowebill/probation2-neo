import {HttpClient} from '@angular/common/http';
import {IUser} from '../users/models/iuser.model';
import {Observable} from 'rxjs/Observable';

export class BaseHttp {
  constructor(private baseUrl: string, private http: HttpClient) {
  }

  setItems(url: string) {
    const path = `${this.baseUrl}/${url}`;
    return this.getItems(path);
  }

  getItems(path: string) {
    return this.http.get<IUser[]>(path);
  }

  postItem(url: string, item) {
    const it = JSON.stringify(item);
    return this.post(url, it);
  }

private post(url: string, postItem) {
    const path = `${this.baseUrl}/${url}`;
    return this.http.post(path, postItem)
      .catch( err => {
        if (err.status === 400 || err.status === 422) {
          return Observable.throw(err);
        } else {
          console.log('Error', err);
        }
      });
}

  patchItem(url: string, item) {
    const it = JSON.stringify(item);
    return this.patch(url, it);
  }

  private patch(url: string, patchItem) {
    const path = `${this.baseUrl}/${url}`;
    return this.http.patch(path, patchItem)
      .catch( err => {
        if (err.status === 400 || err.status === 422) {
          return Observable.throw(err);
        } else {
          console.log('Error', err);
        }
      });
  }
}
