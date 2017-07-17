import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  private URL: string;
  private loggedIn = false;

  constructor(private http: HttpClient) {
    this.URL = environment.endpoint + '/login';

    if (localStorage.getItem('auth_token') !== null) {
      this.loggedIn = true;
    }
  }

  login(username, password) {
    return this
      .http
      .post(this.URL, {username, password}, {responseType: 'text'})
      .map(data => {
        localStorage.setItem('auth_token', data);
        return true;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('auth_token');
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

}
