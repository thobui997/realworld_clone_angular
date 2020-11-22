import { Component, OnInit } from '@angular/core';
import { UserService } from './apis/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userService.populated();
  }
}
