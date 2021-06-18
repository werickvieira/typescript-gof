import { Cache } from  './Cleaner';
import Context from './Context';
import Fifo  from './Fifo';

describe("MEMORY CONTEXT", () => {

  const ctx = new Context();

  beforeEach(() => {
    const cache: Cache = {
      storage: new Map<string, string>(),
      capacity: 0,
      maxCapacity: 2,
    };

    ctx.setCache(cache);
  });

  afterEach(() => {
    ctx.setContext(null);
  });

  it("should context instance equals FIFO", () => {

    const fifo = new Fifo();
    ctx.setContext(fifo);
    expect(ctx.getContext()).toBeInstanceOf(Fifo);

  });

  it("should add cache value", () => {

    const key = "A";
    const value = "ABCDEF";
    const fifo = new Fifo();

    ctx.setContext(fifo);
    ctx.addCacheValue(key, value);

    expect(ctx.getCacheValue(key)).toBe("ABCDEF");

  });

  it("should capacity equals 1", () => {

    const key = "A";
    const value = "ABCDEF";
    const fifo = new Fifo();

    ctx.setContext(fifo);
    ctx.addCacheValue(key, value);

    expect(ctx.getCache().capacity).toEqual(1);

  });

  it("should capacity equals 2", () => {

    const value = "ABCDEF";
    const fifo = new Fifo();

    ctx.setContext(fifo);

    ctx.addCacheValue("a", value);
    ctx.addCacheValue("b", value);
    ctx.addCacheValue("c", value);

    expect(ctx.getCache().capacity).toEqual(2);

  });

  it("should capacity equals 2, when addCacheValue is called 4 times", () => {

    const value = "ABCDEF";
    const fifo = new Fifo();

    ctx.setContext(fifo);

    ctx.addCacheValue("a", value);
    ctx.addCacheValue("b", value);
    ctx.addCacheValue("c", value);
    ctx.addCacheValue("d", value);

    expect(ctx.getCache().capacity).toEqual(2);

  });

  it("should capacity equals 0 when a key is added and removed", () => {

    const fifo = new Fifo();

    ctx.setContext(fifo);

    ctx.addCacheValue("a", "ABCDEF");
    ctx.deleteCacheValue("a");

    expect(ctx.getCache().capacity).toEqual(0);

  });

});
