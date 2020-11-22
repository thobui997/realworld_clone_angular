import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { ArticleModel } from 'app/apis/articles/article.model';
import { ArticlesService } from 'app/apis/articles/articles.service';
import { UserService } from 'app/apis/user/user.service';
import { Observable, of, Subject } from 'rxjs';
import { concatMap, finalize, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-button-favorite',
  templateUrl: './button-favorite.component.html',
  styleUrls: ['./button-favorite.component.css'],
})
export class ButtonFavoriteComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<any>();
  @Input() article: ArticleModel.Article;
  @Output() toggle = new EventEmitter<boolean>();
  isSubmitting = true;
  constructor(
    private router: Router,
    private articleService: ArticlesService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  toggleFavorite() {
    this.userService.isAuth
      .pipe(
        takeUntil(this.unsubscribe$),
        concatMap((authenticated) => {
          if (!authenticated) {
            this.router.navigateByUrl('/login');
            return of(null);
          }
          if (!this.article.favorited) {
            return this.articleService.favorite(this.article.slug).pipe(
              tap((data) => {
                this.toggle.emit(true);
              })
            );
          } else {
            return this.articleService.unfavorite(this.article.slug).pipe(
              tap((data) => {
                this.toggle.emit(false);
              })
            );
          }
        }),
        finalize(() => (this.isSubmitting = false))
      )
      .subscribe();
  }
}
