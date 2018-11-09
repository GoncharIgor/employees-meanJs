import { CacheService } from './cache.service';
import { HttpResponse } from '@angular/common/http';

describe('CacheService', () => {
  let service: CacheService;
  beforeEach(() => { service = new CacheService(); });

  describe('#get', () => {
    it('should return cached response by its url', () => {
      const url = 'api/test';
      const res = new HttpResponse({
        url,
        status: 200,
        body: {}
      });
      service.put(url, res);
      expect(service.get(url)).toEqual(res);
    });

    it('should be null if response is not cached', () => {
      const url = 'api/test?q=zzz';
      expect(service.get(url)).toBe(null);
    });
  });
});
