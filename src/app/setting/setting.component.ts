import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/apis/user/user.model';
import { UserService } from 'app/apis/user/user.service';
import { Observable, of } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent implements OnInit {
  settingFormGroup$: Observable<FormGroup>;
  isSubmitting = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.settingFormGroup$ = this.userService.currentUser.pipe(
      switchMap((user) => of(this.initForm(user)))
    );
  }

  logOut(): void {
    this.userService.destroyAuth();
    this.router.navigateByUrl('/home');
  }

  initForm(user: User): FormGroup {
    return this.fb.group({
      image: [user?.image],
      username: [user.username, [Validators.required]],
      bio: [user?.bio],
      email: [user.email, [Validators.email]],
      password: [''],
    });
  }

  onSubmitForm(settingFormGroup: FormGroup): void {
    this.isSubmitting = true;
    this.userService
      .updateUser({
        user: settingFormGroup.getRawValue(),
      })
      .pipe(finalize(() => (this.isSubmitting = false)))
      .subscribe((user) => this.router.navigate(['/profile', user.username]));
  }
}

export interface UpdateUser {
  user: {
    username: string;
    image?: string;
    bio?: string;
    email: string;
    password: string;
  };
}
