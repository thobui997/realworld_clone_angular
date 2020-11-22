import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommentModel } from '../../apis/comment/comment.model';
import { UserService } from '../../apis/user/user.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.css'],
})
export class ArticleCommentComponent implements OnInit, OnDestroy {
  @Input() comment: CommentModel.SingleComment;
  @Output() deleteComment = new EventEmitter<boolean>();
  unsubscribe$ = new Subject();
  canModify: boolean;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.currentUser
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (currentUser) =>
          (this.canModify =
            currentUser.username === this.comment.author.username)
      );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  deleteClicked(): void {
    this.deleteComment.emit(true);
  }
}
