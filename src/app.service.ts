import { Injectable, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject('CACHE_MANAGER') private cacheManager: Cache) {}

  async setCacheKey(key: string, value: any): Promise<void> {
    return await this.cacheManager.set(key, value);
  }

  async getCacheKey(key: string): Promise<void> {
    console.log(await this.cacheManager.store.keys());
    return await this.cacheManager.get(key);
  }

  async deleteCacheKey(key: string): Promise<void> {
    return await this.cacheManager.del(key);
  }

  async resetCache(): Promise<void> {
    return await this.cacheManager.reset();
  }

  async cacheStore(): Promise<string[]> {
    return await this.cacheManager.store.keys();
  }
}
