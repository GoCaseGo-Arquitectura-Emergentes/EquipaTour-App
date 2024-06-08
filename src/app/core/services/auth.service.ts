import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token = 'yes'

  constructor() {}

  isLoggedIn() {
    return this.token.length > 0;
  }

  /*isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }*/
}
