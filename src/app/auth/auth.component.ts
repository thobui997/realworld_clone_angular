import { Component, OnInit } from '@angular/core';
import { finalize, map, pluck } from 'rxjs/operators';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/apis/user/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  title: string;
  authType: string;
  authForm: FormGroup;
  body: ValueForm;
  isSubmitForm = false;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly userService: UserService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.route.url
      .pipe(
        map((data) => data[data.length - 1]),
        pluck('path')
      )
      .subscribe((path) => {
        this.authType = path;
        this.title = this.authType === 'login' ? 'Sign In' : 'Sign Up';
        if (path === 'register') {
          this.authForm.addControl(
            'username',
            new FormControl('', Validators.required)
          );
        }
      });
  }

  initForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitAuthForm(): void {
    this.isSubmitForm = true;
    this.body = {
      user: this.authForm.getRawValue(),
    };

    this.userService
      .attempAuth(this.body, this.authType)
      .pipe(finalize(() => (this.isSubmitForm = false)))
      .subscribe((data) => this.router.navigateByUrl('/home'));
  }
}

export interface ValueForm {
  user: {
    email: string;
    password: string;
    username?: string;
  };
}
