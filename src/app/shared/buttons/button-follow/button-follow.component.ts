import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'app/apis/profile/profile.model';
import { ProfileService } from 'app/apis/profile/profile.service';
import { UserService } from 'app/apis/user/user.service';
import { of, Subject } from 'rxjs';
import { concatMap, finalize, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-button-follow',
  templateUrl: './button-follow.component.html',
  styleUrls: ['./button-follow.component.css'],
})
export class ButtonFollowComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<any>();
  @Input() profile: Profile;
  @Output() toggle = new EventEmitter<boolean>();
  isSubmitting = true;
  constructor(
    private router: Router,
    private profileService: ProfileService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  toggleFollow() {
    this.userService.isAuth
      .pipe(
        takeUntil(this.unsubscribe$),
        concatMap((authenticated) => {
          if (!authenticated) {
            this.router.navigateByUrl('/login');
            return of(null);
          }
          if (!this.profile.following) {
            return this.profileService.followUser(this.profile.username).pipe(
              tap((data) => {
                this.toggle.emit(true);
              })
            );
          } else {
            return this.profileService.unFollowUser(this.profile.username).pipe(
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
