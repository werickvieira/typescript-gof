import Cleaner, { Cache } from "./Cleaner";
import Logger from '../../helpers/log/index';

const logger = Logger.child({ "package":"strategy/memory/fifo" })

class Fifo implements Cleaner {

  evict(cache: Cache): void {

    logger.log('info', {
      capacity: cache.capacity,
      maxCapacity: cache.maxCapacity,
      message: "Evicting by FIFO strategy",
    });
  }
}

export default Fifo;
