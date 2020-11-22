import { TestBed } from '@angular/core/testing';
import { HttpHandleErrorInterceptor } from './http-handle-error.interceptor';


describe('HttpHandleErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpHandleErrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpHandleErrorInterceptor = TestBed.inject(HttpHandleErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
