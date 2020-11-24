import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt-interceptor/jwt-interceptor.interceptor';
import {NotificationsErrorInterceptor} from './notifications-errors-interceptor/notifications-error.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationsErrorInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
