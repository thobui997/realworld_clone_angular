import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommentModel } from './comment.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getCommentsFromAnArticle(
    slug: string
  ): Observable<CommentModel.MultipleComment> {
    return this.httpClient.get<CommentModel.MultipleComment>(
      `${environment.api_url}/articles/${slug}/comments`
    );
  }

  addCommentsFromAnArticle(
    slug: string,
    body: unknown
  ): Observable<CommentModel.SingleComment> {
    return this.httpClient
      .post<CommentModel.SingleComment>(
        `${environment.api_url}/articles/${slug}/comments`,
        body
      )
      .pipe(map((data: any) => data.comment));
  }

  deleteCommentsFromAnArticle(slug: string, id: number): Observable<unknown> {
    return this.httpClient.delete<unknown>(
      `${environment.api_url}/articles/${slug}/comments/${id.toString()}`
    );
  }
}
