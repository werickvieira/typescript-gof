import Cleaner, { Cache } from "./Cleaner";
import Logger from '../../helpers/log/index';

const logger = Logger.child({ "package":"strategy/memory/lru" })

class Lru implements Cleaner {

  evict(cache: Cache): void {

    logger.log('info', {
      capacity: cache.capacity,
      maxCapacity: cache.maxCapacity,
      message: "Evicting by LRU strategy",
    });
  }
}

export default Lru;
