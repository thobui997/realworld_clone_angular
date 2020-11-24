import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationsErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 422:
            this.toastr.error('Error', 'A validate error has occurred');
            break;
          case 401:
            this.toastr.error('Error', 'Not provide authentication');
            break;
          case 403:
            this.toastr.error(
              'Error',
              `You don't have permission to perform the action`
            );
            break;
          case 404:
            this.toastr.error('Error', 'Not found page!!');
            break;
        }
        return throwError(error);
      })
    );
  }
}
