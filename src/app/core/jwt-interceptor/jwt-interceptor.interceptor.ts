import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from 'app/apis/json-web-token/jwt.service';
import { User } from 'app/apis/user/user.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private readonly jwtService: JwtService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const currentToken = this.jwtService.getToken();
    if (currentToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${currentToken}`,
        },
      });
    }

    return next.handle(request);
  }
}
