import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleListConfig } from 'app/home/home.component';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleModel } from './article.model';
import { BodyArticle } from '../../editor/editor.component';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  getListArticle(
    parameter: ArticleListConfig
  ): Observable<ArticleModel.MultipleArticle> {
    const params = this.getParam(parameter);
    return this.httpClient.get<ArticleModel.MultipleArticle>(
      `${environment.api_url}/articles`,
      {
        params,
      }
    );
  }

  getFeedArticles(
    parameter: ArticleListConfig
  ): Observable<ArticleModel.MultipleArticle> {
    const params = this.getParam(parameter);
    return this.httpClient.get<ArticleModel.MultipleArticle>(
      `${environment.api_url}/articles/feed`,
      { params }
    );
  }

  getSingleArticle(slug: string): Observable<ArticleModel.Article> {
    return this.httpClient
      .get<ArticleModel.Article>(`${environment.api_url}/articles/${slug}`)
      .pipe(map((data: any) => data.article));
  }

  createArticle(body: BodyArticle): Observable<ArticleModel.Article> {
    return this.httpClient
      .post<ArticleModel.Article>(`${environment.api_url}/articles`, body)
      .pipe(map((data: any) => data.article));
  }

  updateArticle(
    slug: string,
    body: BodyArticle
  ): Observable<ArticleModel.Article> {
    return this.httpClient
      .put<ArticleModel.Article>(
        `${environment.api_url}/articles/${slug}`,
        body
      )
      .pipe(map((data: any) => data.article));
  }

  deleteArticle(slug: string): Observable<unknown> {
    return this.httpClient.delete(`${environment.api_url}/articles/${slug}`);
  }

  favorite(slug: string): Observable<ArticleModel.Article> {
    return this.httpClient.post<ArticleModel.Article>(
      `${environment.api_url}/articles/${slug}/favorite`,
      {}
    );
  }

  unfavorite(slug: string): Observable<ArticleModel.Article> {
    return this.httpClient.delete<ArticleModel.Article>(
      `${environment.api_url}/articles/${slug}/favorite`
    );
  }

  private getParam(parameter: ArticleListConfig): HttpParams {
    let params = new HttpParams();
    const keys = Object.keys(parameter.filters);
    if (keys.length > 0) {
      keys.forEach((key) => {
        params = params.set(key, parameter.filters[key]);
      });
    }

    return params;
  }
}
