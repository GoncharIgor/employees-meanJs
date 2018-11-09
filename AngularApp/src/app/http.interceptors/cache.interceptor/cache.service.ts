import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class CacheService {
  private cacheMap = new Map<string, HttpResponse<any>>();

  get(url: string): HttpResponse<any> {
    const cachedResponse = this.cacheMap.get(url);

    return cachedResponse || null;
  }

  put(url: string, response: HttpResponse<any>): void {
    this.cacheMap.set(url, response);
  }
}
