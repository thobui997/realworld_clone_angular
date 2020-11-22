import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor() {}

  getToken(): string {
    return localStorage.getItem('jwtToken');
  }

  setToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  removeToken(): void {
    localStorage.removeItem('jwtToken');
  }
}
