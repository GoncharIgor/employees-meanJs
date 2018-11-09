import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { CacheService } from './cache.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cache: CacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isCacheable(req)) {
      return next.handle(req);
    }

    const cachedResponse = this.cache.get(req.urlWithParams);
    if (cachedResponse) {
      return of(cachedResponse);
    }

    return this.sendRequest(req, next);
  }

  private sendRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req.headers.delete('cacheable');

    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cache.put(req.urlWithParams, event);
        }
      })
    );
  }

  private isCacheable(req: HttpRequest<any>): boolean {
    return req.method === 'GET' && req.headers.get('cacheable') === 'true';
  }
}
