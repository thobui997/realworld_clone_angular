import { Component, OnInit } from '@angular/core';
import { User } from 'app/apis/user/user.model';
import { UserService } from 'app/apis/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userService.currentUser.subscribe((user) => (this.currentUser = user));
  }
}
