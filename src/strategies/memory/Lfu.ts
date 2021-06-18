import Cleaner, { Cache } from "./Cleaner";
import Logger from '../../helpers/log/index';

const logger = Logger.child({ "package":"strategy/memory/lfu" })

class Lfu implements Cleaner {

  evict(cache: Cache): void {

    logger.log('info', {
      capacity: cache.capacity,
      maxCapacity: cache.maxCapacity,
      message: "Evicting by LFU strategy",
    });
  }
}

export default Lfu;
