import Operation, { Operators } from  './Operation';

class Context {

  private operation: Operation

  constructor(o: Operation){
    this.operation = o
  }

  setContext(o: Operation): void {
    this.operation = o;
  }

  getContext(): Operation {
    return this.operation;
  }

  execute(o: Operators): number {
    return this.operation.doOperation(o)
  }
}

export default Context;
