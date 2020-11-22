import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  constructor(private httpClient: HttpClient) {}

  getListTag(): Observable<string[]> {
    return this.httpClient
      .get<string[]>(`${environment.api_url}/tags`)
      .pipe(map((data: any) => data.tags));
  }
}
