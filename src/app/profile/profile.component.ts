import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'app/apis/profile/profile.model';
import { ProfileService } from 'app/apis/profile/profile.service';
import { User } from 'app/apis/user/user.model';
import { UserService } from 'app/apis/user/user.service';
import { ArticleListConfig } from 'app/home/home.component';
import { pluck, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  currentUser: User;
  isUser: boolean;
  postListConfig: ArticleListConfig;
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        pluck('username'),
        switchMap((username) => {
          return this.profileService.getProfile(username).pipe(
            tap((profile) => {
              this.profile = profile;
              this.postListConfig = {
                type: 'myPost',
                filters: {
                  author: profile.username,
                },
              };
            })
          );
        }),
        switchMap((profile) => {
          return this.userService.currentUser.pipe(
            tap((user) => {
              this.isUser = profile.username === user.username;
            })
          );
        })
      )
      .subscribe();
  }

  onToggle(follow: boolean): void {
    this.profile.following = follow;
  }

  setPost(type: string, filters: Object = {}): void {
    this.postListConfig = { type, filters };
  }
}
