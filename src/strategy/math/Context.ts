import Operation, { Operators } from  './Operation';

class Context {

  private operation: Operation

  constructor(o?: Operation){
    if (o !== undefined){
      this.operation = o
    }
  }

  setContext(operators: Operation): void {
    this.operation = operators;
  }

  getContext(): Operation {
    return this.operation;
  }

  execute(operators: Operators): number {
    return this.operation.doOperation(operators)
  }
}

export default Context;
