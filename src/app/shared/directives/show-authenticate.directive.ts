import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { UserService } from 'app/apis/user/user.service';

@Directive({
  selector: '[appShowAuthenticate]',
})
export class ShowAuthenticateDirective implements OnInit {
  condition: boolean;
  @Input() set appShowAuthenticate(condition: boolean) {
    this.condition = condition;
  }
  constructor(
    private tpml: TemplateRef<any>,
    private viewTpml: ViewContainerRef,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.isAuth.subscribe((authenticated) => {
      if (
        (authenticated && this.condition) ||
        (!authenticated && !this.condition)
      ) {
        this.viewTpml.createEmbeddedView(this.tpml);
      } else {
        this.viewTpml.clear();
      }
    });
  }
}
