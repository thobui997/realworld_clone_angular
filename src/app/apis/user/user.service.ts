import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValueForm } from 'app/auth/auth.component';
import { UpdateUser } from 'app/setting/setting.component';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { JwtService } from '../json-web-token/jwt.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSubject = new BehaviorSubject({} as User);
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  private isAuthenticateSubject = new ReplaySubject<boolean>(1);
  public isAuth = this.isAuthenticateSubject.asObservable();

  constructor(
    private readonly httpClient: HttpClient,
    private jwtService: JwtService
  ) {}

  populated(): void {
    if (this.jwtService.getToken()) {
      this.httpClient
        .get<User>(`${environment.api_url}/user`)
        .pipe(map((data: any) => data.user))
        .subscribe(
          (user) => {
            this.setAuth(user);
          },
          (err) => {
            this.destroyAuth();
          }
        );
    } else {
      this.destroyAuth();
    }
  }

  setAuth(user: User): void {
    this.jwtService.setToken(user.token);
    this.currentUserSubject.next(user);
    this.isAuthenticateSubject.next(true);
  }

  destroyAuth(): void {
    this.jwtService.removeToken();
    this.currentUserSubject.next({} as User);
    this.isAuthenticateSubject.next(false);
  }

  attempAuth(body: ValueForm, authType: string): Observable<User> {
    const path = authType === 'login' ? '/login' : '';
    return this.httpClient
      .post(`${environment.api_url}/users${path}`, body)
      .pipe(
        map((data: any) => {
          const user = data.user;
          this.setAuth(user);
          return user;
        })
      );
  }

  updateUser(body: UpdateUser): Observable<User> {
    return this.httpClient.put<User>(`${environment.api_url}/user`, body).pipe(
      map((data: any) => {
        this.currentUserSubject.next(data.user);
        return data.user;
      })
    );
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }
}
