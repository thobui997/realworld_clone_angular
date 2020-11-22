import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TagsService } from 'app/apis/tags/tags.service';
import { UserService } from 'app/apis/user/user.service';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  listConfig: ArticleListConfig;
  isAuthenticated = false;
  tagList: string[];
  isLoading = true;
  unsubscribe$: Subject<any> = new Subject<any>();
  constructor(
    private router: Router,
    private userSerice: UserService,
    private tagsService: TagsService
  ) {}

  ngOnInit(): void {
    this.userSerice.isAuth
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
        if (isAuthenticated) {
          this.setListTo('feed');
        } else {
          this.setListTo('all');
        }
      });

    this.tagsService
      .getListTag()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((tags) => {
        this.tagList = tags;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  setListTo(type: string = '', filters: Object = {}): void {
    if (type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }
    this.listConfig = { type, filters };
  }
}

export interface ArticleListConfig {
  type: string;
  filters: {
    tag?: string;
    author?: string;
    favorited?: string;
    limit?: number;
    offset?: number;
  };
}
