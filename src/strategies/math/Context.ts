import Operation, { Operators } from  './Operation';

class Context {

  private operation: Operation

  constructor(o?: Operation){
    if (o !== undefined){
      this.operation = o
    }
  }

  setContext(operationType: Operation): void {
    this.operation = operationType;
  }

  getContext(): Operation {
    return this.operation;
  }

  execute(operators: Operators): number {
    return this.operation.doOperation(operators)
  }
}

export default Context;
