import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ArticleModel } from 'app/apis/articles/article.model';
import { ArticlesService } from 'app/apis/articles/articles.service';
import { ArticleListConfig } from 'app/home/home.component';
import { iif, Observable, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit, OnDestroy {
  listConfig: ArticleListConfig;
  listArticle: ArticleModel.MultipleArticle;
  unsubscribe$: Subject<any> = new Subject<any>();
  isLoading = true;
  currentPage: number;
  @Input() limit: number;
  @Input() set config(listConfig: ArticleListConfig) {
    if (listConfig) {
      this.listConfig = listConfig;
      this.currentPage = 1;
      this.runQueryArticle();
    }
  }
  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  runQueryArticle(): void {
    if (this.limit) {
      this.listConfig.filters.limit = this.limit;
      this.listConfig.filters.offset = this.limit * (this.currentPage - 1);
    }
    iif(
      () => this.listConfig.type === 'feed',
      this.articleService.getFeedArticles(this.listConfig),
      this.articleService.getListArticle(this.listConfig)
    )
      .pipe(
        takeUntil(this.unsubscribe$),
        finalize(() => (this.isLoading = false))
      )
      .subscribe((articles) => (this.listArticle = articles));
  }

  pageChanged(pageNumber): void {
    this.currentPage = pageNumber;
    this.runQueryArticle();
  }
}
