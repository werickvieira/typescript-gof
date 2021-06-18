import Context from './Context';
import { Cache } from './Cleaner';
import Fifo  from './Fifo';
import Lru from './Lru';
import Lfu from './Lfu';
import Logger from '../../helpers/log/index';

const logger = Logger.child({ "package":"strategy/memory" })

const fifo = new Fifo();
const lru = new Lru();
const lfu = new Lfu();

const cache: Cache = {
  storage: new Map<string, string>(),
  capacity: 0,
  maxCapacity: 2,
};

const ctx = new Context();

ctx.setCache(cache);
ctx.setContext(fifo);

logger.log('debug', { capacity: cache.capacity, message: "change context to FIFO" });

ctx.addCacheValue("1", "AAA");
ctx.addCacheValue("2", "BBB");
ctx.addCacheValue("3", "CCC");
ctx.setContext(lru);

logger.log('debug', { capacity: cache.capacity, message: "change context to LRU" });

ctx.addCacheValue("4", "DDD");
ctx.setContext(lfu);

logger.log('debug', { capacity: cache.capacity, message: "change context to LFU" });

ctx.addCacheValue("5", "EEE");
