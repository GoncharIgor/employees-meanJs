import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CacheInterceptor } from './cache.interceptor';
import { CacheService } from './cache.service';

describe('CacheInterceptor', () => {
  let httpMock: HttpTestingController;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        CacheService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: CacheInterceptor,
          multi: true
        }
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    http = TestBed.get(HttpClient);
  });

  it('should cache a GET request if "cacheable" header is set', () => {
    const url = '/api/test';
    const response = {testProp: 1};
    httpRequest(url, 'true');
    httpMock.expectOne({url, method: 'GET'}).flush(response);
    httpRequest(url, 'true');
    httpMock.expectNone({url, method: 'GET'});
  });

  it('should not cache a GET request if "cacheable" header is not set', () => {
    const url = '/api/test/nocache';
    const response = {testProp: 1};
    httpRequest(url, 'false');
    httpMock.expectOne({url, method: 'GET'}).flush(response);
    httpRequest(url, 'false');
    httpMock.expectOne({url, method: 'GET'}).flush(response);
  });

  function httpRequest(url: string, cacheable: string) {
    http.get(
      url,
      {headers: {'cacheable': cacheable}
      }).subscribe();
  }
});
