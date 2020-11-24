import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../apis/articles/articles.service';
import { finalize, pluck, switchMap, tap } from 'rxjs/operators';
import { ArticleModel } from '../apis/articles/article.model';
import { UserService } from '../apis/user/user.service';
import { User } from '../apis/user/user.model';
import { CommentService } from '../apis/comment/comment.service';
import { CommentModel } from '../apis/comment/comment.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article: ArticleModel.Article;
  commentList: CommentModel.MultipleComment;
  currentUser: User;
  isSubmitting = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticlesService,
    private userService: UserService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        pluck('slug'),
        switchMap((slug: string) =>
          this.articleService
            .getSingleArticle(slug)
            .pipe(tap((article) => (this.article = article)))
        ),
        switchMap((article) =>
          this.commentService.getCommentsFromAnArticle(article.slug)
        )
      )
      .subscribe((comments) => (this.commentList = comments));

    this.userService.currentUser.subscribe((user) => (this.currentUser = user));
  }

  addComment(commentValue): void {
    this.isSubmitting = true;
    if (!commentValue.value) {
      return;
    }
    const commentBody = {
      body: commentValue.value,
    };
    this.commentService
      .addCommentsFromAnArticle(this.article.slug, commentBody)
      .pipe(
        finalize(() => {
          this.isSubmitting = false;
          commentValue.value = '';
        })
      )
      .subscribe((comment) => {
        this.commentList.comments.unshift(comment);
      });
  }

  onDeleteComment(comment: CommentModel.SingleComment): void {
    this.commentService
      .deleteCommentsFromAnArticle(this.article.slug, comment.id)
      .subscribe((success) => {
        this.commentList.comments = this.commentList.comments.filter(
          (item) => item.id !== comment.id
        );
      });
  }

  deleteArticle(): void {
    this.articleService
      .deleteArticle(this.article.slug)
      .subscribe((success) =>
        this.router.navigate(['/profile', this.currentUser.username])
      );
  }

  onToggleFollow(follow: boolean): void {
    this.article.author.following = follow;
  }

  onToggleFavorite(favorite: boolean): void {
    this.article.favorited = favorite;
    if (favorite) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }
}
