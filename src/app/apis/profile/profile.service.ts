import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  getProfile(username: string): Observable<Profile> {
    return this.httpClient
      .get<Profile>(`${environment.api_url}/profiles/${username}`)
      .pipe(map((data: any) => data.profile));
  }

  followUser(username: string): Observable<Profile> {
    return this.httpClient
      .post<Profile>(`${environment.api_url}/profiles/${username}/follow`, {})
      .pipe(map((data: any) => data.profile));
  }

  unFollowUser(username: string): Observable<Profile> {
    return this.httpClient
      .delete<Profile>(`${environment.api_url}/profiles/${username}/follow`, {})
      .pipe(map((data: any) => data.profile));
  }
}
