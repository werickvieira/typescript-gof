import Cleaner, { Cache } from  './Cleaner';

class Context {

  private cleaner: Cleaner;
  private cache: Cache;

  constructor(c?: Cleaner) {
    if (c !== undefined) {
      this.cleaner = c;
    }
  }

  setCache(c: Cache): void {
    if (c !== undefined) {
      this.cache = c;
    }
  }

  getCache(): Cache {
    return this.cache;
  }

  addCacheValue(key: string, value: string): void {
    if (this.cache.capacity === this.cache.maxCapacity) {
      this.evictWrap(this.cache);
    }

    this.cache.capacity++;
    this.cache.storage.set(key, value);
  }

  getCacheValue(key: string): string {
    return this.cache.storage.get(key);
  }

  deleteCacheValue(key: string): void {
    if (this.cache.storage.delete(key)) {
      this.cache.capacity--;
    }
  }

  setContext(contextType: Cleaner): void {
    this.cleaner = contextType;
  }

  getContext(): Cleaner {
    return this.cleaner;
  }

  evictWrap(c: Cache): void {
    this.cleaner.evict(c);
    this.cache.capacity--;
  }
}

export default Context;
