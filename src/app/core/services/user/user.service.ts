import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router) {}
  login(credentials: { email: string, password: string,  }): Observable<{token?: string, error?: string}> {
    return this.http.post<{ token: string }>('http://localhost:9000/users/signin', {
      email: credentials.email,
      password: credentials.password
    })
    // If successful, dispatch success action with result
    .map((response: { token: string }) => {
      this.saveAuthToken(response.token);
      this.router.navigate(['/']);
      return { token: response.token };
    })
    // If request fails, dispatch failed action
    .catch((error) => {
      this.removeAuthToken();
      return Observable.of({
        error: 'Could not log in'
      });
    });
  }

  logOut() {
    this.removeAuthToken();
    this.router.navigate(['/']);
  }
  saveAuthToken(newAuthToken: string) {
    localStorage.setItem('token', newAuthToken);
  }

  removeAuthToken() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  signup(credentials: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  }): Observable<{ token?: string, error?: string}> {
    return this.http.post<{ token: string }>('http://localhost:9000/users/signup', {
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      email: credentials.email,
      password: credentials.password,
    })
    .map((response: { token: string }) => {
      this.saveAuthToken(response.token);
      this.router.navigate(['/']);
      return { token: response.token };
    })
    .catch((error) => {
      this.removeAuthToken();
      return Observable.of({
        error: 'Could not sign up'
      });
    });
  }

}
