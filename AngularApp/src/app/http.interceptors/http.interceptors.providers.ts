import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './cache.interceptor/cache.interceptor';
import { CacheService } from './cache.interceptor/cache.service';

export const httpInterceptorProviders = [
  CacheService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CacheInterceptor,
    multi: true,
    deps: [CacheService]
  }
];
