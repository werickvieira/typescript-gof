type Cache = {
  storage: Map<string, string>,
  capacity: number,
  maxCapacity: number,
};

interface Cleaner {
  evict(cache: Cache): void;
}

export {
  Cleaner as default,
  Cache,
}
