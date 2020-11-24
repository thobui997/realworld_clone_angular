import { TestBed } from '@angular/core/testing';

import { NotificationsErrorInterceptor } from './notifications-error.interceptor';

describe('NotificationsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NotificationsErrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NotificationsErrorInterceptor = TestBed.inject(NotificationsErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
